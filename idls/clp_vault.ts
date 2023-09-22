export type ClpVault = {
  "version": "0.1.1",
  "name": "clp_vault",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMintA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMintB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u16"
        },
        {
          "name": "adminKey",
          "type": "publicKey"
        },
        {
          "name": "marketMakingKey",
          "type": "publicKey"
        },
        {
          "name": "feeOwner",
          "type": "publicKey"
        },
        {
          "name": "performanceFee",
          "type": "u32"
        },
        {
          "name": "withdrawalFee",
          "type": "u32"
        },
        {
          "name": "marketMakingFee",
          "type": "u32"
        },
        {
          "name": "strategyType",
          "type": {
            "defined": "StrategyType"
          }
        },
        {
          "name": "initialTokenRatio",
          "type": {
            "defined": "TokenRatio"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "adminKey",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "marketMakingKey",
          "type": "publicKey"
        },
        {
          "name": "feeOwner",
          "type": "publicKey"
        },
        {
          "name": "performanceFee",
          "type": "u32"
        },
        {
          "name": "withdrawalFee",
          "type": "u32"
        },
        {
          "name": "marketMakingFee",
          "type": "u32"
        },
        {
          "name": "strategyType",
          "type": {
            "defined": "StrategyType"
          }
        },
        {
          "name": "stakePool",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initializePositionBundle",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionBundle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lpMintAmount",
          "type": "u64"
        },
        {
          "name": "tokenMaxA",
          "type": "u64"
        },
        {
          "name": "tokenMaxB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lpAmount",
          "type": "u64"
        },
        {
          "name": "tokenMinA",
          "type": "u64"
        },
        {
          "name": "tokenMinB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "openPosition",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundledPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "positionIndex",
          "type": "u8"
        },
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        }
      ]
    },
    {
      "name": "closePosition",
      "accounts": [
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundledPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "positionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "increaseLiquidity",
      "accounts": [
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u128"
        },
        {
          "name": "tokenMaxA",
          "type": "u64"
        },
        {
          "name": "tokenMaxB",
          "type": "u64"
        },
        {
          "name": "positionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "decreaseLiquidity",
      "accounts": [
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u128"
        },
        {
          "name": "tokenMinA",
          "type": "u64"
        },
        {
          "name": "tokenMinB",
          "type": "u64"
        },
        {
          "name": "positionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "collectRewards",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenARewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBRewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "collectFees",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeAccountTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeAccountTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mmFeeAccountTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mmFeeAccountTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateTokenMeta",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenBMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "clpVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u16"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          },
          {
            "name": "clp",
            "type": "publicKey"
          },
          {
            "name": "lpMint",
            "type": "publicKey"
          },
          {
            "name": "lpMintBump",
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "tokenMintA",
            "type": "publicKey"
          },
          {
            "name": "tokenVaultA",
            "type": "publicKey"
          },
          {
            "name": "tokenMintB",
            "type": "publicKey"
          },
          {
            "name": "tokenVaultB",
            "type": "publicKey"
          },
          {
            "name": "performanceFee",
            "type": "u32"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "withdrawalFee",
            "type": "u32"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "marketMakingFee",
            "type": "u32"
          },
          {
            "name": "padding5",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "strategy",
            "type": {
              "defined": "StrategyType"
            }
          },
          {
            "name": "padding6",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "marketMakingKey",
            "type": "publicKey"
          },
          {
            "name": "adminKey",
            "type": "publicKey"
          },
          {
            "name": "feeOwner",
            "type": "publicKey"
          },
          {
            "name": "numActivePositions",
            "type": "u8"
          },
          {
            "name": "padding7",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "positionBundleTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "positionBundleMint",
            "type": "publicKey"
          },
          {
            "name": "positionBundle",
            "type": "publicKey"
          },
          {
            "name": "positions",
            "type": {
              "array": [
                {
                  "defined": "VaultPosition"
                },
                5
              ]
            }
          },
          {
            "name": "initialTokenRatio",
            "type": {
              "defined": "TokenRatio"
            }
          },
          {
            "name": "stakePool",
            "type": "publicKey"
          },
          {
            "name": "reserved0",
            "type": {
              "array": [
                "u8",
                480
              ]
            }
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TokenRatio",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenA",
            "type": "u64"
          },
          {
            "name": "tokenB",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "VaultPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionKey",
            "type": "publicKey"
          },
          {
            "name": "lowerTick",
            "type": "i32"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "upperTick",
            "type": "i32"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "reserve",
            "type": {
              "array": [
                "u128",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ClpProvider",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ORCA"
          }
        ]
      }
    },
    {
      "name": "ErrorCode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UnknownClp"
          },
          {
            "name": "MintAClpMismatch"
          },
          {
            "name": "MintBClpMismatch"
          },
          {
            "name": "PositionBundleAlreadyCreated"
          },
          {
            "name": "MaxPositionsExceeded"
          },
          {
            "name": "PositionExistsAtIndex"
          },
          {
            "name": "MarketMakerMustSign"
          },
          {
            "name": "ClpMismatch"
          },
          {
            "name": "MaxActivePositonsNotOne"
          },
          {
            "name": "VaultPositionLiquidityIssue"
          },
          {
            "name": "MaxTokenAmountExceeded"
          },
          {
            "name": "PositionBundleTokenAccountMismatch"
          },
          {
            "name": "PositionAccountsDoNotMatch"
          },
          {
            "name": "TokenVaultAMismatch"
          },
          {
            "name": "TokenVaultBMismatch"
          },
          {
            "name": "LpMintMismatch"
          },
          {
            "name": "RemainingAccountsMissingVaultPositions"
          },
          {
            "name": "MinimumTokensNotReturned"
          },
          {
            "name": "InccorectAdminKey"
          },
          {
            "name": "IncorrectFeeOwner"
          },
          {
            "name": "UnknownPosition"
          },
          {
            "name": "IncorrectMMFeeOwner"
          },
          {
            "name": "MetadataDeserializationFailed"
          }
        ]
      }
    },
    {
      "name": "StrategyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "PriceDiscovery"
          },
          {
            "name": "VolatilePair"
          },
          {
            "name": "StablePair"
          },
          {
            "name": "StableSlowlyDiverging"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CollectedFeesEvent",
      "fields": [
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CollectedRewardsEvent",
      "fields": [
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DepositEvent",
      "fields": [
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "lp",
          "type": "u64",
          "index": false
        },
        {
          "name": "prevLpSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsA",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsB",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "lp",
          "type": "u64",
          "index": false
        },
        {
          "name": "wFeeA",
          "type": "u64",
          "index": false
        },
        {
          "name": "wFeeB",
          "type": "u64",
          "index": false
        },
        {
          "name": "prevLpSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsA",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsB",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AccountMustBeOwnedByClpProgram",
      "msg": "Clp program does not own clp"
    }
  ]
};

export const IDL: ClpVault = {
  "version": "0.1.1",
  "name": "clp_vault",
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenMintA",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenMintB",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "nonce",
          "type": "u16"
        },
        {
          "name": "adminKey",
          "type": "publicKey"
        },
        {
          "name": "marketMakingKey",
          "type": "publicKey"
        },
        {
          "name": "feeOwner",
          "type": "publicKey"
        },
        {
          "name": "performanceFee",
          "type": "u32"
        },
        {
          "name": "withdrawalFee",
          "type": "u32"
        },
        {
          "name": "marketMakingFee",
          "type": "u32"
        },
        {
          "name": "strategyType",
          "type": {
            "defined": "StrategyType"
          }
        },
        {
          "name": "initialTokenRatio",
          "type": {
            "defined": "TokenRatio"
          }
        }
      ]
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "adminKey",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "marketMakingKey",
          "type": "publicKey"
        },
        {
          "name": "feeOwner",
          "type": "publicKey"
        },
        {
          "name": "performanceFee",
          "type": "u32"
        },
        {
          "name": "withdrawalFee",
          "type": "u32"
        },
        {
          "name": "marketMakingFee",
          "type": "u32"
        },
        {
          "name": "strategyType",
          "type": {
            "defined": "StrategyType"
          }
        },
        {
          "name": "stakePool",
          "type": "publicKey"
        }
      ]
    },
    {
      "name": "initializePositionBundle",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionBundle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleMint",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "deposit",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lpMintAmount",
          "type": "u64"
        },
        {
          "name": "tokenMaxA",
          "type": "u64"
        },
        {
          "name": "tokenMaxB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "withdraw",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userLpTokenAcct",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "lpAmount",
          "type": "u64"
        },
        {
          "name": "tokenMinA",
          "type": "u64"
        },
        {
          "name": "tokenMinB",
          "type": "u64"
        }
      ]
    },
    {
      "name": "openPosition",
      "accounts": [
        {
          "name": "payer",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundledPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "positionIndex",
          "type": "u8"
        },
        {
          "name": "tickLowerIndex",
          "type": "i32"
        },
        {
          "name": "tickUpperIndex",
          "type": "i32"
        }
      ]
    },
    {
      "name": "closePosition",
      "accounts": [
        {
          "name": "receiver",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "bundledPosition",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundle",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "positionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "increaseLiquidity",
      "accounts": [
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u128"
        },
        {
          "name": "tokenMaxA",
          "type": "u64"
        },
        {
          "name": "tokenMaxB",
          "type": "u64"
        },
        {
          "name": "positionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "decreaseLiquidity",
      "accounts": [
        {
          "name": "marketMakingKey",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "position",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayLower",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tickArrayUpper",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "liquidityAmount",
          "type": "u128"
        },
        {
          "name": "tokenMinA",
          "type": "u64"
        },
        {
          "name": "tokenMinB",
          "type": "u64"
        },
        {
          "name": "positionIndex",
          "type": "u8"
        }
      ]
    },
    {
      "name": "collectRewards",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenARewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBRewardVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenBFeeAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "collectFees",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "positionBundleTokenAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "clpTokenVaultB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeAccountTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "feeAccountTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mmFeeAccountTokenA",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "mmFeeAccountTokenB",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateTokenMeta",
      "accounts": [
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "metadataAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenBMetadataAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clpVault",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "lpMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "clp",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "metadataProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "clpVault",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "bumpSeed",
            "type": "u8"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "nonce",
            "type": "u16"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                14
              ]
            }
          },
          {
            "name": "clp",
            "type": "publicKey"
          },
          {
            "name": "lpMint",
            "type": "publicKey"
          },
          {
            "name": "lpMintBump",
            "type": "u8"
          },
          {
            "name": "padding2",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "tokenMintA",
            "type": "publicKey"
          },
          {
            "name": "tokenVaultA",
            "type": "publicKey"
          },
          {
            "name": "tokenMintB",
            "type": "publicKey"
          },
          {
            "name": "tokenVaultB",
            "type": "publicKey"
          },
          {
            "name": "performanceFee",
            "type": "u32"
          },
          {
            "name": "padding3",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "withdrawalFee",
            "type": "u32"
          },
          {
            "name": "padding4",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "marketMakingFee",
            "type": "u32"
          },
          {
            "name": "padding5",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "strategy",
            "type": {
              "defined": "StrategyType"
            }
          },
          {
            "name": "padding6",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "marketMakingKey",
            "type": "publicKey"
          },
          {
            "name": "adminKey",
            "type": "publicKey"
          },
          {
            "name": "feeOwner",
            "type": "publicKey"
          },
          {
            "name": "numActivePositions",
            "type": "u8"
          },
          {
            "name": "padding7",
            "type": {
              "array": [
                "u8",
                15
              ]
            }
          },
          {
            "name": "positionBundleTokenAccount",
            "type": "publicKey"
          },
          {
            "name": "positionBundleMint",
            "type": "publicKey"
          },
          {
            "name": "positionBundle",
            "type": "publicKey"
          },
          {
            "name": "positions",
            "type": {
              "array": [
                {
                  "defined": "VaultPosition"
                },
                5
              ]
            }
          },
          {
            "name": "initialTokenRatio",
            "type": {
              "defined": "TokenRatio"
            }
          },
          {
            "name": "stakePool",
            "type": "publicKey"
          },
          {
            "name": "reserved0",
            "type": {
              "array": [
                "u8",
                480
              ]
            }
          },
          {
            "name": "reserved1",
            "type": {
              "array": [
                "u128",
                32
              ]
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "TokenRatio",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "tokenA",
            "type": "u64"
          },
          {
            "name": "tokenB",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "VaultPosition",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "positionKey",
            "type": "publicKey"
          },
          {
            "name": "lowerTick",
            "type": "i32"
          },
          {
            "name": "padding0",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "upperTick",
            "type": "i32"
          },
          {
            "name": "padding1",
            "type": {
              "array": [
                "u8",
                12
              ]
            }
          },
          {
            "name": "reserve",
            "type": {
              "array": [
                "u128",
                16
              ]
            }
          }
        ]
      }
    },
    {
      "name": "ClpProvider",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "ORCA"
          }
        ]
      }
    },
    {
      "name": "ErrorCode",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "UnknownClp"
          },
          {
            "name": "MintAClpMismatch"
          },
          {
            "name": "MintBClpMismatch"
          },
          {
            "name": "PositionBundleAlreadyCreated"
          },
          {
            "name": "MaxPositionsExceeded"
          },
          {
            "name": "PositionExistsAtIndex"
          },
          {
            "name": "MarketMakerMustSign"
          },
          {
            "name": "ClpMismatch"
          },
          {
            "name": "MaxActivePositonsNotOne"
          },
          {
            "name": "VaultPositionLiquidityIssue"
          },
          {
            "name": "MaxTokenAmountExceeded"
          },
          {
            "name": "PositionBundleTokenAccountMismatch"
          },
          {
            "name": "PositionAccountsDoNotMatch"
          },
          {
            "name": "TokenVaultAMismatch"
          },
          {
            "name": "TokenVaultBMismatch"
          },
          {
            "name": "LpMintMismatch"
          },
          {
            "name": "RemainingAccountsMissingVaultPositions"
          },
          {
            "name": "MinimumTokensNotReturned"
          },
          {
            "name": "InccorectAdminKey"
          },
          {
            "name": "IncorrectFeeOwner"
          },
          {
            "name": "UnknownPosition"
          },
          {
            "name": "IncorrectMMFeeOwner"
          },
          {
            "name": "MetadataDeserializationFailed"
          }
        ]
      }
    },
    {
      "name": "StrategyType",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "PriceDiscovery"
          },
          {
            "name": "VolatilePair"
          },
          {
            "name": "StablePair"
          },
          {
            "name": "StableSlowlyDiverging"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "CollectedFeesEvent",
      "fields": [
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "CollectedRewardsEvent",
      "fields": [
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "DepositEvent",
      "fields": [
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "lp",
          "type": "u64",
          "index": false
        },
        {
          "name": "prevLpSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsA",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsB",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "WithdrawEvent",
      "fields": [
        {
          "name": "vault",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "user",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "a",
          "type": "u64",
          "index": false
        },
        {
          "name": "b",
          "type": "u64",
          "index": false
        },
        {
          "name": "lp",
          "type": "u64",
          "index": false
        },
        {
          "name": "wFeeA",
          "type": "u64",
          "index": false
        },
        {
          "name": "wFeeB",
          "type": "u64",
          "index": false
        },
        {
          "name": "prevLpSupply",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsA",
          "type": "u64",
          "index": false
        },
        {
          "name": "uncollectedFeesRewardsB",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "AccountMustBeOwnedByClpProgram",
      "msg": "Clp program does not own clp"
    }
  ]
};
