use anchor_lang::prelude::*;

pub mod instructions;
pub mod keys;
pub mod state;
pub mod utils;
pub mod errors;

use crate::instructions::*;
//use crate::state::*;

declare_id!("GugujEk6ZMSzyJLBnLQ9DDs14xt9BW6F9hjQwSThf2XY");

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
