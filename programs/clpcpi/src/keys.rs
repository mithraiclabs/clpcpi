#[cfg(feature = "localnet")]
pub const CLPVAULT_PROGRAM_KEY: &str = "E6xiKCViJ2E6YyfFEa7eRZx3ngX4KPSVTSVTLywaEwJ8";
#[cfg(all(not(feature = "localnet"), feature = "devnet-deploy"))]
pub const CLPVAULT_PROGRAM_KEY: &str = "E6xiKCViJ2E6YyfFEa7eRZx3ngX4KPSVTSVTLywaEwJ8";
#[cfg(all(not(feature = "localnet"), not(feature = "devnet-deploy")))]
pub const CLPVAULT_PROGRAM_KEY: &str = "ArmN3Av2boBg8pkkeCK9UuCN9zSUVc2UQg1qR2sKwm8d";

use std::str::FromStr;

use anchor_lang::solana_program;
use solana_program::pubkey::Pubkey;

pub fn clp_key() -> Pubkey {
    Pubkey::from_str(CLPVAULT_PROGRAM_KEY).unwrap()
}
