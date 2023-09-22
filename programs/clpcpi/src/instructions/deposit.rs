use std::str::FromStr;

use crate::state::ClpVault;
use crate::{keys::CLPVAULT_PROGRAM_KEY, utils::get_function_hash};
use anchor_lang::prelude::*;
use anchor_lang::solana_program::{instruction::Instruction, program::invoke};
use crate::errors::ErrorCode;

use anchor_spl::token::{Mint, Token, TokenAccount};

/// Demo context for an IX calling CLP Vault's `deposit` IX as a CPI
#[derive(Accounts)]
pub struct DepositToClp<'info> {
    pub payer: Signer<'info>,

    #[account(mut)]
    pub user_token_a: Account<'info, TokenAccount>,

    #[account(mut)]
    pub user_token_b: Account<'info, TokenAccount>,
    /// `user_lp_token_acct`
    #[account(mut)]
    pub user_lp_token_acct: Box<Account<'info, TokenAccount>>,

    #[account(
        has_one = position_bundle_token_account @ ErrorCode::PositionBundleTokenAccountMismatch,
        has_one = token_vault_a @ ErrorCode::TokenVaultAMismatch,
        has_one = token_vault_b @ ErrorCode::TokenVaultBMismatch,
        has_one = lp_mint @ ErrorCode::LpMintMismatch,
        has_one = clp @ ErrorCode::ClpMismatch,
    )]
    pub clp_vault: AccountLoader<'info, ClpVault>,

    #[account(mut)]
    pub lp_mint: Box<Account<'info, Mint>>,
    #[account(mut)]
    pub token_vault_a: Box<Account<'info, TokenAccount>>,
    #[account(mut)]
    pub token_vault_b: Box<Account<'info, TokenAccount>>,
    /// CHECK: validated in CPI
    pub position_bundle_token_account: Box<Account<'info, TokenAccount>>,

    /// CHECK: validated in CPI
    pub clp_program: UncheckedAccount<'info>,
    /// CHECK: validated in CPI
    #[account(mut)]
    pub clp: UncheckedAccount<'info>,
    /// CHECK: validated in CPI
    #[account(mut)]
    pub clp_token_vault_a: UncheckedAccount<'info>,
    /// CHECK: validated in CPI
    #[account(mut)]
    pub clp_token_vault_b: UncheckedAccount<'info>,

    pub token_program: Program<'info, Token>,
}

pub fn handler<'info>(
    ctx: Context<'_, '_, '_, 'info, DepositToClp<'info>>,
    lp_mint_amount: u64,
    token_max_a: u64,
    token_max_b: u64,
) -> Result<()> {
    let clp_program_id: Pubkey = Pubkey::from_str(CLPVAULT_PROGRAM_KEY).unwrap();
    let instruction: Instruction = deposit_cpi_instruction(
        &ctx,
        clp_program_id,
        lp_mint_amount,
        token_max_a,
        token_max_b,
    )?;
    let mut account_infos = vec![
        ctx.accounts.payer.to_account_info(),
        ctx.accounts.token_vault_a.to_account_info(),        // a_acc.
        ctx.accounts.token_vault_b.to_account_info(),        // b_acc
        ctx.accounts.user_lp_token_acct.to_account_info(),        // lp_acc
        ctx.accounts.clp_vault.to_account_info(),     // clp_vault
        ctx.accounts.lp_mint.to_account_info(),       // lp_mint
        ctx.accounts.token_vault_a.to_account_info(), // a_vault
        ctx.accounts.token_vault_b.to_account_info(), // b_vault
        ctx.accounts.position_bundle_token_account.to_account_info(), // pos_bun
        ctx.accounts.clp_program.to_account_info(),   // clp_pro
        ctx.accounts.clp.to_account_info(),           // clp
        ctx.accounts.clp_token_vault_a.to_account_info(), // clp_a
        ctx.accounts.clp_token_vault_b.to_account_info(), // clp_b
        ctx.accounts.token_program.to_account_info(), // token
    ];
    for remaining_account_info in ctx.remaining_accounts {
        account_infos.push(remaining_account_info.clone());
    }

    invoke(
        &instruction,
        &account_infos
    )?;

    // Example with a PDA as payer:
    // invoke_signed(
    //     &instruction,
    //     &account_infos,
    //     &[clp_route_signer_seeds!(route)],
    // )?;
    Ok(())
}

pub fn deposit_cpi_instruction(
    ctx: &Context<DepositToClp>,
    program_id: Pubkey,
    lp_mint_amount: u64,
    token_max_a: u64,
    token_max_b: u64,
) -> Result<Instruction> {
    let mut accounts = vec![
        AccountMeta::new_readonly(ctx.accounts.payer.key(), true), // payer
        AccountMeta::new(ctx.accounts.token_vault_a.key(), false),        // a_acc.
        AccountMeta::new(ctx.accounts.token_vault_b.key(), false),        // b_acc
        AccountMeta::new(ctx.accounts.user_lp_token_acct.key(), false),        // lp_acc
        AccountMeta::new_readonly(ctx.accounts.clp_vault.key(), false), // clp_vault
        AccountMeta::new(ctx.accounts.lp_mint.key(), false),       // lp_mint
        AccountMeta::new(ctx.accounts.token_vault_a.key(), false), // a_vault
        AccountMeta::new(ctx.accounts.token_vault_b.key(), false), // b_vault
        AccountMeta::new_readonly(ctx.accounts.position_bundle_token_account.key(), false), // pos_bun
        AccountMeta::new_readonly(ctx.accounts.clp_program.key(), false), // clp_pro
        AccountMeta::new(ctx.accounts.clp.key(), false),                  // clp
        AccountMeta::new(ctx.accounts.clp_token_vault_a.key(), false),    // clp_a
        AccountMeta::new(ctx.accounts.clp_token_vault_b.key(), false),    // clp_b
        AccountMeta::new_readonly(ctx.accounts.token_program.key(), false), // token
    ];
    for account_info in ctx.remaining_accounts.iter() {
        accounts.push(AccountMeta::new_readonly(*account_info.key, account_info.is_signer));
    }

    let instruction = Instruction {
        program_id,
        accounts,
        data: deposit_ix_data(lp_mint_amount, token_max_a, token_max_b),
    };
    Ok(instruction)
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct DepositCpiArgs {
    lp_mint_amount: u64,
    token_max_a: u64,
    token_max_b: u64,
}

pub fn deposit_ix_data(lp_mint_amount: u64, token_max_a: u64, token_max_b: u64) -> Vec<u8> {
    let hash = get_function_hash("global", "deposit");
    let mut buf: Vec<u8> = vec![];
    buf.extend_from_slice(&hash);
    let args = DepositCpiArgs {
        lp_mint_amount,
        token_max_a,
        token_max_b,
    };
    args.serialize(&mut buf).unwrap();
    buf
}

/// Build a CPI instruction. 
/// 
/// See Context `DepositToClp` for the order of accounts and limitations.
pub fn deposit_cpi_ix(
    account_infos: &[AccountInfo; 14],
    remaining_account_infos: &[AccountInfo],
    program_id: Pubkey,
    lp_mint_amount: u64,
    token_max_a: u64,
    token_max_b: u64,
) -> Result<Instruction> {
    let mut accounts = vec![
        AccountMeta::new_readonly(account_infos[0].key(), true), // payer
        AccountMeta::new(account_infos[1].key(), false),         // a_acc.
        AccountMeta::new(account_infos[2].key(), false),         // b_acc
        AccountMeta::new(account_infos[3].key(), false),         // lp_acc
        AccountMeta::new_readonly(account_infos[4].key(), false), // clp_vault
        AccountMeta::new(account_infos[5].key(), false),         // lp_mint
        AccountMeta::new(account_infos[6].key(), false),         // a_vault
        AccountMeta::new(account_infos[7].key(), false),         // b_vault
        AccountMeta::new_readonly(account_infos[8].key(), false), // pos_bun
        AccountMeta::new_readonly(account_infos[9].key(), false), // clp_pro
        AccountMeta::new(account_infos[10].key(), false),        // clp
        AccountMeta::new(account_infos[11].key(), false),        // clp_a
        AccountMeta::new(account_infos[12].key(), false),        // clp_b
        AccountMeta::new_readonly(account_infos[13].key(), false), // token
    ];
    for remaining_account_info in remaining_account_infos {
        accounts.push(AccountMeta::new(remaining_account_info.key(), false));
    }

    let instruction = Instruction {
        program_id,
        accounts,
        data: deposit_ix_data(lp_mint_amount, token_max_a, token_max_b),
    };
    Ok(instruction)
}
