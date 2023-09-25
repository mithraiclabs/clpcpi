use std::{rc::Rc, mem::align_of};

use anchor_client::{Client, Cluster};
use anchor_lang::{prelude::Pubkey, AccountDeserialize};
use clap::{Arg, Command};
use clpcpi::state::ClpVault;
use log::*;
use solana_account_decoder::UiAccountEncoding;
use solana_client::{
    nonblocking::rpc_client::RpcClient,
    rpc_config::{RpcAccountInfoConfig, RpcProgramAccountsConfig},
    rpc_filter::{Memcmp, RpcFilterType},
};
use solana_sdk::{
    commitment_config::CommitmentConfig,
    signature::{read_keypair_file, Keypair},
};

mod config;
mod solana_utils;

fn start_logger() {
    simple_logger::SimpleLogger::new()
        .with_level(LevelFilter::Info)
        .init()
        .unwrap();
}

#[tokio::main]
async fn main() {
    start_logger();
    let jito_sol_mint = Pubkey::try_from("J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn").unwrap();

    let matches = Command::new("jito-points")
        .arg(
            Arg::new("config")
                .short('c')
                .long("config")
                .takes_value(true)
                .required(true)
                .help("Provides a config file to jito-points"),
        )
        .get_matches();

    let file_path = matches.get_one::<String>("config").unwrap();
    info!("Running jitoPoints with config at {}", file_path);
    let config = config::Config::from_path(file_path).unwrap();

    // Wallet and cluster params.
    let dummy_payer = Rc::new(Keypair::new());
    let url = Cluster::Custom(
        config.rpc_url.to_string(),
        "ws://127.0.0.1:8900".to_string(),
    );
    let client = Client::new_with_options(
        url.clone(),
        dummy_payer.clone(),
        CommitmentConfig::processed(),
    );

    info!("Hello, world! {}", config.rpc_url);
    // Load all the vaults
    info!("Loading vaults. Align {}", align_of::<ClpVault>());
    let vaults = load_all_vaults(&client).await;
    // Filter the vaults to only those with jitoSOL (and Orca owned pools)
    let jito_vaults: Vec<(Pubkey, ClpVault)> = vaults.into_iter().filter(|(key, vault)| {
        return vault.token_mint_a.eq(&jito_sol_mint) || vault.token_mint_b.eq(&jito_sol_mint)
    }).collect();

    // TODO: Load all Whirlpools, Positions, and LP mints for the vaults
    // TODO: Caculate the TVL of each vault amount
    // TODO: Return the amount of jitoSOL denominated liquidity, owned by each LP token
}

async fn load_all_vaults(client: &anchor_client::Client<Rc<Keypair>>) -> Vec<(Pubkey, ClpVault)> {
    let program =
        client.program(Pubkey::try_from("ArmN3Av2boBg8pkkeCK9UuCN9zSUVc2UQg1qR2sKwm8d").unwrap()).unwrap();
    let vault_accounts: Vec<(Pubkey, ClpVault)> = program.accounts(vec![]).await.unwrap();
    info!("{} vault_accounts", vault_accounts.len());
    return vault_accounts;
}
