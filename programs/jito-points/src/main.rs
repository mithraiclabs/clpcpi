use std::{collections::HashMap, rc::Rc};

use crate::solana_utils::get_many_accounts;
use accounts::{ClpVault, Position, Whirlpool};
use anchor_client::{Client, Cluster};
use anchor_lang::{prelude::Pubkey, AccountDeserialize, declare_id};
use anchor_spl::{token::Mint, token_interface::TokenAccount};
use clap::{Arg, Command};
use log::*;
use solana_sdk::{commitment_config::CommitmentConfig, signature::Keypair};

mod accounts;
mod config;
mod solana_utils;

declare_id!("ArmN3Av2boBg8pkkeCK9UuCN9zSUVc2UQg1qR2sKwm8d");

fn start_logger() {
    simple_logger::SimpleLogger::new()
        .with_level(LevelFilter::Info)
        .init()
        .unwrap();
}

struct VaultAccounts {
    vault: ClpVault,
    whirlpool: Option<Whirlpool>,
    reserves: Vec<TokenAccount>,
    positions: Vec<Position>,
    lp_mint: Option<Mint>,
}
impl VaultAccounts {
    fn new(vault: ClpVault) -> Self {
        Self {
            vault,
            whirlpool: None,
            reserves: vec![],
            positions: vec![],
            lp_mint: None,
        }
    }
}

enum AccountType {
    Whirlpool,
    Token,
    Position,
    Mint,
}

type KeyVaultMap = HashMap<Pubkey, (Pubkey, AccountType)>;

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
    let program = client
        .program(Pubkey::try_from("ArmN3Av2boBg8pkkeCK9UuCN9zSUVc2UQg1qR2sKwm8d").unwrap())
        .unwrap();

    // Load all the vaults
    let vaults = load_all_vaults(&program).await;
    let mut vault_map: HashMap<Pubkey, VaultAccounts> = HashMap::new();
    // Filter the vaults to only those with jitoSOL (and Orca owned pools)
    let mut key_vault_type_map: KeyVaultMap = HashMap::new();
    let mut keys: Vec<Pubkey> = Vec::new();
    for (vault_key, vault) in vaults.into_iter() {
        if vault.token_mint_a.eq(&jito_sol_mint) || vault.token_mint_b.eq(&jito_sol_mint) {
            keys.push(vault.clp);
            key_vault_type_map.insert(vault.clp, (vault_key, AccountType::Whirlpool));
            keys.push(vault.lp_mint);
            key_vault_type_map.insert(vault.lp_mint, (vault_key, AccountType::Mint));
            keys.push(vault.token_vault_a);
            key_vault_type_map.insert(vault.token_vault_a, (vault_key, AccountType::Token));
            keys.push(vault.token_vault_b);
            key_vault_type_map.insert(vault.token_vault_b, (vault_key, AccountType::Token));
            for vault_position in vault.positions.iter() {
                if vault_position.position_key.ne(&Pubkey::default()) {
                    keys.push(vault_position.position_key);
                    key_vault_type_map.insert(
                        vault_position.position_key,
                        (vault_key, AccountType::Position),
                    );
                }
            }
            vault_map.insert(vault_key, VaultAccounts::new(vault));
        }
    }

    // TODO: Load all Whirlpools, Positions, token accoutns and LP mints for the vaults
    get_many_accounts(
        &program.async_rpc(),
        keys.as_ref(),
        true,
        |start_index, accounts| {
            for (i, account) in accounts.iter().enumerate() {
                let index = start_index + i;
                let pubkey = &keys[index];
                match account {
                    Some(account) => {
                        let (vault_key, account_type) = key_vault_type_map.get(pubkey).unwrap();
                        let vault_accounts = vault_map.get_mut(vault_key).unwrap();
                        match account_type {
                            AccountType::Whirlpool => {
                                // let whirlpool: Whirlpool = AccountDeserialize::try_deserialize(&mut account.data.as_ref()).unwrap();
                            }
                            AccountType::Token => {
                                let token_account: TokenAccount =
                                    AccountDeserialize::try_deserialize(&mut account.data.as_ref())
                                        .unwrap();
                                vault_accounts.reserves.push(token_account);
                            }
                            AccountType::Position => {
                                // let position: Position = AccountDeserialize::try_deserialize(&mut account.data.as_ref()).unwrap();
                            }
                            AccountType::Mint => {
                                let lp_mint: Mint =
                                    AccountDeserialize::try_deserialize(&mut account.data.as_ref())
                                        .unwrap();
                                vault_accounts.lp_mint = Some(lp_mint);
                            }
                        }
                    }
                    None => {}
                }
            }
        },
    )
    .await;
    // TODO: Caculate the TVL of each vault amount
    // TODO: Return the amount of jitoSOL denominated liquidity, owned by each LP token
}

async fn load_all_vaults(program: &anchor_client::Program<Rc<Keypair>>) -> Vec<(Pubkey, ClpVault)> {
    let vault_accounts: Vec<(Pubkey, ClpVault)> = program.accounts(vec![]).await.unwrap();
    info!("{} vault_accounts", vault_accounts.len());
    return vault_accounts;
}
