use anchor_lang::prelude::*;

pub mod instructions;
pub mod keys;
pub mod state;
pub mod utils;
pub mod errors;

use crate::instructions::*;
//use crate::state::*;

declare_id!("ArmN3Av2boBg8pkkeCK9UuCN9zSUVc2UQg1qR2sKwm8d");

#[program]
pub mod clpcpi {
    use super::*;

    pub fn deposit<'info>(
        ctx: Context<'_, '_, '_, 'info, DepositToClp<'info>>,
        lp_mint_amount: u64,
        token_max_a: u64,
        token_max_b: u64,
    ) -> Result<()> {
        deposit::handler(ctx, lp_mint_amount, token_max_a, token_max_b)
    }

}
