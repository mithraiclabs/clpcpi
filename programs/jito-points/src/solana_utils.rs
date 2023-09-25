use std::time::Duration;
use log::*;
use solana_client::nonblocking::rpc_client::RpcClient;
use solana_sdk::{account::Account, pubkey::Pubkey};

/// Will get multiple accounts and optionally retry when the request fails. The closure is ran
///  only on successful response.
pub async fn get_multiple_accounts<F>(
  rpc_client: &RpcClient,
  keys: &[Pubkey],
  no_retry: bool,
  mut f: F,
) where
  F: FnMut(Vec<Option<Account>>),
{
  let mut retry = true;
  while retry {
      let res = rpc_client.get_multiple_accounts(keys).await;
      match res {
          Ok(accounts) => {
              retry = false;
              f(accounts);
          }
          Err(err) => {
              if no_retry {
                  retry = false;
              }
              error!("Error getting multiple accounts: {}", err);
              tokio::time::sleep(Duration::new(1, 0)).await;
          }
      }
  }
}

const BATCH_SIZE: usize = 100;

pub async fn get_many_accounts<F>(rpc_client: &RpcClient, keys: &[Pubkey], no_retry: bool, mut f: F)
where
  F: FnMut(usize, Vec<Option<Account>>),
{
  // split into batches of 100
  for i in (0..keys.len()).step_by(BATCH_SIZE) {
      let end = keys.len().min(i + BATCH_SIZE);
      let batch_slice = &keys[i..end];
      get_multiple_accounts(rpc_client, batch_slice, no_retry, |accounts| {
          f(i, accounts);
      }).await;
  }

}