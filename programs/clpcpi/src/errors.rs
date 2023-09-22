use anchor_lang::error_code;

#[error_code]
pub enum ErrorCode {
  #[msg("CLP is unknown")]
  UnknownClp, // 6000
  #[msg("TokenAMint does not match underlying CLP")]
  MintAClpMismatch, // 6001
  #[msg("TokenBMint does not match underlying CLP")]
  MintBClpMismatch, // 6002
  #[msg("PositionBundle was already created")]
  PositionBundleAlreadyCreated, // 6003
  #[msg("Max positions exceeded")]
  MaxPositionsExceeded, // 6004
  #[msg("Position exists at index")]
  PositionExistsAtIndex, // 6005
  #[msg("Market maker must sign for this instruction")]
  MarketMakerMustSign, // 6006
  #[msg("CLP does not match the ClpVault state")]
  ClpMismatch, // 6007
  #[msg("Max active positions greater than 1")]
  MaxActivePositonsNotOne, // 6008
  #[msg("VaultPosition liquidity should be 0 when supply is 0")]
  VaultPositionLiquidityIssue, // 6009
  #[msg("Max token amount exceeded")]
  MaxTokenAmountExceeded, // 6010
  #[msg("Position bundle token account does not match ClpVault")]
  PositionBundleTokenAccountMismatch, // 6011
  #[msg("Position accounts do not match vault position at correct index")]
  PositionAccountsDoNotMatch, // 6012
  #[msg("Token Vault A does not match ClpVault")]
  TokenVaultAMismatch, // 6013
  #[msg("Token Vault B does not match ClpVault")]
  TokenVaultBMismatch, // 6014
  #[msg("LP mint does not match ClpVault")]
  LpMintMismatch, // 6015
  #[msg("Remaining accounts is missing the VaultPositions")]
  RemainingAccountsMissingVaultPositions, // 6016
  #[msg("Expected minimum tokens not returned")]
  MinimumTokensNotReturned, // 6017
  #[msg("Incorrect admin key")]
  InccorectAdminKey, // 6018
  #[msg("Fee account is not owned by fee_owner")]
  IncorrectFeeOwner, // 6019
  #[msg("Failed to deserialize position at that key")]
  UnknownPosition, // 6020
  #[msg("MM fee account is not owned by market_making_key")]
  IncorrectMMFeeOwner, // 6021
  #[msg("Metadata deserialization failed")]
  MetadataDeserializationFailed, // 6022
  #[msg("Clp program does not own clp")]
  AccountMustBeOwnedByClpProgram, // 6023
}