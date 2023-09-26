use anchor_lang::prelude::*;


/// The maximum number of positions a vault could have. This dictates the space required for 
/// the CLP Vault. There is a separate constant for limiting active positions. These are 
/// separate because the max active positions will start at 1 for v1.0.0 of the protocol.
pub const MAX_POSITIONS: usize = 5;


#[account]
pub struct ClpVault {
  pub bump_seed: u8,
  _padding0: [u8; 15],
  /// A nonce to allow more than one CLP Vault with the same trading pair for the same admin
  pub nonce: u16,
  _padding1: [u8; 14],
  /// The address of the concentrated liquidity pool. E.g. Orca Whirlpool address
  pub clp: Pubkey,
  /// The SPL token Mint address for the LP tokens
  pub lp_mint: Pubkey,
  pub lp_mint_bump: u8,
  _padding2: [u8; 15],
  /// SPL token Mint A of the trading pair
  pub token_mint_a: Pubkey,
  /// An SPL token Account for staging A tokens
  pub token_vault_a: Pubkey,
  /// SPL Token mint B of the trading pair
  pub token_mint_b: Pubkey,
  /// An SPL token Account for staging B tokens
  pub token_vault_b: Pubkey,
  /// A percentage of the trading fees and rewards taken by the CLP Vault
  pub performance_fee: u32,
  _padding3: [u8; 12],
  /// A fee percentage taken upon withdrawing
  pub withdrawal_fee: u32,
  _padding4: [u8; 12],
  /// A percentage of the performance_fee that gets paid to the market_maker.
  pub market_making_fee: u32,
  _padding5: [u8; 12],
  /// The strategy that is enlisted by the vault
  pub strategy: StrategyType,
  _padding6: [u8; 15],
  /// The key that has the ability to adjust positions and rebalance
  pub market_making_key: Pubkey,
  /// The key that has the ability to change the market_making_key and strategy.
  pub admin_key: Pubkey,
  /// The key that must be the owner of SPL Token Accounts that receive fees
  pub fee_owner: Pubkey,
  /// The number of active Positions the vault has on the CLP
  pub num_active_positions: u8,
  _padding7: [u8; 15],
  /// The TokenAccount owned by the ClpVault that controls the PositionBundle
  pub position_bundle_token_account: Pubkey,
  /// The mint address of the whirlpool PositionBundle
  pub position_bundle_mint: Pubkey,
  /// The Whirlpool PositionBundle account
  pub position_bundle: Pubkey,
  /// A slice of the active position information
  pub positions: [VaultPosition; MAX_POSITIONS],
  /// The initial amount of tokenA to tokenB required per LP token when there is 0 liquidity on
  ///  positions or in the reserve. This is only used for the inital deposit into the vault.
  pub initial_token_ratio: TokenRatio,
  /// A key indicating the primary StakePool for the vault. This is used as reference for UIs.
  pub stake_pool: Pubkey, 

  pub ratio_cache: VaultRatioCache,

  // 448
  _reserved0: [u8; 256],
  _reserved1: [u8; 128],
  _reserved2: [u8; 64],
  // added to give 16 bit spacing incase u128's are required in the future
  _reserved_128: [u8; 512],
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy)]
#[repr(u8)]
pub enum StrategyType {
    PriceDiscovery = 0,
    VolatilePair = 1,
    StablePair = 2,
    StableSlowlyDiverging = 3,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy)]
#[repr(C)]
pub struct VaultPosition {
    /// The underlying CLP position.
    pub position_key: Pubkey,
    /// The address of the lower TickArray
    pub lower_tick: i32,
    _padding0: [u8; 12],
    /// The address of the upper TickArray
    pub upper_tick: i32,
    _padding1: [u8; 12],
    _reserve: [u8; 32],
    _reserve1: [u8; 32],
    _reserve2: [u8; 32],
    _reserve3: [u8; 32],
    _reserve4: [u8; 32],
    _reserve5: [u8; 32],
    _reserve6: [u8; 32],
    _reserve7: [u8; 32],
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy)]
#[repr(C)]
pub struct VaultRatioCache {
  /// Total amount of tokenA managed by the vault
  pub total_token_a: u64,
  /// Total amount of tokenB managed by the vault
  pub total_token_b: u64,
  /// The total supply of vault LP tokens
  pub lp_supply: u64,
  /// The Unix timestamp for when the cache was last updated
  pub cached_at: i64,
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Copy)]
#[repr(C)]
pub struct TokenRatio {
    /// The amount of token a required for the initial deposit
    pub token_a: u64,
    /// The amount of token b required for the initial deposit
    pub token_b: u64,
}


/* ****************** WHIRLPOOL ACCOUNTS *******************/

// Number of rewards supported by Whirlpools
pub const NUM_REWARDS: usize = 3;

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct Whirlpool {
    pub whirlpools_config: Pubkey, // 32
    pub whirlpool_bump: [u8; 1],   // 1

    pub tick_spacing: u16,          // 2
    pub tick_spacing_seed: [u8; 2], // 2

    // Stored as hundredths of a basis point
    // u16::MAX corresponds to ~6.5%
    pub fee_rate: u16, // 2

    // Portion of fee rate taken stored as basis points
    pub protocol_fee_rate: u16, // 2

    // Maximum amount that can be held by Solana account
    pub liquidity: u128, // 16

    // MAX/MIN at Q32.64, but using Q64.64 for rounder bytes
    // Q64.64
    pub sqrt_price: u128,        // 16
    pub tick_current_index: i32, // 4

    pub protocol_fee_owed_a: u64, // 8
    pub protocol_fee_owed_b: u64, // 8

    pub token_mint_a: Pubkey,  // 32
    pub token_vault_a: Pubkey, // 32

    // Q64.64
    pub fee_growth_global_a: u128, // 16

    pub token_mint_b: Pubkey,  // 32
    pub token_vault_b: Pubkey, // 32

    // Q64.64
    pub fee_growth_global_b: u128, // 16

    pub reward_last_updated_timestamp: u64, // 8

    pub reward_infos: [WhirlpoolRewardInfo; NUM_REWARDS], // 384
}

/// Stores the state relevant for tracking liquidity mining rewards at the `Whirlpool` level.
/// These values are used in conjunction with `PositionRewardInfo`, `Tick.reward_growths_outside`,
/// and `Whirlpool.reward_last_updated_timestamp` to determine how many rewards are earned by open
/// positions.
#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct WhirlpoolRewardInfo {
    /// Reward token mint.
    pub mint: Pubkey,
    /// Reward vault token account.
    pub vault: Pubkey,
    /// Authority account that has permission to initialize the reward and set emissions.
    pub authority: Pubkey,
    /// Q64.64 number that indicates how many tokens per second are earned per unit of liquidity.
    pub emissions_per_second_x64: u128,
    /// Q64.64 number that tracks the total tokens earned per unit of liquidity since the reward
    /// emissions were turned on.
    pub growth_global_x64: u128,
}

#[derive(AnchorDeserialize, AnchorSerialize)]
pub struct Position {
    pub whirlpool: Pubkey,     // 32
    pub position_mint: Pubkey, // 32
    pub liquidity: u128,       // 16
    pub tick_lower_index: i32, // 4
    pub tick_upper_index: i32, // 4

    // Q64.64
    pub fee_growth_checkpoint_a: u128, // 16
    pub fee_owed_a: u64,               // 8
    // Q64.64
    pub fee_growth_checkpoint_b: u128, // 16
    pub fee_owed_b: u64,               // 8

    pub reward_infos: [PositionRewardInfo; NUM_REWARDS], // 72
}

#[derive(AnchorSerialize, AnchorDeserialize)]
pub struct PositionRewardInfo {
    // Q64.64
    pub growth_inside_checkpoint: u128,
    pub amount_owed: u64,
}
