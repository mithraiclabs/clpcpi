use solana_client::nonblocking::rpc_client::RpcClient;
use clap::{Arg, Command};
use log::*;

mod solana_utils;
mod config;

fn start_logger() {
    simple_logger::SimpleLogger::new()
    .with_level(LevelFilter::Info)
    .init()
    .unwrap();
}

#[tokio::main]
async fn main() {
    start_logger();
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

    info!("Hello, world! {}", config.rpc_url);
    let rpc_client = RpcClient::new(config.rpc_url);
    // TODO: Load all the vaults
    // TODO: Filter the vaults to only those with jitoSOL (and Orca owned pools)
    // TODO: Load all Whirlpools, Positions, and LP mints for the vaults
    // TODO: Caculate the TVL of each vault amount
    // TODO: Return the amount of jitoSOL denominated liquidity, owned by each LP token
}
