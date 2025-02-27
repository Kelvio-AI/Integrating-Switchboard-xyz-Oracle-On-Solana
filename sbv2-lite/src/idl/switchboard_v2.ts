export type SwitchboardV2 = {
  version: "0.1.0";
  name: "switchboard_v2";
  instructions: [
    {
      name: "aggregatorClose";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "solDest";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowDest";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "crank";
          isMut: true;
          isSigner: false;
          isOptional: true;
          docs: ["Optional accounts"];
        },
        {
          name: "dataBuffer";
          isMut: true;
          isSigner: false;
          isOptional: true;
        },
        {
          name: "slidingWindow";
          isMut: true;
          isSigner: false;
          isOptional: true;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorCloseParams";
          };
        }
      ];
    },
    {
      name: "setBumps";
      accounts: [
        {
          name: "state";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "SetBumpsParams";
          };
        }
      ];
    },
    {
      name: "aggregatorAddJob";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "job";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorAddJobParams";
          };
        }
      ];
    },
    {
      name: "aggregatorInit";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorInitParams";
          };
        }
      ];
    },
    {
      name: "aggregatorLock";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorLockParams";
          };
        }
      ];
    },
    {
      name: "aggregatorOpenRound";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payoutWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorOpenRoundParams";
          };
        }
      ];
    },
    {
      name: "aggregatorRemoveJob";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "job";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorRemoveJobParams";
          };
        }
      ];
    },
    {
      name: "aggregatorSaveResult";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "oracleQueue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "feedPermission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oraclePermission";
          isMut: false;
          isSigner: false;
        },
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "historyBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorSaveResultParams";
          };
        }
      ];
    },
    {
      name: "aggregatorSaveResultV2";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "oracleQueue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "feedPermission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oraclePermission";
          isMut: false;
          isSigner: false;
        },
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "historyBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorSaveResultParams";
          };
        }
      ];
    },
    {
      name: "aggregatorTeeSaveResult";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "oracleQueue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "feedPermission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oraclePermission";
          isMut: false;
          isSigner: false;
        },
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "historyBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "slider";
          isMut: true;
          isSigner: false;
        },
        {
          name: "quote";
          isMut: false;
          isSigner: true;
        },
        {
          name: "rewardWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorTeeSaveResultParams";
          };
        }
      ];
    },
    {
      name: "aggregatorSetAuthority";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "newAuthority";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorSetAuthorityParams";
          };
        }
      ];
    },
    {
      name: "aggregatorSetConfig";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorSetConfigParams";
          };
        }
      ];
    },
    {
      name: "aggregatorSetResolutionMode";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "slidingWindow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorSetResolutionModeParams";
          };
        }
      ];
    },
    {
      name: "aggregatorSetHistoryBuffer";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "buffer";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorSetHistoryBufferParams";
          };
        }
      ];
    },
    {
      name: "aggregatorSetQueue";
      accounts: [
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "AggregatorSetQueueParams";
          };
        }
      ];
    },
    {
      name: "bufferRelayerInit";
      accounts: [
        {
          name: "bufferRelayer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "job";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "BufferRelayerInitParams";
          };
        }
      ];
    },
    {
      name: "bufferRelayerOpenRound";
      accounts: [
        {
          name: "bufferRelayer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "BufferRelayerOpenRoundParams";
          };
        }
      ];
    },
    {
      name: "bufferRelayerSaveResult";
      accounts: [
        {
          name: "bufferRelayer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "oracle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "BufferRelayerSaveResultParams";
          };
        }
      ];
    },
    {
      name: "crankInit";
      accounts: [
        {
          name: "crank";
          isMut: true;
          isSigner: true;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "buffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "CrankInitParams";
          };
        }
      ];
    },
    {
      name: "crankPop";
      accounts: [
        {
          name: "crank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payoutWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "crankDataBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueDataBuffer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "CrankPopParams";
          };
        }
      ];
    },
    {
      name: "crankPopV2";
      accounts: [
        {
          name: "crank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payoutWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "crankDataBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueDataBuffer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "CrankPopParamsV2";
          };
        }
      ];
    },
    {
      name: "crankPush";
      accounts: [
        {
          name: "crank";
          isMut: true;
          isSigner: false;
        },
        {
          name: "aggregator";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: false;
          isSigner: false;
        },
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "CrankPushParams";
          };
        }
      ];
    },
    {
      name: "jobInit";
      accounts: [
        {
          name: "job";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "JobInitParams";
          };
        }
      ];
    },
    {
      name: "jobSetData";
      accounts: [
        {
          name: "job";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "JobSetDataParams";
          };
        }
      ];
    },
    {
      name: "leaseExtend";
      accounts: [
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "aggregator";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "funder";
          isMut: true;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "LeaseExtendParams";
          };
        }
      ];
    },
    {
      name: "leaseInit";
      accounts: [
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "aggregator";
          isMut: false;
          isSigner: false;
        },
        {
          name: "funder";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "owner";
          isMut: true;
          isSigner: true;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "LeaseInitParams";
          };
        }
      ];
    },
    {
      name: "leaseSetAuthority";
      accounts: [
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "withdrawAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "newAuthority";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "LeaseSetAuthorityParams";
          };
        }
      ];
    },
    {
      name: "leaseWithdraw";
      accounts: [
        {
          name: "lease";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "aggregator";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "withdrawAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "withdrawAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "LeaseWithdrawParams";
          };
        }
      ];
    },
    {
      name: "oracleHeartbeat";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "gcOracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: true;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "OracleHeartbeatParams";
          };
        }
      ];
    },
    {
      name: "oracleTeeHeartbeat";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenAccount";
          isMut: false;
          isSigner: false;
        },
        {
          name: "gcOracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "quote";
          isMut: false;
          isSigner: true;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "OracleTeeHeartbeatParams";
          };
        }
      ];
    },
    {
      name: "oracleInit";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "wallet";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "OracleInitParams";
          };
        }
      ];
    },
    {
      name: "oracleQueueInit";
      accounts: [
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: true;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "buffer";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "OracleQueueInitParams";
          };
        }
      ];
    },
    {
      name: "oracleQueueSetConfig";
      accounts: [
        {
          name: "queue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "OracleQueueSetConfigParams";
          };
        }
      ];
    },
    {
      name: "oracleWithdraw";
      accounts: [
        {
          name: "oracle";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "tokenAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "withdrawAccount";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "OracleWithdrawParams";
          };
        }
      ];
    },
    {
      name: "permissionInit";
      accounts: [
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "granter";
          isMut: false;
          isSigner: false;
        },
        {
          name: "grantee";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "PermissionInitParams";
          };
        }
      ];
    },
    {
      name: "permissionSet";
      accounts: [
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "PermissionSetParams";
          };
        }
      ];
    },
    {
      name: "programConfig";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "programState";
          isMut: true;
          isSigner: false;
        },
        {
          name: "daoMint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "ProgramConfigParams";
          };
        }
      ];
    },
    {
      name: "programInit";
      accounts: [
        {
          name: "state";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenMint";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "daoMint";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "ProgramInitParams";
          };
        }
      ];
    },
    {
      name: "vaultTransfer";
      accounts: [
        {
          name: "state";
          isMut: false;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "to";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vault";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VaultTransferParams";
          };
        }
      ];
    },
    {
      name: "vrfInit";
      accounts: [
        {
          name: "vrf";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfInitParams";
          };
        }
      ];
    },
    {
      name: "vrfCloseAction";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "vrf";
          isMut: true;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "solDest";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowDest";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfCloseParams";
          };
        }
      ];
    },
    {
      name: "vrfLiteCloseAction";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "vrfLite";
          isMut: true;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "solDest";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrowDest";
          isMut: true;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfLiteCloseParams";
          };
        }
      ];
    },
    {
      name: "vrfLiteInit";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vrf";
          isMut: true;
          isSigner: true;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfLiteInitParams";
          };
        }
      ];
    },
    {
      name: "vrfLiteProveAndVerify";
      accounts: [
        {
          name: "vrfLite";
          isMut: true;
          isSigner: false;
        },
        {
          name: "callbackPid";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "oracleWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "instructionsSysvar";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfLiteProveAndVerifyParams";
          };
        }
      ];
    },
    {
      name: "vrfLiteRequestRandomness";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "vrfLite";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "recentBlockhashes";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfLiteRequestRandomnessParams";
          };
        }
      ];
    },
    {
      name: "vrfPoolInit";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vrfPool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "payer";
          isMut: true;
          isSigner: true;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "associatedTokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "systemProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "rent";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfPoolInitParams";
          };
        }
      ];
    },
    {
      name: "vrfPoolRemove";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "vrfPool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfPoolRemoveParams";
          };
        }
      ];
    },
    {
      name: "vrfPoolAdd";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "vrfPool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "vrfLite";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: false;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfPoolAddParams";
          };
        }
      ];
    },
    {
      name: "vrfPoolRequest";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "vrfPool";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "mint";
          isMut: false;
          isSigner: false;
        },
        {
          name: "queue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "recentBlockhashes";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfPoolRequestParams";
          };
        }
      ];
    },
    {
      name: "vrfProveAndVerify";
      accounts: [
        {
          name: "vrf";
          isMut: true;
          isSigner: false;
        },
        {
          name: "callbackPid";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracle";
          isMut: false;
          isSigner: false;
        },
        {
          name: "oracleAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "oracleWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "instructionsSysvar";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfProveAndVerifyParams";
          };
        }
      ];
    },
    {
      name: "vrfRequestRandomness";
      accounts: [
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "vrf";
          isMut: true;
          isSigner: false;
        },
        {
          name: "oracleQueue";
          isMut: true;
          isSigner: false;
        },
        {
          name: "queueAuthority";
          isMut: false;
          isSigner: false;
        },
        {
          name: "dataBuffer";
          isMut: false;
          isSigner: false;
        },
        {
          name: "permission";
          isMut: true;
          isSigner: false;
        },
        {
          name: "escrow";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payerWallet";
          isMut: true;
          isSigner: false;
        },
        {
          name: "payerAuthority";
          isMut: false;
          isSigner: true;
        },
        {
          name: "recentBlockhashes";
          isMut: false;
          isSigner: false;
        },
        {
          name: "programState";
          isMut: false;
          isSigner: false;
        },
        {
          name: "tokenProgram";
          isMut: false;
          isSigner: false;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfRequestRandomnessParams";
          };
        }
      ];
    },
    {
      name: "vrfSetCallback";
      accounts: [
        {
          name: "vrf";
          isMut: true;
          isSigner: false;
        },
        {
          name: "authority";
          isMut: false;
          isSigner: true;
        }
      ];
      args: [
        {
          name: "params";
          type: {
            defined: "VrfSetCallbackParams";
          };
        }
      ];
    }
  ];
  accounts: [
    {
      name: "sbState";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            docs: ["The account authority permitted to make account changes."];
            type: "publicKey";
          },
          {
            name: "tokenMint";
            docs: [
              "The token mint used for oracle rewards, aggregator leases, and other reward incentives."
            ];
            type: "publicKey";
          },
          {
            name: "tokenVault";
            docs: ["Token vault used by the program to receive kickbacks."];
            type: "publicKey";
          },
          {
            name: "daoMint";
            docs: ["The token mint used by the DAO."];
            type: "publicKey";
          },
          {
            name: "bump";
            docs: ["The PDA bump to derive the pubkey."];
            type: "u8";
          },
          {
            name: "mrEnclaves";
            docs: ["Permitted enclave measurements"];
            type: {
              array: [
                {
                  array: ["u8", 32];
                },
                6
              ];
            };
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 799];
            };
          }
        ];
      };
    },
    {
      name: "taskSpecRecord";
      type: {
        kind: "struct";
        fields: [
          {
            name: "hash";
            type: {
              defined: "Hash";
            };
          }
        ];
      };
    },
    {
      name: "aggregatorAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            docs: ["Name of the aggregator to store on-chain."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "metadata";
            docs: ["Metadata of the aggregator to store on-chain."];
            type: {
              array: ["u8", 128];
            };
          },
          {
            name: "reserved1";
            docs: ["Reserved."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "queuePubkey";
            docs: ["Pubkey of the queue the aggregator belongs to."];
            type: "publicKey";
          },
          {
            name: "oracleRequestBatchSize";
            docs: [
              "CONFIGS",
              "Number of oracles assigned to an update request."
            ];
            type: "u32";
          },
          {
            name: "minOracleResults";
            docs: [
              "Minimum number of oracle responses required before a round is validated."
            ];
            type: "u32";
          },
          {
            name: "minJobResults";
            docs: [
              "Minimum number of job results before an oracle accepts a result."
            ];
            type: "u32";
          },
          {
            name: "minUpdateDelaySeconds";
            docs: [
              "Minimum number of seconds required between aggregator rounds."
            ];
            type: "u32";
          },
          {
            name: "startAfter";
            docs: [
              "Unix timestamp for which no feed update will occur before."
            ];
            type: "i64";
          },
          {
            name: "varianceThreshold";
            docs: [
              "Change percentage required between a previous round and the current round. If variance percentage is not met, reject new oracle responses."
            ];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "forceReportPeriod";
            docs: [
              "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles."
            ];
            type: "i64";
          },
          {
            name: "expiration";
            docs: ["Timestamp when the feed is no longer needed."];
            type: "i64";
          },
          {
            name: "consecutiveFailureCount";
            docs: [
              "Counter for the number of consecutive failures before a feed is removed from a queue. If set to 0, failed feeds will remain on the queue."
            ];
            type: "u64";
          },
          {
            name: "nextAllowedUpdateTime";
            docs: ["Timestamp when the next update request will be available."];
            type: "i64";
          },
          {
            name: "isLocked";
            docs: [
              "Flag for whether an aggregators configuration is locked for editing."
            ];
            type: "bool";
          },
          {
            name: "crankPubkey";
            docs: [
              "Optional, public key of the crank the aggregator is currently using. Event based feeds do not need a crank."
            ];
            type: "publicKey";
          },
          {
            name: "latestConfirmedRound";
            docs: [
              "Latest confirmed update request result that has been accepted as valid."
            ];
            type: {
              defined: "AggregatorRound";
            };
          },
          {
            name: "currentRound";
            docs: [
              "Oracle results from the current round of update request that has not been accepted as valid yet."
            ];
            type: {
              defined: "AggregatorRound";
            };
          },
          {
            name: "jobPubkeysData";
            docs: [
              "List of public keys containing the job definitions for how data is sourced off-chain by oracles."
            ];
            type: {
              array: ["publicKey", 16];
            };
          },
          {
            name: "jobHashes";
            docs: [
              "Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment."
            ];
            type: {
              array: [
                {
                  defined: "Hash";
                },
                16
              ];
            };
          },
          {
            name: "jobPubkeysSize";
            docs: ["Number of jobs assigned to an oracle."];
            type: "u32";
          },
          {
            name: "jobsChecksum";
            docs: [
              "Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment."
            ];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "authority";
            docs: [
              "The account delegated as the authority for making account changes."
            ];
            type: "publicKey";
          },
          {
            name: "historyBuffer";
            docs: [
              "Optional, public key of a history buffer account storing the last N accepted results and their timestamps."
            ];
            type: "publicKey";
          },
          {
            name: "previousConfirmedRoundResult";
            docs: ["The previous confirmed round result."];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "previousConfirmedRoundSlot";
            docs: ["The slot when the previous confirmed round was opened."];
            type: "u64";
          },
          {
            name: "disableCrank";
            docs: ["Whether an aggregator is permitted to join a crank."];
            type: "bool";
          },
          {
            name: "jobWeights";
            docs: [
              "Job weights used for the weighted median of the aggregator's assigned job accounts."
            ];
            type: {
              array: ["u8", 16];
            };
          },
          {
            name: "creationTimestamp";
            docs: ["Unix timestamp when the feed was created."];
            type: "i64";
          },
          {
            name: "resolutionMode";
            docs: [
              "Use sliding window or round based resolution",
              "NOTE: This changes result propogation in latest_round_result"
            ];
            type: {
              defined: "AggregatorResolutionMode";
            };
          },
          {
            name: "basePriorityFee";
            type: "u32";
          },
          {
            name: "priorityFeeBump";
            type: "u32";
          },
          {
            name: "priorityFeeBumpPeriod";
            type: "u32";
          },
          {
            name: "maxPriorityFeeMultiplier";
            type: "u32";
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 122];
            };
          }
        ];
      };
    },
    {
      name: "slidingResultAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "data";
            type: {
              array: [
                {
                  defined: "SlidingWindowElement";
                },
                16
              ];
            };
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "ebuf";
            type: {
              array: ["u8", 512];
            };
          }
        ];
      };
    },
    {
      name: "permissionAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            docs: [
              "The authority that is allowed to set permissions for this account."
            ];
            type: "publicKey";
          },
          {
            name: "permissions";
            docs: [
              "The SwitchboardPermission enumeration assigned by the granter to the grantee."
            ];
            type: "u32";
          },
          {
            name: "granter";
            docs: [
              "Public key of account that is granting permissions to use its resources."
            ];
            type: "publicKey";
          },
          {
            name: "grantee";
            docs: [
              "Public key of account that is being assigned permissions to use a granters resources."
            ];
            type: "publicKey";
          },
          {
            name: "expiration";
            docs: [
              "unused currently. may want permission PDA per permission for",
              "unique expiration periods, BUT currently only one permission",
              "per account makes sense for the infra. Dont over engineer."
            ];
            type: "i64";
          },
          {
            name: "bump";
            docs: ["The PDA bump to derive the pubkey."];
            type: "u8";
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 255];
            };
          }
        ];
      };
    },
    {
      name: "realmSpawnRecordAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "ebuf";
            type: {
              array: ["u8", 256];
            };
          }
        ];
      };
    },
    {
      name: "leaseAccountData";
      docs: ["This should be any ccount that links a permission to an escrow"];
      type: {
        kind: "struct";
        fields: [
          {
            name: "escrow";
            docs: [
              "Public key of the token account holding the lease contract funds until rewarded to oracles for successfully processing updates"
            ];
            type: "publicKey";
          },
          {
            name: "queue";
            docs: [
              "Public key of the oracle queue that the lease contract is applicable for."
            ];
            type: "publicKey";
          },
          {
            name: "aggregator";
            docs: [
              "Public key of the aggregator that the lease contract is applicable for"
            ];
            type: "publicKey";
          },
          {
            name: "tokenProgram";
            docs: ["Public key of the Solana token program ID."];
            type: "publicKey";
          },
          {
            name: "isActive";
            docs: ["Whether the lease contract is still active."];
            type: "bool";
          },
          {
            name: "crankRowCount";
            docs: ["Index of an aggregators position on a crank."];
            type: "u32";
          },
          {
            name: "createdAt";
            docs: ["Timestamp when the lease contract was created."];
            type: "i64";
          },
          {
            name: "updateCount";
            docs: [
              "Counter keeping track of the number of updates for the given aggregator."
            ];
            type: "u128";
          },
          {
            name: "withdrawAuthority";
            docs: [
              "Public key of keypair that may withdraw funds from the lease at any time"
            ];
            type: "publicKey";
          },
          {
            name: "bump";
            docs: ["The PDA bump to derive the pubkey."];
            type: "u8";
          },
          {
            name: "ebuf";
            type: {
              array: ["u8", 255];
            };
          }
        ];
      };
    },
    {
      name: "oracleQueueAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            docs: ["Name of the queue to store on-chain."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "metadata";
            docs: ["Metadata of the queue to store on-chain."];
            type: {
              array: ["u8", 64];
            };
          },
          {
            name: "authority";
            docs: [
              "The account delegated as the authority for making account changes or assigning permissions targeted at the queue."
            ];
            type: "publicKey";
          },
          {
            name: "oracleTimeout";
            docs: [
              "Interval when stale oracles will be removed if they fail to heartbeat."
            ];
            type: "u32";
          },
          {
            name: "reward";
            docs: [
              "Rewards to provide oracles and round openers on this queue."
            ];
            type: "u64";
          },
          {
            name: "minStake";
            docs: [
              "The minimum amount of stake oracles must present to remain on the queue."
            ];
            type: "u64";
          },
          {
            name: "slashingEnabled";
            docs: ["Whether slashing is enabled on this queue."];
            type: "bool";
          },
          {
            name: "varianceToleranceMultiplier";
            docs: [
              "The tolerated variance amount oracle results can have from the accepted round result before being slashed.",
              "slashBound = varianceToleranceMultiplier * stdDeviation Default: 2"
            ];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "feedProbationPeriod";
            docs: [
              "Number of update rounds new feeds are on probation for.",
              "If a feed returns 429s within probation period, auto disable permissions."
            ];
            type: "u32";
          },
          {
            name: "currIdx";
            docs: ["Current index of the oracle rotation."];
            type: "u32";
          },
          {
            name: "size";
            docs: ["Current number of oracles on a queue."];
            type: "u32";
          },
          {
            name: "gcIdx";
            docs: ["Garbage collection index."];
            type: "u32";
          },
          {
            name: "consecutiveFeedFailureLimit";
            docs: [
              "Consecutive failure limit for a feed before feed permission is revoked."
            ];
            type: "u64";
          },
          {
            name: "consecutiveOracleFailureLimit";
            docs: [
              "Consecutive failure limit for an oracle before oracle permission is revoked."
            ];
            type: "u64";
          },
          {
            name: "unpermissionedFeedsEnabled";
            docs: [
              "Enabling this setting means data feeds do not need explicit permission to join the queue and request new values from its oracles."
            ];
            type: "bool";
          },
          {
            name: "unpermissionedVrfEnabled";
            docs: [
              "Enabling this setting means VRF accounts do not need explicit permission to join the queue and request new values from its oracles."
            ];
            type: "bool";
          },
          {
            name: "curatorRewardCut";
            docs: [
              "TODO: Revenue percentage rewarded to job curators overall."
            ];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "lockLeaseFunding";
            docs: [
              "Prevent new leases from being funded n this queue.",
              "Useful to turn down a queue for migrations, since authority is always immutable."
            ];
            type: "bool";
          },
          {
            name: "mint";
            docs: [
              "Token mint used for the oracle queue rewards and slashing."
            ];
            type: "publicKey";
          },
          {
            name: "enableBufferRelayers";
            docs: [
              "Whether oracles are permitted to fulfill buffer relayer update request."
            ];
            type: "bool";
          },
          {
            name: "enableTeeOnly";
            type: "bool";
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 967];
            };
          },
          {
            name: "maxSize";
            docs: ["Maximum number of oracles a queue can support."];
            type: "u32";
          },
          {
            name: "dataBuffer";
            docs: [
              "The public key of the OracleQueueBuffer account holding a collection of Oracle pubkeys that haver successfully heartbeated before the queues `oracleTimeout`."
            ];
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "crankAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            docs: ["Name of the crank to store on-chain."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "metadata";
            docs: ["Metadata of the crank to store on-chain."];
            type: {
              array: ["u8", 64];
            };
          },
          {
            name: "queuePubkey";
            docs: ["Public key of the oracle queue who owns the crank."];
            type: "publicKey";
          },
          {
            name: "pqSize";
            docs: ["Number of aggregators added to the crank."];
            type: "u32";
          },
          {
            name: "maxRows";
            docs: [
              "Maximum number of aggregators allowed to be added to a crank."
            ];
            type: "u32";
          },
          {
            name: "jitterModifier";
            docs: ["Pseudorandom value added to next aggregator update time."];
            type: "u8";
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 255];
            };
          },
          {
            name: "dataBuffer";
            docs: [
              "The public key of the CrankBuffer account holding a collection of Aggregator pubkeys and their next allowed update time."
            ];
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "oracleAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            docs: ["Name of the oracle to store on-chain."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "metadata";
            docs: ["Metadata of the oracle to store on-chain."];
            type: {
              array: ["u8", 128];
            };
          },
          {
            name: "oracleAuthority";
            docs: [
              "The account delegated as the authority for making account changes or withdrawing funds from a staking wallet."
            ];
            type: "publicKey";
          },
          {
            name: "lastHeartbeat";
            docs: ["Unix timestamp when the oracle last heartbeated"];
            type: "i64";
          },
          {
            name: "numInUse";
            docs: [
              "Flag dictating if an oracle is active and has heartbeated before the queue's oracle timeout parameter."
            ];
            type: "u32";
          },
          {
            name: "tokenAccount";
            docs: ["Stake account and reward/slashing wallet."];
            type: "publicKey";
          },
          {
            name: "queuePubkey";
            docs: [
              "Public key of the oracle queue who has granted it permission to use its resources."
            ];
            type: "publicKey";
          },
          {
            name: "metrics";
            docs: ["Oracle track record."];
            type: {
              defined: "OracleMetrics";
            };
          },
          {
            name: "bump";
            docs: ["The PDA bump to derive the pubkey."];
            type: "u8";
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 255];
            };
          }
        ];
      };
    },
    {
      name: "jobAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            docs: ["Name of the job to store on-chain."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "metadata";
            docs: ["Metadata of the job to store on-chain."];
            type: {
              array: ["u8", 64];
            };
          },
          {
            name: "authority";
            docs: [
              "The account delegated as the authority for making account changes."
            ];
            type: "publicKey";
          },
          {
            name: "expiration";
            docs: ["Unix timestamp when the job is considered invalid"];
            type: "i64";
          },
          {
            name: "hash";
            docs: ["Hash of the serialized data to prevent tampering."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "data";
            docs: [
              "Serialized protobuf containing the collection of task to retrieve data off-chain."
            ];
            type: "bytes";
          },
          {
            name: "referenceCount";
            docs: ["The number of data feeds referencing the job account.."];
            type: "u32";
          },
          {
            name: "totalSpent";
            docs: [
              "The token amount funded into a feed that contains this job account."
            ];
            type: "u64";
          },
          {
            name: "createdAt";
            docs: ["Unix timestamp when the job was created on-chain."];
            type: "i64";
          },
          {
            name: "isInitializing";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "vrfAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "status";
            docs: ["The current status of the VRF account."];
            type: {
              defined: "VrfStatus";
            };
          },
          {
            name: "counter";
            docs: ["Incremental counter for tracking VRF rounds."];
            type: "u128";
          },
          {
            name: "authority";
            docs: ["On-chain account delegated for making account changes."];
            type: "publicKey";
          },
          {
            name: "oracleQueue";
            docs: [
              "The OracleQueueAccountData that is assigned to fulfill VRF update request."
            ];
            type: "publicKey";
          },
          {
            name: "escrow";
            docs: [
              "The token account used to hold funds for VRF update request."
            ];
            type: "publicKey";
          },
          {
            name: "callback";
            docs: [
              "The callback that is invoked when an update request is successfully verified."
            ];
            type: {
              defined: "CallbackZC";
            };
          },
          {
            name: "batchSize";
            docs: ["The number of oracles assigned to a VRF update request."];
            type: "u32";
          },
          {
            name: "builders";
            docs: [
              "Struct containing the intermediate state between VRF crank actions."
            ];
            type: {
              array: [
                {
                  defined: "VrfBuilder";
                },
                8
              ];
            };
          },
          {
            name: "buildersLen";
            docs: ["The number of builders."];
            type: "u32";
          },
          {
            name: "testMode";
            type: "bool";
          },
          {
            name: "currentRound";
            docs: [
              "Oracle results from the current round of update request that has not been accepted as valid yet"
            ];
            type: {
              defined: "VrfRound";
            };
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 1024];
            };
          }
        ];
      };
    },
    {
      name: "vrfLiteAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            docs: ["The bump used to derive the SbState account."];
            type: "u8";
          },
          {
            name: "permissionBump";
            docs: ["The bump used to derive the permission account."];
            type: "u8";
          },
          {
            name: "vrfPool";
            docs: ["The VrfPool the account belongs to."];
            type: "publicKey";
          },
          {
            name: "status";
            docs: ["The current status of the VRF account."];
            type: {
              defined: "VrfStatus";
            };
          },
          {
            name: "result";
            docs: [
              "The VRF round result. Will be zeroized if still awaiting fulfillment."
            ];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "counter";
            docs: ["Incremental counter for tracking VRF rounds."];
            type: "u128";
          },
          {
            name: "alpha";
            docs: ["The alpha bytes used to calculate the VRF proof."];
            type: {
              array: ["u8", 256];
            };
          },
          {
            name: "alphaLen";
            docs: ["The number of bytes in the alpha buffer."];
            type: "u32";
          },
          {
            name: "requestSlot";
            docs: ["The Slot when the VRF round was opened."];
            type: "u64";
          },
          {
            name: "requestTimestamp";
            docs: ["The unix timestamp when the VRF round was opened."];
            type: "i64";
          },
          {
            name: "authority";
            docs: ["On-chain account delegated for making account changes."];
            type: "publicKey";
          },
          {
            name: "queue";
            docs: [
              "The OracleQueueAccountData that is assigned to fulfill VRF update request."
            ];
            type: "publicKey";
          },
          {
            name: "escrow";
            docs: [
              "The token account used to hold funds for VRF update request."
            ];
            type: "publicKey";
          },
          {
            name: "callback";
            docs: [
              "The callback that is invoked when an update request is successfully verified."
            ];
            type: {
              defined: "CallbackZC";
            };
          },
          {
            name: "builder";
            docs: ["The incremental VRF proof calculation."];
            type: {
              defined: "VrfBuilder";
            };
          },
          {
            name: "expiration";
            type: "i64";
          },
          {
            name: "ebuf";
            type: {
              array: ["u8", 1024];
            };
          }
        ];
      };
    },
    {
      name: "vrfPoolAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "authority";
            docs: ["ACCOUNTS"];
            type: "publicKey";
          },
          {
            name: "queue";
            type: "publicKey";
          },
          {
            name: "escrow";
            type: "publicKey";
          },
          {
            name: "minInterval";
            type: "u32";
          },
          {
            name: "maxRows";
            type: "u32";
          },
          {
            name: "size";
            type: "u32";
          },
          {
            name: "idx";
            type: "u32";
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "ebuf";
            type: {
              array: ["u8", 135];
            };
          }
        ];
      };
    },
    {
      name: "bufferRelayerAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            docs: ["Name of the buffer account to store on-chain."];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "queuePubkey";
            docs: [
              "Public key of the OracleQueueAccountData that is currently assigned to fulfill buffer relayer update request."
            ];
            type: "publicKey";
          },
          {
            name: "escrow";
            docs: [
              "Token account to reward oracles for completing update request."
            ];
            type: "publicKey";
          },
          {
            name: "authority";
            docs: [
              "The account delegated as the authority for making account changes."
            ];
            type: "publicKey";
          },
          {
            name: "jobPubkey";
            docs: [
              "Public key of the JobAccountData that defines how the buffer relayer is updated."
            ];
            type: "publicKey";
          },
          {
            name: "jobHash";
            docs: [
              "Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment"
            ];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "minUpdateDelaySeconds";
            docs: ["Minimum delay between update request."];
            type: "u32";
          },
          {
            name: "isLocked";
            docs: [
              "Whether buffer relayer config is locked for further changes."
            ];
            type: "bool";
          },
          {
            name: "currentRound";
            docs: [
              "The current buffer relayer update round that is yet to be confirmed."
            ];
            type: {
              defined: "BufferRelayerRound";
            };
          },
          {
            name: "latestConfirmedRound";
            docs: ["The latest confirmed buffer relayer update round."];
            type: {
              defined: "BufferRelayerRound";
            };
          },
          {
            name: "result";
            docs: ["The buffer holding the latest confirmed result."];
            type: "bytes";
          }
        ];
      };
    }
  ];
  types: [
    {
      name: "AggregatorAddJobParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "weight";
            type: {
              option: "u8";
            };
          }
        ];
      };
    },
    {
      name: "AggregatorCloseParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "permissionBump";
            type: "u8";
          },
          {
            name: "leaseBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "AggregatorInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "metadata";
            type: {
              array: ["u8", 128];
            };
          },
          {
            name: "batchSize";
            type: "u32";
          },
          {
            name: "minOracleResults";
            type: "u32";
          },
          {
            name: "minJobResults";
            type: "u32";
          },
          {
            name: "minUpdateDelaySeconds";
            type: "u32";
          },
          {
            name: "startAfter";
            type: "i64";
          },
          {
            name: "varianceThreshold";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "forceReportPeriod";
            type: "i64";
          },
          {
            name: "expiration";
            type: "i64";
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "disableCrank";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "AggregatorLockParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "AggregatorOpenRoundParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "leaseBump";
            type: "u8";
          },
          {
            name: "permissionBump";
            type: "u8";
          },
          {
            name: "jitter";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "AggregatorRemoveJobParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "jobIdx";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "AggregatorSaveResultParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oracleIdx";
            type: "u32";
          },
          {
            name: "error";
            type: "bool";
          },
          {
            name: "value";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "jobsChecksum";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "minResponse";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "maxResponse";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "feedPermissionBump";
            type: "u8";
          },
          {
            name: "oraclePermissionBump";
            type: "u8";
          },
          {
            name: "leaseBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "AggregatorSaveResultParamsV2";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oracleIdx";
            type: "u32";
          },
          {
            name: "error";
            type: "bool";
          },
          {
            name: "value";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "jobsChecksum";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "minResponse";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "maxResponse";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "feedPermissionBump";
            type: "u8";
          },
          {
            name: "oraclePermissionBump";
            type: "u8";
          },
          {
            name: "leaseBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "jobValues";
            type: {
              vec: {
                option: {
                  defined: "BorshDecimal";
                };
              };
            };
          }
        ];
      };
    },
    {
      name: "AggregatorSetAuthorityParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "AggregatorSetBatchSizeParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "batchSize";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "AggregatorSetConfigParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "metadata";
            type: {
              option: {
                array: ["u8", 128];
              };
            };
          },
          {
            name: "minUpdateDelaySeconds";
            type: {
              option: "u32";
            };
          },
          {
            name: "minJobResults";
            type: {
              option: "u32";
            };
          },
          {
            name: "batchSize";
            type: {
              option: "u32";
            };
          },
          {
            name: "minOracleResults";
            type: {
              option: "u32";
            };
          },
          {
            name: "forceReportPeriod";
            type: {
              option: "u32";
            };
          },
          {
            name: "varianceThreshold";
            type: {
              option: {
                defined: "BorshDecimal";
              };
            };
          },
          {
            name: "basePriorityFee";
            type: {
              option: "u32";
            };
          },
          {
            name: "priorityFeeBump";
            type: {
              option: "u32";
            };
          },
          {
            name: "priorityFeeBumpPeriod";
            type: {
              option: "u32";
            };
          },
          {
            name: "maxPriorityFeeMultiplier";
            type: {
              option: "u32";
            };
          },
          {
            name: "disableCrank";
            type: {
              option: "bool";
            };
          }
        ];
      };
    },
    {
      name: "AggregatorSetForceReportPeriodParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "forceReportPeriod";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "AggregatorSetHistoryBufferParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "AggregatorSetMinJobsParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "minJobResults";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "AggregatorSetMinOraclesParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "minOracleResults";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "AggregatorSetQueueParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "AggregatorSetResolutionModeParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "mode";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "AggregatorSetUpdateIntervalParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "newInterval";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "AggregatorSetVarianceThresholdParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "varianceThreshold";
            type: {
              defined: "BorshDecimal";
            };
          }
        ];
      };
    },
    {
      name: "AggregatorTeeSaveResultParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "value";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "jobsChecksum";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "minResponse";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "maxResponse";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "feedPermissionBump";
            type: "u8";
          },
          {
            name: "oraclePermissionBump";
            type: "u8";
          },
          {
            name: "leaseBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "BufferRelayerInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "minUpdateDelaySeconds";
            type: "u32";
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "BufferRelayerOpenRoundParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "permissionBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "BufferRelayerSaveResultParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "permissionBump";
            type: "u8";
          },
          {
            name: "result";
            type: "bytes";
          },
          {
            name: "success";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "CrankInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "bytes";
          },
          {
            name: "metadata";
            type: "bytes";
          },
          {
            name: "crankSize";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "CrankPopParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "leaseBumps";
            type: "bytes";
          },
          {
            name: "permissionBumps";
            type: "bytes";
          },
          {
            name: "nonce";
            type: {
              option: "u32";
            };
          },
          {
            name: "failOpenOnAccountMismatch";
            type: {
              option: "bool";
            };
          }
        ];
      };
    },
    {
      name: "CrankPopParamsV2";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "leaseBumps";
            type: "bytes";
          },
          {
            name: "permissionBumps";
            type: "bytes";
          },
          {
            name: "nonce";
            type: {
              option: "u32";
            };
          },
          {
            name: "failOpenOnAccountMismatch";
            type: {
              option: "bool";
            };
          },
          {
            name: "popIdx";
            type: {
              option: "u32";
            };
          }
        ];
      };
    },
    {
      name: "CrankPushParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "permissionBump";
            type: "u8";
          },
          {
            name: "notifiRef";
            type: {
              option: {
                array: ["u8", 64];
              };
            };
          }
        ];
      };
    },
    {
      name: "JobInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "expiration";
            type: "i64";
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "data";
            type: "bytes";
          },
          {
            name: "size";
            type: {
              option: "u32";
            };
          }
        ];
      };
    },
    {
      name: "JobSetDataParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "data";
            type: "bytes";
          },
          {
            name: "chunkIdx";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "LeaseExtendParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "loadAmount";
            type: "u64";
          },
          {
            name: "leaseBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "walletBumps";
            type: "bytes";
          }
        ];
      };
    },
    {
      name: "LeaseInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "loadAmount";
            type: "u64";
          },
          {
            name: "withdrawAuthority";
            type: "publicKey";
          },
          {
            name: "leaseBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "walletBumps";
            type: "bytes";
          }
        ];
      };
    },
    {
      name: "LeaseSetAuthorityParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "LeaseWithdrawParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "leaseBump";
            type: "u8";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "OracleHeartbeatParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "permissionBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "OracleInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: "bytes";
          },
          {
            name: "metadata";
            type: "bytes";
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "oracleBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "OracleQueueInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "metadata";
            type: {
              array: ["u8", 64];
            };
          },
          {
            name: "reward";
            type: "u64";
          },
          {
            name: "minStake";
            type: "u64";
          },
          {
            name: "feedProbationPeriod";
            type: "u32";
          },
          {
            name: "oracleTimeout";
            type: "u32";
          },
          {
            name: "slashingEnabled";
            type: "bool";
          },
          {
            name: "varianceToleranceMultiplier";
            type: {
              defined: "BorshDecimal";
            };
          },
          {
            name: "consecutiveFeedFailureLimit";
            type: "u64";
          },
          {
            name: "consecutiveOracleFailureLimit";
            type: "u64";
          },
          {
            name: "queueSize";
            type: "u32";
          },
          {
            name: "unpermissionedFeeds";
            type: "bool";
          },
          {
            name: "unpermissionedVrf";
            type: "bool";
          },
          {
            name: "enableBufferRelayers";
            type: "bool";
          },
          {
            name: "enableTeeOnly";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "OracleQueueSetConfigParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "name";
            type: {
              option: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "metadata";
            type: {
              option: {
                array: ["u8", 64];
              };
            };
          },
          {
            name: "unpermissionedFeedsEnabled";
            type: {
              option: "bool";
            };
          },
          {
            name: "unpermissionedVrfEnabled";
            type: {
              option: "bool";
            };
          },
          {
            name: "enableBufferRelayers";
            type: {
              option: "bool";
            };
          },
          {
            name: "varianceToleranceMultiplier";
            type: {
              option: {
                defined: "BorshDecimal";
              };
            };
          },
          {
            name: "slashingEnabled";
            type: {
              option: "bool";
            };
          },
          {
            name: "reward";
            type: {
              option: "u64";
            };
          },
          {
            name: "minStake";
            type: {
              option: "u64";
            };
          },
          {
            name: "oracleTimeout";
            type: {
              option: "u32";
            };
          },
          {
            name: "consecutiveFeedFailureLimit";
            type: {
              option: "u64";
            };
          },
          {
            name: "consecutiveOracleFailureLimit";
            type: {
              option: "u64";
            };
          },
          {
            name: "enableTeeOnly";
            type: {
              option: "bool";
            };
          }
        ];
      };
    },
    {
      name: "OracleQueueSetRewardsParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "rewards";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "OracleTeeHeartbeatParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "permissionBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "OracleWithdrawParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "permissionBump";
            type: "u8";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "PermissionInitParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "PermissionSetParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "permission";
            type: {
              defined: "SwitchboardPermission";
            };
          },
          {
            name: "enable";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "ProgramConfigParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "token";
            type: "publicKey";
          },
          {
            name: "bump";
            type: "u8";
          },
          {
            name: "daoMint";
            type: "publicKey";
          },
          {
            name: "addEnclaves";
            type: {
              vec: {
                array: ["u8", 32];
              };
            };
          },
          {
            name: "rmEnclaves";
            type: {
              vec: {
                array: ["u8", 32];
              };
            };
          }
        ];
      };
    },
    {
      name: "ProgramInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "SetBumpsParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "VaultTransferParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "amount";
            type: "u64";
          }
        ];
      };
    },
    {
      name: "VrfCloseParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "permissionBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "VrfInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "callback";
            type: {
              defined: "Callback";
            };
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "VrfLiteCloseParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "VrfLiteInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "callback";
            type: {
              option: {
                defined: "Callback";
              };
            };
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "expiration";
            type: {
              option: "i64";
            };
          }
        ];
      };
    },
    {
      name: "VrfLiteProveAndVerifyParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "nonce";
            type: {
              option: "u32";
            };
          },
          {
            name: "proof";
            type: "bytes";
          },
          {
            name: "proofEncoded";
            type: "string";
          },
          {
            name: "counter";
            type: "u128";
          }
        ];
      };
    },
    {
      name: "VrfLiteRequestRandomnessParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "callback";
            type: {
              option: {
                defined: "Callback";
              };
            };
          }
        ];
      };
    },
    {
      name: "VrfPoolAddParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "VrfPoolInitParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "maxRows";
            type: "u32";
          },
          {
            name: "minInterval";
            type: "u32";
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "VrfPoolRemoveParams";
      type: {
        kind: "struct";
        fields: [];
      };
    },
    {
      name: "VrfPoolRequestParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "callback";
            type: {
              option: {
                defined: "Callback";
              };
            };
          }
        ];
      };
    },
    {
      name: "VrfProveParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "proof";
            type: "bytes";
          },
          {
            name: "idx";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "VrfProveAndVerifyParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "nonce";
            type: {
              option: "u32";
            };
          },
          {
            name: "stateBump";
            type: "u8";
          },
          {
            name: "idx";
            type: "u32";
          },
          {
            name: "proof";
            type: "bytes";
          },
          {
            name: "proofEncoded";
            type: "string";
          },
          {
            name: "counter";
            type: "u128";
          }
        ];
      };
    },
    {
      name: "VrfRequestRandomnessParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "permissionBump";
            type: "u8";
          },
          {
            name: "stateBump";
            type: "u8";
          }
        ];
      };
    },
    {
      name: "VrfSetCallbackParams";
      type: {
        kind: "struct";
        fields: [
          {
            name: "callback";
            type: {
              defined: "Callback";
            };
          }
        ];
      };
    },
    {
      name: "Callback";
      type: {
        kind: "struct";
        fields: [
          {
            name: "programId";
            type: "publicKey";
          },
          {
            name: "accounts";
            type: {
              vec: {
                defined: "AccountMetaBorsh";
              };
            };
          },
          {
            name: "ixData";
            type: "bytes";
          }
        ];
      };
    },
    {
      name: "EcvrfProofZC";
      type: {
        kind: "struct";
        fields: [
          {
            name: "gamma";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "c";
            type: {
              defined: "Scalar";
            };
          },
          {
            name: "s";
            type: {
              defined: "Scalar";
            };
          }
        ];
      };
    },
    {
      name: "Scalar";
      docs: [
        "The `Scalar` struct holds an integer \\\\(s < 2\\^{255} \\\\) which",
        "represents an element of \\\\(\\mathbb Z / \\ell\\\\)."
      ];
      type: {
        kind: "struct";
        fields: [
          {
            name: "bytes";
            docs: [
              "`bytes` is a little-endian byte encoding of an integer representing a scalar modulo the",
              "group order.",
              "",
              "# Invariant",
              "",
              "The integer representing this scalar must be bounded above by \\\\(2\\^{255}\\\\), or",
              "equivalently the high bit of `bytes[31]` must be zero.",
              "",
              "This ensures that there is room for a carry bit when computing a NAF representation."
            ];
            type: {
              array: ["u8", 32];
            };
          }
        ];
      };
    },
    {
      name: "FieldElementZC";
      type: {
        kind: "struct";
        fields: [
          {
            name: "bytes";
            type: {
              array: ["u64", 5];
            };
          }
        ];
      };
    },
    {
      name: "CompletedPointZC";
      type: {
        kind: "struct";
        fields: [
          {
            name: "x";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "y";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "z";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "t";
            type: {
              defined: "FieldElementZC";
            };
          }
        ];
      };
    },
    {
      name: "EdwardsPointZC";
      type: {
        kind: "struct";
        fields: [
          {
            name: "x";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "y";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "z";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "t";
            type: {
              defined: "FieldElementZC";
            };
          }
        ];
      };
    },
    {
      name: "ProjectivePointZC";
      type: {
        kind: "struct";
        fields: [
          {
            name: "x";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "y";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "z";
            type: {
              defined: "FieldElementZC";
            };
          }
        ];
      };
    },
    {
      name: "EcvrfIntermediate";
      type: {
        kind: "struct";
        fields: [
          {
            name: "r";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "nS";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "d";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "t13";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "t15";
            type: {
              defined: "FieldElementZC";
            };
          }
        ];
      };
    },
    {
      name: "BorshDecimal";
      type: {
        kind: "struct";
        fields: [
          {
            name: "mantissa";
            type: "i128";
          },
          {
            name: "scale";
            type: "u32";
          }
        ];
      };
    },
    {
      name: "Quote";
      type: {
        kind: "struct";
        fields: [
          {
            name: "enclaveSigner";
            docs: ["The address of the signer generated within an enclave."];
            type: "publicKey";
          },
          {
            name: "mrEnclave";
            docs: [
              "The quotes MRENCLAVE measurement dictating the contents of the secure enclave."
            ];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "verificationStatus";
            docs: ["The VerificationStatus of the quote."];
            type: "u8";
          },
          {
            name: "verificationTimestamp";
            docs: ["The unix timestamp when the quote was last verified."];
            type: "i64";
          },
          {
            name: "validUntil";
            docs: [
              "The unix timestamp when the quotes verification status expires."
            ];
            type: "i64";
          },
          {
            name: "quoteRegistry";
            docs: [
              "The off-chain registry where the verifiers quote can be located."
            ];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "registryKey";
            docs: [
              "Key to lookup the buffer data on IPFS or an alternative decentralized storage solution."
            ];
            type: {
              array: ["u8", 64];
            };
          },
          {
            name: "ebuf";
            docs: ["Reserved."];
            type: {
              array: ["u8", 256];
            };
          }
        ];
      };
    },
    {
      name: "VerifierAccountData";
      type: {
        kind: "struct";
        fields: [
          {
            name: "enclave";
            docs: ["Represents the state of the quote verifiers enclave."];
            type: {
              defined: "Quote";
            };
          },
          {
            name: "authority";
            docs: [
              "The authority of the EnclaveAccount which is permitted to make account changes."
            ];
            type: "publicKey";
          },
          {
            name: "attestationQueue";
            docs: [
              "Queue used for attestation to verify a MRENCLAVE measurement."
            ];
            type: "publicKey";
          },
          {
            name: "createdAt";
            docs: ["The unix timestamp when the quote was created."];
            type: "i64";
          },
          {
            name: "isOnQueue";
            docs: [
              "Whether the quote is located on the AttestationQueues buffer."
            ];
            type: "bool";
          },
          {
            name: "lastHeartbeat";
            docs: ["The last time the quote heartbeated on-chain."];
            type: "i64";
          },
          {
            name: "rewardEscrow";
            docs: [
              "The SwitchboardWallet account containing the reward escrow for verifying quotes on-chain.",
              "We should set this whenever the operator changes so we dont need to pass another account and can verify with has_one."
            ];
            type: "publicKey";
          },
          {
            name: "stakeWallet";
            docs: [
              "The SwitchboardWallet account containing the queues required min_stake.",
              "Needs to be separate from the reward_escrow. Allows easier 3rd party management of stake from rewards."
            ];
            type: "publicKey";
          },
          {
            name: "ebuf";
            docs: ["Reserved."];
            type: {
              array: ["u8", 1024];
            };
          }
        ];
      };
    },
    {
      name: "Hash";
      type: {
        kind: "struct";
        fields: [
          {
            name: "data";
            docs: ["The bytes used to derive the hash."];
            type: {
              array: ["u8", 32];
            };
          }
        ];
      };
    },
    {
      name: "SlidingWindowElement";
      type: {
        kind: "struct";
        fields: [
          {
            name: "oracleKey";
            type: "publicKey";
          },
          {
            name: "value";
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "slot";
            type: "u64";
          },
          {
            name: "timestamp";
            type: "i64";
          }
        ];
      };
    },
    {
      name: "AggregatorRound";
      type: {
        kind: "struct";
        fields: [
          {
            name: "numSuccess";
            docs: [
              "Maintains the number of successful responses received from nodes.",
              "Nodes can submit one successful response per round."
            ];
            type: "u32";
          },
          {
            name: "numError";
            docs: ["Number of error responses."];
            type: "u32";
          },
          {
            name: "isClosed";
            docs: ["Whether an update request round has ended."];
            type: "bool";
          },
          {
            name: "roundOpenSlot";
            docs: [
              "Maintains the `solana_program::clock::Slot` that the round was opened at."
            ];
            type: "u64";
          },
          {
            name: "roundOpenTimestamp";
            docs: [
              "Maintains the `solana_program::clock::UnixTimestamp;` the round was opened at."
            ];
            type: "i64";
          },
          {
            name: "result";
            docs: [
              "Maintains the current median of all successful round responses."
            ];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "stdDeviation";
            docs: ["Standard deviation of the accepted results in the round."];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "minResponse";
            docs: ["Maintains the minimum node response this round."];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "maxResponse";
            docs: ["Maintains the maximum node response this round."];
            type: {
              defined: "SwitchboardDecimal";
            };
          },
          {
            name: "oraclePubkeysData";
            docs: ["Pubkeys of the oracles fulfilling this round."];
            type: {
              array: ["publicKey", 16];
            };
          },
          {
            name: "mediansData";
            docs: [
              "Represents all successful node responses this round. `NaN` if empty."
            ];
            type: {
              array: [
                {
                  defined: "SwitchboardDecimal";
                },
                16
              ];
            };
          },
          {
            name: "currentPayout";
            docs: ["Current rewards/slashes oracles have received this round."];
            type: {
              array: ["i64", 16];
            };
          },
          {
            name: "mediansFulfilled";
            docs: ["Keep track of which responses are fulfilled here."];
            type: {
              array: ["bool", 16];
            };
          },
          {
            name: "errorsFulfilled";
            docs: ["Keeps track of which errors are fulfilled here."];
            type: {
              array: ["bool", 16];
            };
          }
        ];
      };
    },
    {
      name: "AggregatorHistoryRow";
      type: {
        kind: "struct";
        fields: [
          {
            name: "timestamp";
            docs: ["The timestamp of the sample."];
            type: "i64";
          },
          {
            name: "value";
            docs: ["The value of the sample."];
            type: {
              defined: "SwitchboardDecimal";
            };
          }
        ];
      };
    },
    {
      name: "SwitchboardDecimal";
      type: {
        kind: "struct";
        fields: [
          {
            name: "mantissa";
            docs: [
              "The part of a floating-point number that represents the significant digits of that number,",
              "and that is multiplied by the base, 10, raised to the power of scale to give the actual value of the number."
            ];
            type: "i128";
          },
          {
            name: "scale";
            docs: [
              "The number of decimal places to move to the left to yield the actual value."
            ];
            type: "u32";
          }
        ];
      };
    },
    {
      name: "CrankRow";
      type: {
        kind: "struct";
        fields: [
          {
            name: "pubkey";
            docs: ["The PublicKey of the AggregatorAccountData."];
            type: "publicKey";
          },
          {
            name: "nextTimestamp";
            docs: ["The aggregator's next available update time."];
            type: "i64";
          }
        ];
      };
    },
    {
      name: "OracleMetrics";
      type: {
        kind: "struct";
        fields: [
          {
            name: "consecutiveSuccess";
            docs: ["Number of consecutive successful update request."];
            type: "u64";
          },
          {
            name: "consecutiveError";
            docs: [
              "Number of consecutive update request that resulted in an error."
            ];
            type: "u64";
          },
          {
            name: "consecutiveDisagreement";
            docs: [
              "Number of consecutive update request that resulted in a disagreement with the accepted median result."
            ];
            type: "u64";
          },
          {
            name: "consecutiveLateResponse";
            docs: [
              "Number of consecutive update request that were posted on-chain late and not included in an accepted result."
            ];
            type: "u64";
          },
          {
            name: "consecutiveFailure";
            docs: [
              "Number of consecutive update request that resulted in a failure."
            ];
            type: "u64";
          },
          {
            name: "totalSuccess";
            docs: ["Total number of successful update request."];
            type: "u128";
          },
          {
            name: "totalError";
            docs: ["Total number of update request that resulted in an error."];
            type: "u128";
          },
          {
            name: "totalDisagreement";
            docs: [
              "Total number of update request that resulted in a disagreement with the accepted median result."
            ];
            type: "u128";
          },
          {
            name: "totalLateResponse";
            docs: [
              "Total number of update request that were posted on-chain late and not included in an accepted result."
            ];
            type: "u128";
          }
        ];
      };
    },
    {
      name: "VrfBuilder";
      type: {
        kind: "struct";
        fields: [
          {
            name: "producer";
            docs: ["The OracleAccountData that is producing the randomness."];
            type: "publicKey";
          },
          {
            name: "status";
            docs: ["The current status of the VRF verification."];
            type: {
              defined: "VrfStatus";
            };
          },
          {
            name: "reprProof";
            docs: ["The VRF proof sourced from the producer."];
            type: {
              array: ["u8", 80];
            };
          },
          {
            name: "proof";
            type: {
              defined: "EcvrfProofZC";
            };
          },
          {
            name: "yPoint";
            type: "publicKey";
          },
          {
            name: "stage";
            type: "u32";
          },
          {
            name: "stage1Out";
            type: {
              defined: "EcvrfIntermediate";
            };
          },
          {
            name: "r1";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "r2";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "stage3Out";
            type: {
              defined: "EcvrfIntermediate";
            };
          },
          {
            name: "hPoint";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "sReduced";
            type: {
              defined: "Scalar";
            };
          },
          {
            name: "yPointBuilder";
            type: {
              array: [
                {
                  defined: "FieldElementZC";
                },
                3
              ];
            };
          },
          {
            name: "yRistrettoPoint";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "mulRound";
            type: "u8";
          },
          {
            name: "hashPointsRound";
            type: "u8";
          },
          {
            name: "mulTmp1";
            type: {
              defined: "CompletedPointZC";
            };
          },
          {
            name: "uPoint1";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "uPoint2";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "vPoint1";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "vPoint2";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "uPoint";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "vPoint";
            type: {
              defined: "EdwardsPointZC";
            };
          },
          {
            name: "u1";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "u2";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "invertee";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "y";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "z";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "p1Bytes";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "p2Bytes";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "p3Bytes";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "p4Bytes";
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "cPrimeHashbuf";
            type: {
              array: ["u8", 16];
            };
          },
          {
            name: "m1";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "m2";
            type: {
              defined: "FieldElementZC";
            };
          },
          {
            name: "txRemaining";
            docs: [
              "The number of transactions remaining to verify the VRF proof."
            ];
            type: "u32";
          },
          {
            name: "verified";
            docs: ["Whether the VRF proof has been verified on-chain."];
            type: "bool";
          },
          {
            name: "result";
            docs: [
              "The VRF proof verification result. Will be zeroized if still awaiting fulfillment."
            ];
            type: {
              array: ["u8", 32];
            };
          }
        ];
      };
    },
    {
      name: "AccountMetaZC";
      type: {
        kind: "struct";
        fields: [
          {
            name: "pubkey";
            type: "publicKey";
          },
          {
            name: "isSigner";
            type: "bool";
          },
          {
            name: "isWritable";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "AccountMetaBorsh";
      type: {
        kind: "struct";
        fields: [
          {
            name: "pubkey";
            type: "publicKey";
          },
          {
            name: "isSigner";
            type: "bool";
          },
          {
            name: "isWritable";
            type: "bool";
          }
        ];
      };
    },
    {
      name: "CallbackZC";
      type: {
        kind: "struct";
        fields: [
          {
            name: "programId";
            docs: ["The program ID of the callback program being invoked."];
            type: "publicKey";
          },
          {
            name: "accounts";
            docs: ["The accounts being used in the callback instruction."];
            type: {
              array: [
                {
                  defined: "AccountMetaZC";
                },
                32
              ];
            };
          },
          {
            name: "accountsLen";
            docs: ["The number of accounts used in the callback"];
            type: "u32";
          },
          {
            name: "ixData";
            docs: ["The serialized instruction data."];
            type: {
              array: ["u8", 1024];
            };
          },
          {
            name: "ixDataLen";
            docs: ["The number of serialized bytes in the instruction data."];
            type: "u32";
          }
        ];
      };
    },
    {
      name: "VrfRound";
      type: {
        kind: "struct";
        fields: [
          {
            name: "alpha";
            docs: ["The alpha bytes used to calculate the VRF proof."];
            type: {
              array: ["u8", 256];
            };
          },
          {
            name: "alphaLen";
            docs: ["The number of bytes in the alpha buffer."];
            type: "u32";
          },
          {
            name: "requestSlot";
            docs: ["The Slot when the VRF round was opened."];
            type: "u64";
          },
          {
            name: "requestTimestamp";
            docs: ["The unix timestamp when the VRF round was opened."];
            type: "i64";
          },
          {
            name: "result";
            docs: [
              "The VRF round result. Will be zeroized if still awaiting fulfillment."
            ];
            type: {
              array: ["u8", 32];
            };
          },
          {
            name: "numVerified";
            docs: ["The number of builders who verified the VRF proof."];
            type: "u32";
          },
          {
            name: "ebuf";
            docs: ["Reserved for future info."];
            type: {
              array: ["u8", 256];
            };
          }
        ];
      };
    },
    {
      name: "VrfPoolRow";
      type: {
        kind: "struct";
        fields: [
          {
            name: "timestamp";
            type: "i64";
          },
          {
            name: "pubkey";
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "BufferRelayerRound";
      type: {
        kind: "struct";
        fields: [
          {
            name: "numSuccess";
            docs: ["Number of successful responses."];
            type: "u32";
          },
          {
            name: "numError";
            docs: ["Number of error responses."];
            type: "u32";
          },
          {
            name: "roundOpenSlot";
            docs: ["Slot when the buffer relayer round was opened."];
            type: "u64";
          },
          {
            name: "roundOpenTimestamp";
            docs: ["Timestamp when the buffer relayer round was opened."];
            type: "i64";
          },
          {
            name: "oraclePubkey";
            docs: [
              "The public key of the oracle fulfilling the buffer relayer update request."
            ];
            type: "publicKey";
          }
        ];
      };
    },
    {
      name: "Lanes";
      docs: [
        "The `Lanes` enum represents a subset of the lanes `A,B,C,D` of a",
        "`FieldElement2625x4`.",
        "",
        "It's used to specify blend operations without",
        "having to know details about the data layout of the",
        "`FieldElement2625x4`."
      ];
      type: {
        kind: "enum";
        variants: [
          {
            name: "C";
          },
          {
            name: "D";
          },
          {
            name: "AB";
          },
          {
            name: "AC";
          },
          {
            name: "CD";
          },
          {
            name: "AD";
          },
          {
            name: "BC";
          },
          {
            name: "ABCD";
          }
        ];
      };
    },
    {
      name: "Shuffle";
      docs: [
        "The `Shuffle` enum represents a shuffle of a `FieldElement2625x4`.",
        "",
        "The enum variants are named by what they do to a vector \\\\(",
        "(A,B,C,D) \\\\); for instance, `Shuffle::BADC` turns \\\\( (A, B, C,",
        "D) \\\\) into \\\\( (B, A, D, C) \\\\)."
      ];
      type: {
        kind: "enum";
        variants: [
          {
            name: "AAAA";
          },
          {
            name: "BBBB";
          },
          {
            name: "CACA";
          },
          {
            name: "DBBD";
          },
          {
            name: "ADDA";
          },
          {
            name: "CBCB";
          },
          {
            name: "ABAB";
          },
          {
            name: "BADC";
          },
          {
            name: "BACD";
          },
          {
            name: "ABDC";
          }
        ];
      };
    },
    {
      name: "Shuffle";
      type: {
        kind: "enum";
        variants: [
          {
            name: "AAAA";
          },
          {
            name: "BBBB";
          },
          {
            name: "BADC";
          },
          {
            name: "BACD";
          },
          {
            name: "ADDA";
          },
          {
            name: "CBCB";
          },
          {
            name: "ABDC";
          },
          {
            name: "ABAB";
          },
          {
            name: "DBBD";
          },
          {
            name: "CACA";
          }
        ];
      };
    },
    {
      name: "Lanes";
      type: {
        kind: "enum";
        variants: [
          {
            name: "D";
          },
          {
            name: "C";
          },
          {
            name: "AB";
          },
          {
            name: "AC";
          },
          {
            name: "AD";
          },
          {
            name: "BCD";
          }
        ];
      };
    },
    {
      name: "Error";
      type: {
        kind: "enum";
        variants: [
          {
            name: "InvalidPublicKey";
          },
          {
            name: "SerializationError";
          },
          {
            name: "DeserializationError";
          },
          {
            name: "InvalidDataError";
          }
        ];
      };
    },
    {
      name: "VerificationStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "None";
          },
          {
            name: "VerificationPending";
          },
          {
            name: "VerificationFailure";
          },
          {
            name: "VerificationSuccess";
          },
          {
            name: "VerificationOverride";
          }
        ];
      };
    },
    {
      name: "AggregatorResolutionMode";
      type: {
        kind: "enum";
        variants: [
          {
            name: "ModeRoundResolution";
          },
          {
            name: "ModeSlidingResolution";
          }
        ];
      };
    },
    {
      name: "SwitchboardPermission";
      type: {
        kind: "enum";
        variants: [
          {
            name: "PermitOracleHeartbeat";
          },
          {
            name: "PermitOracleQueueUsage";
          },
          {
            name: "PermitVrfRequests";
          }
        ];
      };
    },
    {
      name: "OracleResponseType";
      type: {
        kind: "enum";
        variants: [
          {
            name: "TypeSuccess";
          },
          {
            name: "TypeError";
          },
          {
            name: "TypeDisagreement";
          },
          {
            name: "TypeNoResponse";
          }
        ];
      };
    },
    {
      name: "VrfStatus";
      type: {
        kind: "enum";
        variants: [
          {
            name: "StatusNone";
          },
          {
            name: "StatusRequesting";
          },
          {
            name: "StatusVerifying";
          },
          {
            name: "StatusVerified";
          },
          {
            name: "StatusCallbackSuccess";
          },
          {
            name: "StatusVerifyFailure";
          }
        ];
      };
    }
  ];
  events: [
    {
      name: "VrfRequestRandomnessEvent";
      fields: [
        {
          name: "vrfPubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "oraclePubkeys";
          type: {
            vec: "publicKey";
          };
          index: false;
        },
        {
          name: "loadAmount";
          type: "u64";
          index: false;
        },
        {
          name: "existingAmount";
          type: "u64";
          index: false;
        },
        {
          name: "alpha";
          type: "bytes";
          index: false;
        },
        {
          name: "counter";
          type: "u128";
          index: false;
        }
      ];
    },
    {
      name: "VrfRequestEvent";
      fields: [
        {
          name: "vrfPubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "oraclePubkeys";
          type: {
            vec: "publicKey";
          };
          index: false;
        }
      ];
    },
    {
      name: "VrfProveEvent";
      fields: [
        {
          name: "vrfPubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "authorityPubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "VrfVerifyEvent";
      fields: [
        {
          name: "vrfPubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "authorityPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "VrfCallbackPerformedEvent";
      fields: [
        {
          name: "vrfPubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorOpenRoundEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "oraclePubkeys";
          type: {
            vec: "publicKey";
          };
          index: false;
        },
        {
          name: "jobPubkeys";
          type: {
            vec: "publicKey";
          };
          index: false;
        },
        {
          name: "remainingFunds";
          type: "u64";
          index: false;
        },
        {
          name: "queueAuthority";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorSaveResultEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "value";
          type: {
            defined: "BorshDecimal";
          };
          index: false;
        },
        {
          name: "slot";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "jobValues";
          type: {
            vec: {
              option: {
                defined: "BorshDecimal";
              };
            };
          };
          index: false;
        }
      ];
    },
    {
      name: "AggregatorTeeSaveResultEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "value";
          type: {
            defined: "BorshDecimal";
          };
          index: false;
        },
        {
          name: "slot";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorValueUpdateEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "value";
          type: {
            defined: "BorshDecimal";
          };
          index: false;
        },
        {
          name: "slot";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        },
        {
          name: "oraclePubkeys";
          type: {
            vec: "publicKey";
          };
          index: false;
        },
        {
          name: "oracleValues";
          type: {
            vec: {
              defined: "BorshDecimal";
            };
          };
          index: false;
        }
      ];
    },
    {
      name: "OracleRewardEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "leasePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "walletPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "roundSlot";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "OracleWithdrawEvent";
      fields: [
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "walletPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "destinationWallet";
          type: "publicKey";
          index: false;
        },
        {
          name: "previousAmount";
          type: "u64";
          index: false;
        },
        {
          name: "newAmount";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "LeaseWithdrawEvent";
      fields: [
        {
          name: "leasePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "walletPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "previousAmount";
          type: "u64";
          index: false;
        },
        {
          name: "newAmount";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "OracleSlashEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "leasePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "walletPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "roundSlot";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "LeaseFundEvent";
      fields: [
        {
          name: "leasePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "funder";
          type: "publicKey";
          index: false;
        },
        {
          name: "amount";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "ProbationBrokenEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "queuePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "FeedPermissionRevokedEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "GarbageCollectFailureEvent";
      fields: [
        {
          name: "queuePubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "OracleBootedEvent";
      fields: [
        {
          name: "queuePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorCrankEvictionEvent";
      fields: [
        {
          name: "crankPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "aggregatorPubkey";
          type: "publicKey";
          index: true;
        },
        {
          name: "reason";
          type: {
            option: "u32";
          };
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "CrankLeaseInsufficientFundsEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "leasePubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "CrankPopExpectedFailureEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "leasePubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "BufferRelayerOpenRoundEvent";
      fields: [
        {
          name: "relayerPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "jobPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "oraclePubkeys";
          type: {
            vec: "publicKey";
          };
          index: false;
        },
        {
          name: "remainingFunds";
          type: "u64";
          index: false;
        },
        {
          name: "queue";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "PriorityFeeReimburseEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "slot";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        },
        {
          name: "fee";
          type: "u64";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorAddJobEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "jobPubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorRemoveJobEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "jobPubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorLockEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorInitEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorSetAuthorityEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "oldAuthority";
          type: "publicKey";
          index: false;
        },
        {
          name: "newAuthority";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "AggregatorSetConfigsEvent";
      fields: [
        {
          name: "feedPubkey";
          type: "publicKey";
          index: false;
        }
      ];
    },
    {
      name: "PermissionSetEvent";
      fields: [
        {
          name: "permissionKey";
          type: "publicKey";
          index: false;
        },
        {
          name: "permission";
          type: {
            defined: "SwitchboardPermission";
          };
          index: false;
        },
        {
          name: "enable";
          type: "bool";
          index: false;
        }
      ];
    },
    {
      name: "VrfPoolUpdateEvent";
      fields: [
        {
          name: "queuePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "vrfPoolPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "vrfPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "newSize";
          type: "u32";
          index: false;
        },
        {
          name: "minInterval";
          type: "u32";
          index: false;
        }
      ];
    },
    {
      name: "VrfPoolRequestEvent";
      fields: [
        {
          name: "queuePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "vrfPoolPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "vrfPubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "oraclePubkey";
          type: "publicKey";
          index: false;
        },
        {
          name: "slot";
          type: "u64";
          index: false;
        },
        {
          name: "timestamp";
          type: "i64";
          index: false;
        }
      ];
    },
    {
      name: "QuoteVerifyRequestEvent";
      fields: [
        {
          name: "quotePubkey";
          type: "publicKey";
          index: false;
        }
      ];
    }
  ];
  errors: [
    {
      code: 6000;
      name: "ArrayOperationError";
      msg: "Illegal operation on a Switchboard array.";
    },
    {
      code: 6001;
      name: "QueueOperationError";
      msg: "Illegal operation on a Switchboard queue.";
    },
    {
      code: 6002;
      name: "IncorrectProgramOwnerError";
      msg: "An account required to be owned by the program has a different owner.";
    },
    {
      code: 6003;
      name: "InvalidAggregatorRound";
      msg: "Aggregator is not currently populated with a valid round.";
    },
    {
      code: 6004;
      name: "TooManyAggregatorJobs";
      msg: "Aggregator cannot fit any more jobs.";
    },
    {
      code: 6005;
      name: "AggregatorCurrentRoundClosed";
      msg: "Aggregator's current round is closed. No results are being accepted.";
    },
    {
      code: 6006;
      name: "AggregatorInvalidSaveResult";
      msg: "Aggregator received an invalid save result instruction.";
    },
    {
      code: 6007;
      name: "InvalidStrDecimalConversion";
      msg: "Failed to convert string to decimal format.";
    },
    {
      code: 6008;
      name: "AccountLoaderMissingSignature";
      msg: "AccountLoader account is missing a required signature.";
    },
    {
      code: 6009;
      name: "MissingRequiredSignature";
      msg: "Account is missing a required signature.";
    },
    {
      code: 6010;
      name: "ArrayOverflowError";
      msg: "The attempted action will overflow a zero-copy account array.";
    },
    {
      code: 6011;
      name: "ArrayUnderflowError";
      msg: "The attempted action will underflow a zero-copy account array.";
    },
    {
      code: 6012;
      name: "PubkeyNotFoundError";
      msg: "The queried public key was not found.";
    },
    {
      code: 6013;
      name: "AggregatorIllegalRoundOpenCall";
      msg: "Aggregator round open called too early.";
    },
    {
      code: 6014;
      name: "AggregatorIllegalRoundCloseCall";
      msg: "Aggregator round close called too early.";
    },
    {
      code: 6015;
      name: "AggregatorClosedError";
      msg: "Aggregator is closed. Illegal action.";
    },
    {
      code: 6016;
      name: "IllegalOracleIdxError";
      msg: "Illegal oracle index.";
    },
    {
      code: 6017;
      name: "OracleAlreadyRespondedError";
      msg: "The provided oracle has already responded this round.";
    },
    {
      code: 6018;
      name: "ProtoDeserializeError";
      msg: "Failed to deserialize protocol buffer.";
    },
    {
      code: 6019;
      name: "UnauthorizedStateUpdateError";
      msg: "Unauthorized program state modification attempted.";
    },
    {
      code: 6020;
      name: "MissingOracleAccountsError";
      msg: "Not enough oracle accounts provided to closeRounds.";
    },
    {
      code: 6021;
      name: "OracleMismatchError";
      msg: "An unexpected oracle account was provided for the transaction.";
    },
    {
      code: 6022;
      name: "CrankMaxCapacityError";
      msg: "Attempted to push to a Crank that's at capacity";
    },
    {
      code: 6023;
      name: "AggregatorLeaseInsufficientFunds";
      msg: "Aggregator update call attempted but attached lease has insufficient funds.";
    },
    {
      code: 6024;
      name: "IncorrectTokenAccountMint";
      msg: "The provided token account does not point to the Switchboard token mint.";
    },
    {
      code: 6025;
      name: "InvalidEscrowAccount";
      msg: "An invalid escrow account was provided.";
    },
    {
      code: 6026;
      name: "CrankEmptyError";
      msg: "Crank empty. Pop failed.";
    },
    {
      code: 6027;
      name: "PdaDeriveError";
      msg: "Failed to derive a PDA from the provided seed.";
    },
    {
      code: 6028;
      name: "AggregatorAccountNotFound";
      msg: "Aggregator account missing from provided account list.";
    },
    {
      code: 6029;
      name: "PermissionAccountNotFound";
      msg: "Permission account missing from provided account list.";
    },
    {
      code: 6030;
      name: "LeaseAccountDeriveFailure";
      msg: "Failed to derive a lease account.";
    },
    {
      code: 6031;
      name: "PermissionAccountDeriveFailure";
      msg: "Failed to derive a permission account.";
    },
    {
      code: 6032;
      name: "EscrowAccountNotFound";
      msg: "Escrow account missing from provided account list.";
    },
    {
      code: 6033;
      name: "LeaseAccountNotFound";
      msg: "Lease account missing from provided account list.";
    },
    {
      code: 6034;
      name: "DecimalConversionError";
      msg: "Decimal conversion method failed.";
    },
    {
      code: 6035;
      name: "PermissionDenied";
      msg: "Permission account is missing required flags for the given action.";
    },
    {
      code: 6036;
      name: "QueueAtCapacity";
      msg: "Oracle queue is at lease capacity.";
    },
    {
      code: 6037;
      name: "ExcessiveCrankRowsError";
      msg: "Data feed is already pushed on a crank.";
    },
    {
      code: 6038;
      name: "AggregatorLockedError";
      msg: "Aggregator is locked, no setting modifications or job additions allowed.";
    },
    {
      code: 6039;
      name: "AggregatorInvalidBatchSizeError";
      msg: "Aggregator invalid batch size.";
    },
    {
      code: 6040;
      name: "AggregatorJobChecksumMismatch";
      msg: "Oracle provided an incorrect aggregator job checksum.";
    },
    {
      code: 6041;
      name: "IntegerOverflowError";
      msg: "An integer overflow occurred.";
    },
    {
      code: 6042;
      name: "InvalidUpdatePeriodError";
      msg: "Minimum update period is 5 seconds.";
    },
    {
      code: 6043;
      name: "NoResultsError";
      msg: "Aggregator round evaluation attempted with no results.";
    },
    {
      code: 6044;
      name: "InvalidExpirationError";
      msg: "An expiration constraint was broken.";
    },
    {
      code: 6045;
      name: "InsufficientStakeError";
      msg: "An account provided insufficient stake for action.";
    },
    {
      code: 6046;
      name: "LeaseInactiveError";
      msg: "The provided lease account is not active.";
    },
    {
      code: 6047;
      name: "NoAggregatorJobsFound";
      msg: "No jobs are currently included in the aggregator.";
    },
    {
      code: 6048;
      name: "IntegerUnderflowError";
      msg: "An integer underflow occurred.";
    },
    {
      code: 6049;
      name: "OracleQueueMismatch";
      msg: "An invalid oracle queue account was provided.";
    },
    {
      code: 6050;
      name: "OracleWalletMismatchError";
      msg: "An unexpected oracle wallet account was provided for the transaction.";
    },
    {
      code: 6051;
      name: "InvalidBufferAccountError";
      msg: "An invalid buffer account was provided.";
    },
    {
      code: 6052;
      name: "InsufficientOracleQueueError";
      msg: "Insufficient oracle queue size.";
    },
    {
      code: 6053;
      name: "InvalidAuthorityError";
      msg: "Invalid authority account provided.";
    },
    {
      code: 6054;
      name: "InvalidTokenAccountMintError";
      msg: "A provided token wallet is associated with an incorrect mint.";
    },
    {
      code: 6055;
      name: "ExcessiveLeaseWithdrawlError";
      msg: "You must leave enough funds to perform at least 1 update in the lease.";
    },
    {
      code: 6056;
      name: "InvalideHistoryAccountError";
      msg: "Invalid history account provided.";
    },
    {
      code: 6057;
      name: "InvalidLeaseAccountEscrowError";
      msg: "Invalid lease account escrow.";
    },
    {
      code: 6058;
      name: "InvalidCrankAccountError";
      msg: "Invalid crank provided.";
    },
    {
      code: 6059;
      name: "CrankNoElementsReadyError";
      msg: "No elements ready to be popped.";
    },
    {
      code: 6060;
      name: "IndexOutOfBoundsError";
      msg: "Index out of bounds";
    },
    {
      code: 6061;
      name: "VrfInvalidRequestError";
      msg: "Invalid vrf request params";
    },
    {
      code: 6062;
      name: "VrfInvalidProofSubmissionError";
      msg: "Vrf proof failed to verify";
    },
    {
      code: 6063;
      name: "VrfVerifyError";
      msg: "Error in verifying vrf proof.";
    },
    {
      code: 6064;
      name: "VrfCallbackError";
      msg: "Vrf callback function failed.";
    },
    {
      code: 6065;
      name: "VrfCallbackParamsError";
      msg: "Invalid vrf callback params provided.";
    },
    {
      code: 6066;
      name: "VrfCallbackAlreadyCalledError";
      msg: "Vrf callback has already been triggered.";
    },
    {
      code: 6067;
      name: "VrfInvalidPubkeyError";
      msg: "The provided pubkey is invalid to use in ecvrf proofs";
    },
    {
      code: 6068;
      name: "VrfTooManyVerifyCallsError";
      msg: "Number of required verify calls exceeded";
    },
    {
      code: 6069;
      name: "VrfRequestAlreadyLaunchedError";
      msg: "Vrf request is already pending";
    },
    {
      code: 6070;
      name: "VrfInsufficientVerificationError";
      msg: "Insufficient amount of proofs collected for VRF callback";
    },
    {
      code: 6071;
      name: "InvalidVrfProducerError";
      msg: "An incorrect oracle attempted to submit a proof";
    },
    {
      code: 6072;
      name: "InvalidGovernancePidError";
      msg: "Invalid SPLGovernance Account Supplied";
    },
    {
      code: 6073;
      name: "InvalidGovernanceAccountError";
      msg: "An Invalid Governance Account was supplied";
    },
    {
      code: 6074;
      name: "MissingOptionalAccount";
      msg: "Expected an optional account";
    },
    {
      code: 6075;
      name: "InvalidSpawnRecordOwner";
      msg: "Invalid Owner for Spawn Record";
    },
    {
      code: 6076;
      name: "NoopError";
      msg: "Noop error";
    },
    {
      code: 6077;
      name: "MissingRequiredAccountsError";
      msg: "A required instruction account was not included";
    },
    {
      code: 6078;
      name: "InvalidMintError";
      msg: "Invalid mint account passed for instruction";
    },
    {
      code: 6079;
      name: "InvalidTokenAccountKeyError";
      msg: "An invalid token account was passed into the instruction";
    },
    {
      code: 6080;
      name: "InvalidJobAccountError";
      msg: "";
    },
    {
      code: 6081;
      name: "VoterStakeRegistryError";
      msg: "";
    },
    {
      code: 6082;
      name: "AccountDiscriminatorMismatch";
      msg: "Account discriminator did not match.";
    },
    {
      code: 6083;
      name: "FuckingImpossibleError";
      msg: "This error is fucking impossible.";
    },
    {
      code: 6084;
      name: "InvalidVrfRound";
      msg: "Responding to the wrong VRF round";
    },
    {
      code: 6085;
      name: "JobSizeExceeded";
      msg: "Job size has exceeded the max of 6400 bytes";
    },
    {
      code: 6086;
      name: "JobChunksExceeded";
      msg: "Job loading can only support a maximum of 8 chunks";
    },
    {
      code: 6087;
      name: "JobDataLocked";
      msg: "Job has finished initializing and is immutable";
    },
    {
      code: 6088;
      name: "JobNotInitialized";
      msg: "Job account has not finished initializing";
    },
    {
      code: 6089;
      name: "BufferRelayerIllegalRoundOpenCall";
      msg: "BufferRelayer round open called too early.";
    },
    {
      code: 6090;
      name: "InvalidSliderAccount";
      msg: "Invalid slider account.";
    },
    {
      code: 6091;
      name: "VrfLiteHasExistingPool";
      msg: "VRF lite account belongs to an existing pool.";
    },
    {
      code: 6092;
      name: "VrfPoolFull";
      msg: "VRF pool is at max capacity.";
    },
    {
      code: 6093;
      name: "VrfPoolEmpty";
      msg: "VRF pool is empty.";
    },
    {
      code: 6094;
      name: "VrfAccountNotFound";
      msg: "Failed to find VRF account in remaining accounts array.";
    },
    {
      code: 6095;
      name: "AccountCloseNotReady";
      msg: "Account is not ready to be closed.";
    },
    {
      code: 6096;
      name: "VrfPoolRequestTooSoon";
      msg: "VRF requested too soon.";
    },
    {
      code: 6097;
      name: "VrfPoolMiss";
      msg: "VRF pool miss.";
    },
    {
      code: 6098;
      name: "VrfLiteOwnedByPool";
      msg: "VRF lite belongs to a pool.";
    },
    {
      code: 6099;
      name: "InsufficientTokenBalance";
      msg: "Escrow has insufficient funds to perform this action.";
    },
    {
      code: 6100;
      name: "InvalidQuoteError";
      msg: "Invalid SAS quote account";
    },
    {
      code: 6101;
      name: "InvalidHistoryAccountError";
      msg: "";
    },
    {
      code: 6102;
      name: "GenericError";
      msg: "";
    },
    {
      code: 6103;
      name: "InvalidAuthorityState";
      msg: "";
    }
  ];
};

export const IDL: SwitchboardV2 = {
  version: "0.1.0",
  name: "switchboard_v2",
  instructions: [
    {
      name: "aggregatorClose",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "solDest",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowDest",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "crank",
          isMut: true,
          isSigner: false,
          isOptional: true,
          docs: ["Optional accounts"],
        },
        {
          name: "dataBuffer",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
        {
          name: "slidingWindow",
          isMut: true,
          isSigner: false,
          isOptional: true,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorCloseParams",
          },
        },
      ],
    },
    {
      name: "setBumps",
      accounts: [
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "SetBumpsParams",
          },
        },
      ],
    },
    {
      name: "aggregatorAddJob",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "job",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorAddJobParams",
          },
        },
      ],
    },
    {
      name: "aggregatorInit",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorInitParams",
          },
        },
      ],
    },
    {
      name: "aggregatorLock",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorLockParams",
          },
        },
      ],
    },
    {
      name: "aggregatorOpenRound",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payoutWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorOpenRoundParams",
          },
        },
      ],
    },
    {
      name: "aggregatorRemoveJob",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "job",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorRemoveJobParams",
          },
        },
      ],
    },
    {
      name: "aggregatorSaveResult",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "oracleQueue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "feedPermission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oraclePermission",
          isMut: false,
          isSigner: false,
        },
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "historyBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorSaveResultParams",
          },
        },
      ],
    },
    {
      name: "aggregatorSaveResultV2",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "oracleQueue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "feedPermission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oraclePermission",
          isMut: false,
          isSigner: false,
        },
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "historyBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorSaveResultParams",
          },
        },
      ],
    },
    {
      name: "aggregatorTeeSaveResult",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "oracleQueue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "feedPermission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oraclePermission",
          isMut: false,
          isSigner: false,
        },
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "historyBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "slider",
          isMut: true,
          isSigner: false,
        },
        {
          name: "quote",
          isMut: false,
          isSigner: true,
        },
        {
          name: "rewardWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorTeeSaveResultParams",
          },
        },
      ],
    },
    {
      name: "aggregatorSetAuthority",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "newAuthority",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorSetAuthorityParams",
          },
        },
      ],
    },
    {
      name: "aggregatorSetConfig",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorSetConfigParams",
          },
        },
      ],
    },
    {
      name: "aggregatorSetResolutionMode",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "slidingWindow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorSetResolutionModeParams",
          },
        },
      ],
    },
    {
      name: "aggregatorSetHistoryBuffer",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "buffer",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorSetHistoryBufferParams",
          },
        },
      ],
    },
    {
      name: "aggregatorSetQueue",
      accounts: [
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "AggregatorSetQueueParams",
          },
        },
      ],
    },
    {
      name: "bufferRelayerInit",
      accounts: [
        {
          name: "bufferRelayer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "job",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "BufferRelayerInitParams",
          },
        },
      ],
    },
    {
      name: "bufferRelayerOpenRound",
      accounts: [
        {
          name: "bufferRelayer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "BufferRelayerOpenRoundParams",
          },
        },
      ],
    },
    {
      name: "bufferRelayerSaveResult",
      accounts: [
        {
          name: "bufferRelayer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "BufferRelayerSaveResultParams",
          },
        },
      ],
    },
    {
      name: "crankInit",
      accounts: [
        {
          name: "crank",
          isMut: true,
          isSigner: true,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "buffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CrankInitParams",
          },
        },
      ],
    },
    {
      name: "crankPop",
      accounts: [
        {
          name: "crank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payoutWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "crankDataBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueDataBuffer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CrankPopParams",
          },
        },
      ],
    },
    {
      name: "crankPopV2",
      accounts: [
        {
          name: "crank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payoutWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "crankDataBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueDataBuffer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CrankPopParamsV2",
          },
        },
      ],
    },
    {
      name: "crankPush",
      accounts: [
        {
          name: "crank",
          isMut: true,
          isSigner: false,
        },
        {
          name: "aggregator",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: false,
          isSigner: false,
        },
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "CrankPushParams",
          },
        },
      ],
    },
    {
      name: "jobInit",
      accounts: [
        {
          name: "job",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "JobInitParams",
          },
        },
      ],
    },
    {
      name: "jobSetData",
      accounts: [
        {
          name: "job",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "JobSetDataParams",
          },
        },
      ],
    },
    {
      name: "leaseExtend",
      accounts: [
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "aggregator",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "funder",
          isMut: true,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "LeaseExtendParams",
          },
        },
      ],
    },
    {
      name: "leaseInit",
      accounts: [
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "aggregator",
          isMut: false,
          isSigner: false,
        },
        {
          name: "funder",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "owner",
          isMut: true,
          isSigner: true,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "LeaseInitParams",
          },
        },
      ],
    },
    {
      name: "leaseSetAuthority",
      accounts: [
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "newAuthority",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "LeaseSetAuthorityParams",
          },
        },
      ],
    },
    {
      name: "leaseWithdraw",
      accounts: [
        {
          name: "lease",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "aggregator",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "withdrawAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "withdrawAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "LeaseWithdrawParams",
          },
        },
      ],
    },
    {
      name: "oracleHeartbeat",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "gcOracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "OracleHeartbeatParams",
          },
        },
      ],
    },
    {
      name: "oracleTeeHeartbeat",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenAccount",
          isMut: false,
          isSigner: false,
        },
        {
          name: "gcOracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "quote",
          isMut: false,
          isSigner: true,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "OracleTeeHeartbeatParams",
          },
        },
      ],
    },
    {
      name: "oracleInit",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "wallet",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "OracleInitParams",
          },
        },
      ],
    },
    {
      name: "oracleQueueInit",
      accounts: [
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: true,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "buffer",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "OracleQueueInitParams",
          },
        },
      ],
    },
    {
      name: "oracleQueueSetConfig",
      accounts: [
        {
          name: "queue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "OracleQueueSetConfigParams",
          },
        },
      ],
    },
    {
      name: "oracleWithdraw",
      accounts: [
        {
          name: "oracle",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "tokenAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "withdrawAccount",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "OracleWithdrawParams",
          },
        },
      ],
    },
    {
      name: "permissionInit",
      accounts: [
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "granter",
          isMut: false,
          isSigner: false,
        },
        {
          name: "grantee",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "PermissionInitParams",
          },
        },
      ],
    },
    {
      name: "permissionSet",
      accounts: [
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "PermissionSetParams",
          },
        },
      ],
    },
    {
      name: "programConfig",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "programState",
          isMut: true,
          isSigner: false,
        },
        {
          name: "daoMint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ProgramConfigParams",
          },
        },
      ],
    },
    {
      name: "programInit",
      accounts: [
        {
          name: "state",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenMint",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "daoMint",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "ProgramInitParams",
          },
        },
      ],
    },
    {
      name: "vaultTransfer",
      accounts: [
        {
          name: "state",
          isMut: false,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "to",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vault",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VaultTransferParams",
          },
        },
      ],
    },
    {
      name: "vrfInit",
      accounts: [
        {
          name: "vrf",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfInitParams",
          },
        },
      ],
    },
    {
      name: "vrfCloseAction",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vrf",
          isMut: true,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "solDest",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowDest",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfCloseParams",
          },
        },
      ],
    },
    {
      name: "vrfLiteCloseAction",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vrfLite",
          isMut: true,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "solDest",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrowDest",
          isMut: true,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfLiteCloseParams",
          },
        },
      ],
    },
    {
      name: "vrfLiteInit",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vrf",
          isMut: true,
          isSigner: true,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfLiteInitParams",
          },
        },
      ],
    },
    {
      name: "vrfLiteProveAndVerify",
      accounts: [
        {
          name: "vrfLite",
          isMut: true,
          isSigner: false,
        },
        {
          name: "callbackPid",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "oracleWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "instructionsSysvar",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfLiteProveAndVerifyParams",
          },
        },
      ],
    },
    {
      name: "vrfLiteRequestRandomness",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vrfLite",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "recentBlockhashes",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfLiteRequestRandomnessParams",
          },
        },
      ],
    },
    {
      name: "vrfPoolInit",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vrfPool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "payer",
          isMut: true,
          isSigner: true,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "associatedTokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "systemProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "rent",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfPoolInitParams",
          },
        },
      ],
    },
    {
      name: "vrfPoolRemove",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vrfPool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfPoolRemoveParams",
          },
        },
      ],
    },
    {
      name: "vrfPoolAdd",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "vrfPool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "vrfLite",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: false,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfPoolAddParams",
          },
        },
      ],
    },
    {
      name: "vrfPoolRequest",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vrfPool",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "mint",
          isMut: false,
          isSigner: false,
        },
        {
          name: "queue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "recentBlockhashes",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfPoolRequestParams",
          },
        },
      ],
    },
    {
      name: "vrfProveAndVerify",
      accounts: [
        {
          name: "vrf",
          isMut: true,
          isSigner: false,
        },
        {
          name: "callbackPid",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracle",
          isMut: false,
          isSigner: false,
        },
        {
          name: "oracleAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "oracleWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "instructionsSysvar",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfProveAndVerifyParams",
          },
        },
      ],
    },
    {
      name: "vrfRequestRandomness",
      accounts: [
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "vrf",
          isMut: true,
          isSigner: false,
        },
        {
          name: "oracleQueue",
          isMut: true,
          isSigner: false,
        },
        {
          name: "queueAuthority",
          isMut: false,
          isSigner: false,
        },
        {
          name: "dataBuffer",
          isMut: false,
          isSigner: false,
        },
        {
          name: "permission",
          isMut: true,
          isSigner: false,
        },
        {
          name: "escrow",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payerWallet",
          isMut: true,
          isSigner: false,
        },
        {
          name: "payerAuthority",
          isMut: false,
          isSigner: true,
        },
        {
          name: "recentBlockhashes",
          isMut: false,
          isSigner: false,
        },
        {
          name: "programState",
          isMut: false,
          isSigner: false,
        },
        {
          name: "tokenProgram",
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfRequestRandomnessParams",
          },
        },
      ],
    },
    {
      name: "vrfSetCallback",
      accounts: [
        {
          name: "vrf",
          isMut: true,
          isSigner: false,
        },
        {
          name: "authority",
          isMut: false,
          isSigner: true,
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: "VrfSetCallbackParams",
          },
        },
      ],
    },
  ],
  accounts: [
    {
      name: "sbState",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            docs: ["The account authority permitted to make account changes."],
            type: "publicKey",
          },
          {
            name: "tokenMint",
            docs: [
              "The token mint used for oracle rewards, aggregator leases, and other reward incentives.",
            ],
            type: "publicKey",
          },
          {
            name: "tokenVault",
            docs: ["Token vault used by the program to receive kickbacks."],
            type: "publicKey",
          },
          {
            name: "daoMint",
            docs: ["The token mint used by the DAO."],
            type: "publicKey",
          },
          {
            name: "bump",
            docs: ["The PDA bump to derive the pubkey."],
            type: "u8",
          },
          {
            name: "mrEnclaves",
            docs: ["Permitted enclave measurements"],
            type: {
              array: [
                {
                  array: ["u8", 32],
                },
                6,
              ],
            },
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 799],
            },
          },
        ],
      },
    },
    {
      name: "taskSpecRecord",
      type: {
        kind: "struct",
        fields: [
          {
            name: "hash",
            type: {
              defined: "Hash",
            },
          },
        ],
      },
    },
    {
      name: "aggregatorAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            docs: ["Name of the aggregator to store on-chain."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "metadata",
            docs: ["Metadata of the aggregator to store on-chain."],
            type: {
              array: ["u8", 128],
            },
          },
          {
            name: "reserved1",
            docs: ["Reserved."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "queuePubkey",
            docs: ["Pubkey of the queue the aggregator belongs to."],
            type: "publicKey",
          },
          {
            name: "oracleRequestBatchSize",
            docs: [
              "CONFIGS",
              "Number of oracles assigned to an update request.",
            ],
            type: "u32",
          },
          {
            name: "minOracleResults",
            docs: [
              "Minimum number of oracle responses required before a round is validated.",
            ],
            type: "u32",
          },
          {
            name: "minJobResults",
            docs: [
              "Minimum number of job results before an oracle accepts a result.",
            ],
            type: "u32",
          },
          {
            name: "minUpdateDelaySeconds",
            docs: [
              "Minimum number of seconds required between aggregator rounds.",
            ],
            type: "u32",
          },
          {
            name: "startAfter",
            docs: [
              "Unix timestamp for which no feed update will occur before.",
            ],
            type: "i64",
          },
          {
            name: "varianceThreshold",
            docs: [
              "Change percentage required between a previous round and the current round. If variance percentage is not met, reject new oracle responses.",
            ],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "forceReportPeriod",
            docs: [
              "Number of seconds for which, even if the variance threshold is not passed, accept new responses from oracles.",
            ],
            type: "i64",
          },
          {
            name: "expiration",
            docs: ["Timestamp when the feed is no longer needed."],
            type: "i64",
          },
          {
            name: "consecutiveFailureCount",
            docs: [
              "Counter for the number of consecutive failures before a feed is removed from a queue. If set to 0, failed feeds will remain on the queue.",
            ],
            type: "u64",
          },
          {
            name: "nextAllowedUpdateTime",
            docs: ["Timestamp when the next update request will be available."],
            type: "i64",
          },
          {
            name: "isLocked",
            docs: [
              "Flag for whether an aggregators configuration is locked for editing.",
            ],
            type: "bool",
          },
          {
            name: "crankPubkey",
            docs: [
              "Optional, public key of the crank the aggregator is currently using. Event based feeds do not need a crank.",
            ],
            type: "publicKey",
          },
          {
            name: "latestConfirmedRound",
            docs: [
              "Latest confirmed update request result that has been accepted as valid.",
            ],
            type: {
              defined: "AggregatorRound",
            },
          },
          {
            name: "currentRound",
            docs: [
              "Oracle results from the current round of update request that has not been accepted as valid yet.",
            ],
            type: {
              defined: "AggregatorRound",
            },
          },
          {
            name: "jobPubkeysData",
            docs: [
              "List of public keys containing the job definitions for how data is sourced off-chain by oracles.",
            ],
            type: {
              array: ["publicKey", 16],
            },
          },
          {
            name: "jobHashes",
            docs: [
              "Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment.",
            ],
            type: {
              array: [
                {
                  defined: "Hash",
                },
                16,
              ],
            },
          },
          {
            name: "jobPubkeysSize",
            docs: ["Number of jobs assigned to an oracle."],
            type: "u32",
          },
          {
            name: "jobsChecksum",
            docs: [
              "Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment.",
            ],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "authority",
            docs: [
              "The account delegated as the authority for making account changes.",
            ],
            type: "publicKey",
          },
          {
            name: "historyBuffer",
            docs: [
              "Optional, public key of a history buffer account storing the last N accepted results and their timestamps.",
            ],
            type: "publicKey",
          },
          {
            name: "previousConfirmedRoundResult",
            docs: ["The previous confirmed round result."],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "previousConfirmedRoundSlot",
            docs: ["The slot when the previous confirmed round was opened."],
            type: "u64",
          },
          {
            name: "disableCrank",
            docs: ["Whether an aggregator is permitted to join a crank."],
            type: "bool",
          },
          {
            name: "jobWeights",
            docs: [
              "Job weights used for the weighted median of the aggregator's assigned job accounts.",
            ],
            type: {
              array: ["u8", 16],
            },
          },
          {
            name: "creationTimestamp",
            docs: ["Unix timestamp when the feed was created."],
            type: "i64",
          },
          {
            name: "resolutionMode",
            docs: [
              "Use sliding window or round based resolution",
              "NOTE: This changes result propogation in latest_round_result",
            ],
            type: {
              defined: "AggregatorResolutionMode",
            },
          },
          {
            name: "basePriorityFee",
            type: "u32",
          },
          {
            name: "priorityFeeBump",
            type: "u32",
          },
          {
            name: "priorityFeeBumpPeriod",
            type: "u32",
          },
          {
            name: "maxPriorityFeeMultiplier",
            type: "u32",
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 122],
            },
          },
        ],
      },
    },
    {
      name: "slidingResultAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "data",
            type: {
              array: [
                {
                  defined: "SlidingWindowElement",
                },
                16,
              ],
            },
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "ebuf",
            type: {
              array: ["u8", 512],
            },
          },
        ],
      },
    },
    {
      name: "permissionAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            docs: [
              "The authority that is allowed to set permissions for this account.",
            ],
            type: "publicKey",
          },
          {
            name: "permissions",
            docs: [
              "The SwitchboardPermission enumeration assigned by the granter to the grantee.",
            ],
            type: "u32",
          },
          {
            name: "granter",
            docs: [
              "Public key of account that is granting permissions to use its resources.",
            ],
            type: "publicKey",
          },
          {
            name: "grantee",
            docs: [
              "Public key of account that is being assigned permissions to use a granters resources.",
            ],
            type: "publicKey",
          },
          {
            name: "expiration",
            docs: [
              "unused currently. may want permission PDA per permission for",
              "unique expiration periods, BUT currently only one permission",
              "per account makes sense for the infra. Dont over engineer.",
            ],
            type: "i64",
          },
          {
            name: "bump",
            docs: ["The PDA bump to derive the pubkey."],
            type: "u8",
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 255],
            },
          },
        ],
      },
    },
    {
      name: "realmSpawnRecordAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "ebuf",
            type: {
              array: ["u8", 256],
            },
          },
        ],
      },
    },
    {
      name: "leaseAccountData",
      docs: ["This should be any ccount that links a permission to an escrow"],
      type: {
        kind: "struct",
        fields: [
          {
            name: "escrow",
            docs: [
              "Public key of the token account holding the lease contract funds until rewarded to oracles for successfully processing updates",
            ],
            type: "publicKey",
          },
          {
            name: "queue",
            docs: [
              "Public key of the oracle queue that the lease contract is applicable for.",
            ],
            type: "publicKey",
          },
          {
            name: "aggregator",
            docs: [
              "Public key of the aggregator that the lease contract is applicable for",
            ],
            type: "publicKey",
          },
          {
            name: "tokenProgram",
            docs: ["Public key of the Solana token program ID."],
            type: "publicKey",
          },
          {
            name: "isActive",
            docs: ["Whether the lease contract is still active."],
            type: "bool",
          },
          {
            name: "crankRowCount",
            docs: ["Index of an aggregators position on a crank."],
            type: "u32",
          },
          {
            name: "createdAt",
            docs: ["Timestamp when the lease contract was created."],
            type: "i64",
          },
          {
            name: "updateCount",
            docs: [
              "Counter keeping track of the number of updates for the given aggregator.",
            ],
            type: "u128",
          },
          {
            name: "withdrawAuthority",
            docs: [
              "Public key of keypair that may withdraw funds from the lease at any time",
            ],
            type: "publicKey",
          },
          {
            name: "bump",
            docs: ["The PDA bump to derive the pubkey."],
            type: "u8",
          },
          {
            name: "ebuf",
            type: {
              array: ["u8", 255],
            },
          },
        ],
      },
    },
    {
      name: "oracleQueueAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            docs: ["Name of the queue to store on-chain."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "metadata",
            docs: ["Metadata of the queue to store on-chain."],
            type: {
              array: ["u8", 64],
            },
          },
          {
            name: "authority",
            docs: [
              "The account delegated as the authority for making account changes or assigning permissions targeted at the queue.",
            ],
            type: "publicKey",
          },
          {
            name: "oracleTimeout",
            docs: [
              "Interval when stale oracles will be removed if they fail to heartbeat.",
            ],
            type: "u32",
          },
          {
            name: "reward",
            docs: [
              "Rewards to provide oracles and round openers on this queue.",
            ],
            type: "u64",
          },
          {
            name: "minStake",
            docs: [
              "The minimum amount of stake oracles must present to remain on the queue.",
            ],
            type: "u64",
          },
          {
            name: "slashingEnabled",
            docs: ["Whether slashing is enabled on this queue."],
            type: "bool",
          },
          {
            name: "varianceToleranceMultiplier",
            docs: [
              "The tolerated variance amount oracle results can have from the accepted round result before being slashed.",
              "slashBound = varianceToleranceMultiplier * stdDeviation Default: 2",
            ],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "feedProbationPeriod",
            docs: [
              "Number of update rounds new feeds are on probation for.",
              "If a feed returns 429s within probation period, auto disable permissions.",
            ],
            type: "u32",
          },
          {
            name: "currIdx",
            docs: ["Current index of the oracle rotation."],
            type: "u32",
          },
          {
            name: "size",
            docs: ["Current number of oracles on a queue."],
            type: "u32",
          },
          {
            name: "gcIdx",
            docs: ["Garbage collection index."],
            type: "u32",
          },
          {
            name: "consecutiveFeedFailureLimit",
            docs: [
              "Consecutive failure limit for a feed before feed permission is revoked.",
            ],
            type: "u64",
          },
          {
            name: "consecutiveOracleFailureLimit",
            docs: [
              "Consecutive failure limit for an oracle before oracle permission is revoked.",
            ],
            type: "u64",
          },
          {
            name: "unpermissionedFeedsEnabled",
            docs: [
              "Enabling this setting means data feeds do not need explicit permission to join the queue and request new values from its oracles.",
            ],
            type: "bool",
          },
          {
            name: "unpermissionedVrfEnabled",
            docs: [
              "Enabling this setting means VRF accounts do not need explicit permission to join the queue and request new values from its oracles.",
            ],
            type: "bool",
          },
          {
            name: "curatorRewardCut",
            docs: [
              "TODO: Revenue percentage rewarded to job curators overall.",
            ],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "lockLeaseFunding",
            docs: [
              "Prevent new leases from being funded n this queue.",
              "Useful to turn down a queue for migrations, since authority is always immutable.",
            ],
            type: "bool",
          },
          {
            name: "mint",
            docs: [
              "Token mint used for the oracle queue rewards and slashing.",
            ],
            type: "publicKey",
          },
          {
            name: "enableBufferRelayers",
            docs: [
              "Whether oracles are permitted to fulfill buffer relayer update request.",
            ],
            type: "bool",
          },
          {
            name: "enableTeeOnly",
            type: "bool",
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 967],
            },
          },
          {
            name: "maxSize",
            docs: ["Maximum number of oracles a queue can support."],
            type: "u32",
          },
          {
            name: "dataBuffer",
            docs: [
              "The public key of the OracleQueueBuffer account holding a collection of Oracle pubkeys that haver successfully heartbeated before the queues `oracleTimeout`.",
            ],
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "crankAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            docs: ["Name of the crank to store on-chain."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "metadata",
            docs: ["Metadata of the crank to store on-chain."],
            type: {
              array: ["u8", 64],
            },
          },
          {
            name: "queuePubkey",
            docs: ["Public key of the oracle queue who owns the crank."],
            type: "publicKey",
          },
          {
            name: "pqSize",
            docs: ["Number of aggregators added to the crank."],
            type: "u32",
          },
          {
            name: "maxRows",
            docs: [
              "Maximum number of aggregators allowed to be added to a crank.",
            ],
            type: "u32",
          },
          {
            name: "jitterModifier",
            docs: ["Pseudorandom value added to next aggregator update time."],
            type: "u8",
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 255],
            },
          },
          {
            name: "dataBuffer",
            docs: [
              "The public key of the CrankBuffer account holding a collection of Aggregator pubkeys and their next allowed update time.",
            ],
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "oracleAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            docs: ["Name of the oracle to store on-chain."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "metadata",
            docs: ["Metadata of the oracle to store on-chain."],
            type: {
              array: ["u8", 128],
            },
          },
          {
            name: "oracleAuthority",
            docs: [
              "The account delegated as the authority for making account changes or withdrawing funds from a staking wallet.",
            ],
            type: "publicKey",
          },
          {
            name: "lastHeartbeat",
            docs: ["Unix timestamp when the oracle last heartbeated"],
            type: "i64",
          },
          {
            name: "numInUse",
            docs: [
              "Flag dictating if an oracle is active and has heartbeated before the queue's oracle timeout parameter.",
            ],
            type: "u32",
          },
          {
            name: "tokenAccount",
            docs: ["Stake account and reward/slashing wallet."],
            type: "publicKey",
          },
          {
            name: "queuePubkey",
            docs: [
              "Public key of the oracle queue who has granted it permission to use its resources.",
            ],
            type: "publicKey",
          },
          {
            name: "metrics",
            docs: ["Oracle track record."],
            type: {
              defined: "OracleMetrics",
            },
          },
          {
            name: "bump",
            docs: ["The PDA bump to derive the pubkey."],
            type: "u8",
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 255],
            },
          },
        ],
      },
    },
    {
      name: "jobAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            docs: ["Name of the job to store on-chain."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "metadata",
            docs: ["Metadata of the job to store on-chain."],
            type: {
              array: ["u8", 64],
            },
          },
          {
            name: "authority",
            docs: [
              "The account delegated as the authority for making account changes.",
            ],
            type: "publicKey",
          },
          {
            name: "expiration",
            docs: ["Unix timestamp when the job is considered invalid"],
            type: "i64",
          },
          {
            name: "hash",
            docs: ["Hash of the serialized data to prevent tampering."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "data",
            docs: [
              "Serialized protobuf containing the collection of task to retrieve data off-chain.",
            ],
            type: "bytes",
          },
          {
            name: "referenceCount",
            docs: ["The number of data feeds referencing the job account.."],
            type: "u32",
          },
          {
            name: "totalSpent",
            docs: [
              "The token amount funded into a feed that contains this job account.",
            ],
            type: "u64",
          },
          {
            name: "createdAt",
            docs: ["Unix timestamp when the job was created on-chain."],
            type: "i64",
          },
          {
            name: "isInitializing",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "vrfAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "status",
            docs: ["The current status of the VRF account."],
            type: {
              defined: "VrfStatus",
            },
          },
          {
            name: "counter",
            docs: ["Incremental counter for tracking VRF rounds."],
            type: "u128",
          },
          {
            name: "authority",
            docs: ["On-chain account delegated for making account changes."],
            type: "publicKey",
          },
          {
            name: "oracleQueue",
            docs: [
              "The OracleQueueAccountData that is assigned to fulfill VRF update request.",
            ],
            type: "publicKey",
          },
          {
            name: "escrow",
            docs: [
              "The token account used to hold funds for VRF update request.",
            ],
            type: "publicKey",
          },
          {
            name: "callback",
            docs: [
              "The callback that is invoked when an update request is successfully verified.",
            ],
            type: {
              defined: "CallbackZC",
            },
          },
          {
            name: "batchSize",
            docs: ["The number of oracles assigned to a VRF update request."],
            type: "u32",
          },
          {
            name: "builders",
            docs: [
              "Struct containing the intermediate state between VRF crank actions.",
            ],
            type: {
              array: [
                {
                  defined: "VrfBuilder",
                },
                8,
              ],
            },
          },
          {
            name: "buildersLen",
            docs: ["The number of builders."],
            type: "u32",
          },
          {
            name: "testMode",
            type: "bool",
          },
          {
            name: "currentRound",
            docs: [
              "Oracle results from the current round of update request that has not been accepted as valid yet",
            ],
            type: {
              defined: "VrfRound",
            },
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 1024],
            },
          },
        ],
      },
    },
    {
      name: "vrfLiteAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            docs: ["The bump used to derive the SbState account."],
            type: "u8",
          },
          {
            name: "permissionBump",
            docs: ["The bump used to derive the permission account."],
            type: "u8",
          },
          {
            name: "vrfPool",
            docs: ["The VrfPool the account belongs to."],
            type: "publicKey",
          },
          {
            name: "status",
            docs: ["The current status of the VRF account."],
            type: {
              defined: "VrfStatus",
            },
          },
          {
            name: "result",
            docs: [
              "The VRF round result. Will be zeroized if still awaiting fulfillment.",
            ],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "counter",
            docs: ["Incremental counter for tracking VRF rounds."],
            type: "u128",
          },
          {
            name: "alpha",
            docs: ["The alpha bytes used to calculate the VRF proof."],
            type: {
              array: ["u8", 256],
            },
          },
          {
            name: "alphaLen",
            docs: ["The number of bytes in the alpha buffer."],
            type: "u32",
          },
          {
            name: "requestSlot",
            docs: ["The Slot when the VRF round was opened."],
            type: "u64",
          },
          {
            name: "requestTimestamp",
            docs: ["The unix timestamp when the VRF round was opened."],
            type: "i64",
          },
          {
            name: "authority",
            docs: ["On-chain account delegated for making account changes."],
            type: "publicKey",
          },
          {
            name: "queue",
            docs: [
              "The OracleQueueAccountData that is assigned to fulfill VRF update request.",
            ],
            type: "publicKey",
          },
          {
            name: "escrow",
            docs: [
              "The token account used to hold funds for VRF update request.",
            ],
            type: "publicKey",
          },
          {
            name: "callback",
            docs: [
              "The callback that is invoked when an update request is successfully verified.",
            ],
            type: {
              defined: "CallbackZC",
            },
          },
          {
            name: "builder",
            docs: ["The incremental VRF proof calculation."],
            type: {
              defined: "VrfBuilder",
            },
          },
          {
            name: "expiration",
            type: "i64",
          },
          {
            name: "ebuf",
            type: {
              array: ["u8", 1024],
            },
          },
        ],
      },
    },
    {
      name: "vrfPoolAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            docs: ["ACCOUNTS"],
            type: "publicKey",
          },
          {
            name: "queue",
            type: "publicKey",
          },
          {
            name: "escrow",
            type: "publicKey",
          },
          {
            name: "minInterval",
            type: "u32",
          },
          {
            name: "maxRows",
            type: "u32",
          },
          {
            name: "size",
            type: "u32",
          },
          {
            name: "idx",
            type: "u32",
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "ebuf",
            type: {
              array: ["u8", 135],
            },
          },
        ],
      },
    },
    {
      name: "bufferRelayerAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            docs: ["Name of the buffer account to store on-chain."],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "queuePubkey",
            docs: [
              "Public key of the OracleQueueAccountData that is currently assigned to fulfill buffer relayer update request.",
            ],
            type: "publicKey",
          },
          {
            name: "escrow",
            docs: [
              "Token account to reward oracles for completing update request.",
            ],
            type: "publicKey",
          },
          {
            name: "authority",
            docs: [
              "The account delegated as the authority for making account changes.",
            ],
            type: "publicKey",
          },
          {
            name: "jobPubkey",
            docs: [
              "Public key of the JobAccountData that defines how the buffer relayer is updated.",
            ],
            type: "publicKey",
          },
          {
            name: "jobHash",
            docs: [
              "Used to protect against malicious RPC nodes providing incorrect task definitions to oracles before fulfillment",
            ],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "minUpdateDelaySeconds",
            docs: ["Minimum delay between update request."],
            type: "u32",
          },
          {
            name: "isLocked",
            docs: [
              "Whether buffer relayer config is locked for further changes.",
            ],
            type: "bool",
          },
          {
            name: "currentRound",
            docs: [
              "The current buffer relayer update round that is yet to be confirmed.",
            ],
            type: {
              defined: "BufferRelayerRound",
            },
          },
          {
            name: "latestConfirmedRound",
            docs: ["The latest confirmed buffer relayer update round."],
            type: {
              defined: "BufferRelayerRound",
            },
          },
          {
            name: "result",
            docs: ["The buffer holding the latest confirmed result."],
            type: "bytes",
          },
        ],
      },
    },
  ],
  types: [
    {
      name: "AggregatorAddJobParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "weight",
            type: {
              option: "u8",
            },
          },
        ],
      },
    },
    {
      name: "AggregatorCloseParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "permissionBump",
            type: "u8",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "AggregatorInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "metadata",
            type: {
              array: ["u8", 128],
            },
          },
          {
            name: "batchSize",
            type: "u32",
          },
          {
            name: "minOracleResults",
            type: "u32",
          },
          {
            name: "minJobResults",
            type: "u32",
          },
          {
            name: "minUpdateDelaySeconds",
            type: "u32",
          },
          {
            name: "startAfter",
            type: "i64",
          },
          {
            name: "varianceThreshold",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "forceReportPeriod",
            type: "i64",
          },
          {
            name: "expiration",
            type: "i64",
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "disableCrank",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "AggregatorLockParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "AggregatorOpenRoundParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
          {
            name: "permissionBump",
            type: "u8",
          },
          {
            name: "jitter",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "AggregatorRemoveJobParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "jobIdx",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "AggregatorSaveResultParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "oracleIdx",
            type: "u32",
          },
          {
            name: "error",
            type: "bool",
          },
          {
            name: "value",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "jobsChecksum",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "minResponse",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "maxResponse",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "feedPermissionBump",
            type: "u8",
          },
          {
            name: "oraclePermissionBump",
            type: "u8",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "AggregatorSaveResultParamsV2",
      type: {
        kind: "struct",
        fields: [
          {
            name: "oracleIdx",
            type: "u32",
          },
          {
            name: "error",
            type: "bool",
          },
          {
            name: "value",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "jobsChecksum",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "minResponse",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "maxResponse",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "feedPermissionBump",
            type: "u8",
          },
          {
            name: "oraclePermissionBump",
            type: "u8",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "jobValues",
            type: {
              vec: {
                option: {
                  defined: "BorshDecimal",
                },
              },
            },
          },
        ],
      },
    },
    {
      name: "AggregatorSetAuthorityParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "AggregatorSetBatchSizeParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "batchSize",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "AggregatorSetConfigParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: {
              option: {
                array: ["u8", 32],
              },
            },
          },
          {
            name: "metadata",
            type: {
              option: {
                array: ["u8", 128],
              },
            },
          },
          {
            name: "minUpdateDelaySeconds",
            type: {
              option: "u32",
            },
          },
          {
            name: "minJobResults",
            type: {
              option: "u32",
            },
          },
          {
            name: "batchSize",
            type: {
              option: "u32",
            },
          },
          {
            name: "minOracleResults",
            type: {
              option: "u32",
            },
          },
          {
            name: "forceReportPeriod",
            type: {
              option: "u32",
            },
          },
          {
            name: "varianceThreshold",
            type: {
              option: {
                defined: "BorshDecimal",
              },
            },
          },
          {
            name: "basePriorityFee",
            type: {
              option: "u32",
            },
          },
          {
            name: "priorityFeeBump",
            type: {
              option: "u32",
            },
          },
          {
            name: "priorityFeeBumpPeriod",
            type: {
              option: "u32",
            },
          },
          {
            name: "maxPriorityFeeMultiplier",
            type: {
              option: "u32",
            },
          },
          {
            name: "disableCrank",
            type: {
              option: "bool",
            },
          },
        ],
      },
    },
    {
      name: "AggregatorSetForceReportPeriodParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "forceReportPeriod",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "AggregatorSetHistoryBufferParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "AggregatorSetMinJobsParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "minJobResults",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "AggregatorSetMinOraclesParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "minOracleResults",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "AggregatorSetQueueParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "AggregatorSetResolutionModeParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "mode",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "AggregatorSetUpdateIntervalParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "newInterval",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "AggregatorSetVarianceThresholdParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "varianceThreshold",
            type: {
              defined: "BorshDecimal",
            },
          },
        ],
      },
    },
    {
      name: "AggregatorTeeSaveResultParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "value",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "jobsChecksum",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "minResponse",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "maxResponse",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "feedPermissionBump",
            type: "u8",
          },
          {
            name: "oraclePermissionBump",
            type: "u8",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "BufferRelayerInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "minUpdateDelaySeconds",
            type: "u32",
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "BufferRelayerOpenRoundParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "permissionBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "BufferRelayerSaveResultParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "permissionBump",
            type: "u8",
          },
          {
            name: "result",
            type: "bytes",
          },
          {
            name: "success",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "CrankInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "bytes",
          },
          {
            name: "metadata",
            type: "bytes",
          },
          {
            name: "crankSize",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "CrankPopParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "leaseBumps",
            type: "bytes",
          },
          {
            name: "permissionBumps",
            type: "bytes",
          },
          {
            name: "nonce",
            type: {
              option: "u32",
            },
          },
          {
            name: "failOpenOnAccountMismatch",
            type: {
              option: "bool",
            },
          },
        ],
      },
    },
    {
      name: "CrankPopParamsV2",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "leaseBumps",
            type: "bytes",
          },
          {
            name: "permissionBumps",
            type: "bytes",
          },
          {
            name: "nonce",
            type: {
              option: "u32",
            },
          },
          {
            name: "failOpenOnAccountMismatch",
            type: {
              option: "bool",
            },
          },
          {
            name: "popIdx",
            type: {
              option: "u32",
            },
          },
        ],
      },
    },
    {
      name: "CrankPushParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "permissionBump",
            type: "u8",
          },
          {
            name: "notifiRef",
            type: {
              option: {
                array: ["u8", 64],
              },
            },
          },
        ],
      },
    },
    {
      name: "JobInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "expiration",
            type: "i64",
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "data",
            type: "bytes",
          },
          {
            name: "size",
            type: {
              option: "u32",
            },
          },
        ],
      },
    },
    {
      name: "JobSetDataParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "data",
            type: "bytes",
          },
          {
            name: "chunkIdx",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "LeaseExtendParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "loadAmount",
            type: "u64",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "walletBumps",
            type: "bytes",
          },
        ],
      },
    },
    {
      name: "LeaseInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "loadAmount",
            type: "u64",
          },
          {
            name: "withdrawAuthority",
            type: "publicKey",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "walletBumps",
            type: "bytes",
          },
        ],
      },
    },
    {
      name: "LeaseSetAuthorityParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "LeaseWithdrawParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "leaseBump",
            type: "u8",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "OracleHeartbeatParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "permissionBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "OracleInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: "bytes",
          },
          {
            name: "metadata",
            type: "bytes",
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "oracleBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "OracleQueueInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "metadata",
            type: {
              array: ["u8", 64],
            },
          },
          {
            name: "reward",
            type: "u64",
          },
          {
            name: "minStake",
            type: "u64",
          },
          {
            name: "feedProbationPeriod",
            type: "u32",
          },
          {
            name: "oracleTimeout",
            type: "u32",
          },
          {
            name: "slashingEnabled",
            type: "bool",
          },
          {
            name: "varianceToleranceMultiplier",
            type: {
              defined: "BorshDecimal",
            },
          },
          {
            name: "consecutiveFeedFailureLimit",
            type: "u64",
          },
          {
            name: "consecutiveOracleFailureLimit",
            type: "u64",
          },
          {
            name: "queueSize",
            type: "u32",
          },
          {
            name: "unpermissionedFeeds",
            type: "bool",
          },
          {
            name: "unpermissionedVrf",
            type: "bool",
          },
          {
            name: "enableBufferRelayers",
            type: "bool",
          },
          {
            name: "enableTeeOnly",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "OracleQueueSetConfigParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "name",
            type: {
              option: {
                array: ["u8", 32],
              },
            },
          },
          {
            name: "metadata",
            type: {
              option: {
                array: ["u8", 64],
              },
            },
          },
          {
            name: "unpermissionedFeedsEnabled",
            type: {
              option: "bool",
            },
          },
          {
            name: "unpermissionedVrfEnabled",
            type: {
              option: "bool",
            },
          },
          {
            name: "enableBufferRelayers",
            type: {
              option: "bool",
            },
          },
          {
            name: "varianceToleranceMultiplier",
            type: {
              option: {
                defined: "BorshDecimal",
              },
            },
          },
          {
            name: "slashingEnabled",
            type: {
              option: "bool",
            },
          },
          {
            name: "reward",
            type: {
              option: "u64",
            },
          },
          {
            name: "minStake",
            type: {
              option: "u64",
            },
          },
          {
            name: "oracleTimeout",
            type: {
              option: "u32",
            },
          },
          {
            name: "consecutiveFeedFailureLimit",
            type: {
              option: "u64",
            },
          },
          {
            name: "consecutiveOracleFailureLimit",
            type: {
              option: "u64",
            },
          },
          {
            name: "enableTeeOnly",
            type: {
              option: "bool",
            },
          },
        ],
      },
    },
    {
      name: "OracleQueueSetRewardsParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "rewards",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "OracleTeeHeartbeatParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "permissionBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "OracleWithdrawParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "permissionBump",
            type: "u8",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "PermissionInitParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "PermissionSetParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "permission",
            type: {
              defined: "SwitchboardPermission",
            },
          },
          {
            name: "enable",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "ProgramConfigParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "token",
            type: "publicKey",
          },
          {
            name: "bump",
            type: "u8",
          },
          {
            name: "daoMint",
            type: "publicKey",
          },
          {
            name: "addEnclaves",
            type: {
              vec: {
                array: ["u8", 32],
              },
            },
          },
          {
            name: "rmEnclaves",
            type: {
              vec: {
                array: ["u8", 32],
              },
            },
          },
        ],
      },
    },
    {
      name: "ProgramInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "SetBumpsParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VaultTransferParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "amount",
            type: "u64",
          },
        ],
      },
    },
    {
      name: "VrfCloseParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "permissionBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VrfInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "callback",
            type: {
              defined: "Callback",
            },
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VrfLiteCloseParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "VrfLiteInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "callback",
            type: {
              option: {
                defined: "Callback",
              },
            },
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "expiration",
            type: {
              option: "i64",
            },
          },
        ],
      },
    },
    {
      name: "VrfLiteProveAndVerifyParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "nonce",
            type: {
              option: "u32",
            },
          },
          {
            name: "proof",
            type: "bytes",
          },
          {
            name: "proofEncoded",
            type: "string",
          },
          {
            name: "counter",
            type: "u128",
          },
        ],
      },
    },
    {
      name: "VrfLiteRequestRandomnessParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "callback",
            type: {
              option: {
                defined: "Callback",
              },
            },
          },
        ],
      },
    },
    {
      name: "VrfPoolAddParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "VrfPoolInitParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "maxRows",
            type: "u32",
          },
          {
            name: "minInterval",
            type: "u32",
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VrfPoolRemoveParams",
      type: {
        kind: "struct",
        fields: [],
      },
    },
    {
      name: "VrfPoolRequestParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "callback",
            type: {
              option: {
                defined: "Callback",
              },
            },
          },
        ],
      },
    },
    {
      name: "VrfProveParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "proof",
            type: "bytes",
          },
          {
            name: "idx",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "VrfProveAndVerifyParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "nonce",
            type: {
              option: "u32",
            },
          },
          {
            name: "stateBump",
            type: "u8",
          },
          {
            name: "idx",
            type: "u32",
          },
          {
            name: "proof",
            type: "bytes",
          },
          {
            name: "proofEncoded",
            type: "string",
          },
          {
            name: "counter",
            type: "u128",
          },
        ],
      },
    },
    {
      name: "VrfRequestRandomnessParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "permissionBump",
            type: "u8",
          },
          {
            name: "stateBump",
            type: "u8",
          },
        ],
      },
    },
    {
      name: "VrfSetCallbackParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "callback",
            type: {
              defined: "Callback",
            },
          },
        ],
      },
    },
    {
      name: "Callback",
      type: {
        kind: "struct",
        fields: [
          {
            name: "programId",
            type: "publicKey",
          },
          {
            name: "accounts",
            type: {
              vec: {
                defined: "AccountMetaBorsh",
              },
            },
          },
          {
            name: "ixData",
            type: "bytes",
          },
        ],
      },
    },
    {
      name: "EcvrfProofZC",
      type: {
        kind: "struct",
        fields: [
          {
            name: "gamma",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "c",
            type: {
              defined: "Scalar",
            },
          },
          {
            name: "s",
            type: {
              defined: "Scalar",
            },
          },
        ],
      },
    },
    {
      name: "Scalar",
      docs: [
        "The `Scalar` struct holds an integer \\\\(s < 2\\^{255} \\\\) which",
        "represents an element of \\\\(\\mathbb Z / \\ell\\\\).",
      ],
      type: {
        kind: "struct",
        fields: [
          {
            name: "bytes",
            docs: [
              "`bytes` is a little-endian byte encoding of an integer representing a scalar modulo the",
              "group order.",
              "",
              "# Invariant",
              "",
              "The integer representing this scalar must be bounded above by \\\\(2\\^{255}\\\\), or",
              "equivalently the high bit of `bytes[31]` must be zero.",
              "",
              "This ensures that there is room for a carry bit when computing a NAF representation.",
            ],
            type: {
              array: ["u8", 32],
            },
          },
        ],
      },
    },
    {
      name: "FieldElementZC",
      type: {
        kind: "struct",
        fields: [
          {
            name: "bytes",
            type: {
              array: ["u64", 5],
            },
          },
        ],
      },
    },
    {
      name: "CompletedPointZC",
      type: {
        kind: "struct",
        fields: [
          {
            name: "x",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "y",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "z",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "t",
            type: {
              defined: "FieldElementZC",
            },
          },
        ],
      },
    },
    {
      name: "EdwardsPointZC",
      type: {
        kind: "struct",
        fields: [
          {
            name: "x",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "y",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "z",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "t",
            type: {
              defined: "FieldElementZC",
            },
          },
        ],
      },
    },
    {
      name: "ProjectivePointZC",
      type: {
        kind: "struct",
        fields: [
          {
            name: "x",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "y",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "z",
            type: {
              defined: "FieldElementZC",
            },
          },
        ],
      },
    },
    {
      name: "EcvrfIntermediate",
      type: {
        kind: "struct",
        fields: [
          {
            name: "r",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "nS",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "d",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "t13",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "t15",
            type: {
              defined: "FieldElementZC",
            },
          },
        ],
      },
    },
    {
      name: "BorshDecimal",
      type: {
        kind: "struct",
        fields: [
          {
            name: "mantissa",
            type: "i128",
          },
          {
            name: "scale",
            type: "u32",
          },
        ],
      },
    },
    {
      name: "Quote",
      type: {
        kind: "struct",
        fields: [
          {
            name: "enclaveSigner",
            docs: ["The address of the signer generated within an enclave."],
            type: "publicKey",
          },
          {
            name: "mrEnclave",
            docs: [
              "The quotes MRENCLAVE measurement dictating the contents of the secure enclave.",
            ],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "verificationStatus",
            docs: ["The VerificationStatus of the quote."],
            type: "u8",
          },
          {
            name: "verificationTimestamp",
            docs: ["The unix timestamp when the quote was last verified."],
            type: "i64",
          },
          {
            name: "validUntil",
            docs: [
              "The unix timestamp when the quotes verification status expires.",
            ],
            type: "i64",
          },
          {
            name: "quoteRegistry",
            docs: [
              "The off-chain registry where the verifiers quote can be located.",
            ],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "registryKey",
            docs: [
              "Key to lookup the buffer data on IPFS or an alternative decentralized storage solution.",
            ],
            type: {
              array: ["u8", 64],
            },
          },
          {
            name: "ebuf",
            docs: ["Reserved."],
            type: {
              array: ["u8", 256],
            },
          },
        ],
      },
    },
    {
      name: "VerifierAccountData",
      type: {
        kind: "struct",
        fields: [
          {
            name: "enclave",
            docs: ["Represents the state of the quote verifiers enclave."],
            type: {
              defined: "Quote",
            },
          },
          {
            name: "authority",
            docs: [
              "The authority of the EnclaveAccount which is permitted to make account changes.",
            ],
            type: "publicKey",
          },
          {
            name: "attestationQueue",
            docs: [
              "Queue used for attestation to verify a MRENCLAVE measurement.",
            ],
            type: "publicKey",
          },
          {
            name: "createdAt",
            docs: ["The unix timestamp when the quote was created."],
            type: "i64",
          },
          {
            name: "isOnQueue",
            docs: [
              "Whether the quote is located on the AttestationQueues buffer.",
            ],
            type: "bool",
          },
          {
            name: "lastHeartbeat",
            docs: ["The last time the quote heartbeated on-chain."],
            type: "i64",
          },
          {
            name: "rewardEscrow",
            docs: [
              "The SwitchboardWallet account containing the reward escrow for verifying quotes on-chain.",
              "We should set this whenever the operator changes so we dont need to pass another account and can verify with has_one.",
            ],
            type: "publicKey",
          },
          {
            name: "stakeWallet",
            docs: [
              "The SwitchboardWallet account containing the queues required min_stake.",
              "Needs to be separate from the reward_escrow. Allows easier 3rd party management of stake from rewards.",
            ],
            type: "publicKey",
          },
          {
            name: "ebuf",
            docs: ["Reserved."],
            type: {
              array: ["u8", 1024],
            },
          },
        ],
      },
    },
    {
      name: "Hash",
      type: {
        kind: "struct",
        fields: [
          {
            name: "data",
            docs: ["The bytes used to derive the hash."],
            type: {
              array: ["u8", 32],
            },
          },
        ],
      },
    },
    {
      name: "SlidingWindowElement",
      type: {
        kind: "struct",
        fields: [
          {
            name: "oracleKey",
            type: "publicKey",
          },
          {
            name: "value",
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "slot",
            type: "u64",
          },
          {
            name: "timestamp",
            type: "i64",
          },
        ],
      },
    },
    {
      name: "AggregatorRound",
      type: {
        kind: "struct",
        fields: [
          {
            name: "numSuccess",
            docs: [
              "Maintains the number of successful responses received from nodes.",
              "Nodes can submit one successful response per round.",
            ],
            type: "u32",
          },
          {
            name: "numError",
            docs: ["Number of error responses."],
            type: "u32",
          },
          {
            name: "isClosed",
            docs: ["Whether an update request round has ended."],
            type: "bool",
          },
          {
            name: "roundOpenSlot",
            docs: [
              "Maintains the `solana_program::clock::Slot` that the round was opened at.",
            ],
            type: "u64",
          },
          {
            name: "roundOpenTimestamp",
            docs: [
              "Maintains the `solana_program::clock::UnixTimestamp;` the round was opened at.",
            ],
            type: "i64",
          },
          {
            name: "result",
            docs: [
              "Maintains the current median of all successful round responses.",
            ],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "stdDeviation",
            docs: ["Standard deviation of the accepted results in the round."],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "minResponse",
            docs: ["Maintains the minimum node response this round."],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "maxResponse",
            docs: ["Maintains the maximum node response this round."],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
          {
            name: "oraclePubkeysData",
            docs: ["Pubkeys of the oracles fulfilling this round."],
            type: {
              array: ["publicKey", 16],
            },
          },
          {
            name: "mediansData",
            docs: [
              "Represents all successful node responses this round. `NaN` if empty.",
            ],
            type: {
              array: [
                {
                  defined: "SwitchboardDecimal",
                },
                16,
              ],
            },
          },
          {
            name: "currentPayout",
            docs: ["Current rewards/slashes oracles have received this round."],
            type: {
              array: ["i64", 16],
            },
          },
          {
            name: "mediansFulfilled",
            docs: ["Keep track of which responses are fulfilled here."],
            type: {
              array: ["bool", 16],
            },
          },
          {
            name: "errorsFulfilled",
            docs: ["Keeps track of which errors are fulfilled here."],
            type: {
              array: ["bool", 16],
            },
          },
        ],
      },
    },
    {
      name: "AggregatorHistoryRow",
      type: {
        kind: "struct",
        fields: [
          {
            name: "timestamp",
            docs: ["The timestamp of the sample."],
            type: "i64",
          },
          {
            name: "value",
            docs: ["The value of the sample."],
            type: {
              defined: "SwitchboardDecimal",
            },
          },
        ],
      },
    },
    {
      name: "SwitchboardDecimal",
      type: {
        kind: "struct",
        fields: [
          {
            name: "mantissa",
            docs: [
              "The part of a floating-point number that represents the significant digits of that number,",
              "and that is multiplied by the base, 10, raised to the power of scale to give the actual value of the number.",
            ],
            type: "i128",
          },
          {
            name: "scale",
            docs: [
              "The number of decimal places to move to the left to yield the actual value.",
            ],
            type: "u32",
          },
        ],
      },
    },
    {
      name: "CrankRow",
      type: {
        kind: "struct",
        fields: [
          {
            name: "pubkey",
            docs: ["The PublicKey of the AggregatorAccountData."],
            type: "publicKey",
          },
          {
            name: "nextTimestamp",
            docs: ["The aggregator's next available update time."],
            type: "i64",
          },
        ],
      },
    },
    {
      name: "OracleMetrics",
      type: {
        kind: "struct",
        fields: [
          {
            name: "consecutiveSuccess",
            docs: ["Number of consecutive successful update request."],
            type: "u64",
          },
          {
            name: "consecutiveError",
            docs: [
              "Number of consecutive update request that resulted in an error.",
            ],
            type: "u64",
          },
          {
            name: "consecutiveDisagreement",
            docs: [
              "Number of consecutive update request that resulted in a disagreement with the accepted median result.",
            ],
            type: "u64",
          },
          {
            name: "consecutiveLateResponse",
            docs: [
              "Number of consecutive update request that were posted on-chain late and not included in an accepted result.",
            ],
            type: "u64",
          },
          {
            name: "consecutiveFailure",
            docs: [
              "Number of consecutive update request that resulted in a failure.",
            ],
            type: "u64",
          },
          {
            name: "totalSuccess",
            docs: ["Total number of successful update request."],
            type: "u128",
          },
          {
            name: "totalError",
            docs: ["Total number of update request that resulted in an error."],
            type: "u128",
          },
          {
            name: "totalDisagreement",
            docs: [
              "Total number of update request that resulted in a disagreement with the accepted median result.",
            ],
            type: "u128",
          },
          {
            name: "totalLateResponse",
            docs: [
              "Total number of update request that were posted on-chain late and not included in an accepted result.",
            ],
            type: "u128",
          },
        ],
      },
    },
    {
      name: "VrfBuilder",
      type: {
        kind: "struct",
        fields: [
          {
            name: "producer",
            docs: ["The OracleAccountData that is producing the randomness."],
            type: "publicKey",
          },
          {
            name: "status",
            docs: ["The current status of the VRF verification."],
            type: {
              defined: "VrfStatus",
            },
          },
          {
            name: "reprProof",
            docs: ["The VRF proof sourced from the producer."],
            type: {
              array: ["u8", 80],
            },
          },
          {
            name: "proof",
            type: {
              defined: "EcvrfProofZC",
            },
          },
          {
            name: "yPoint",
            type: "publicKey",
          },
          {
            name: "stage",
            type: "u32",
          },
          {
            name: "stage1Out",
            type: {
              defined: "EcvrfIntermediate",
            },
          },
          {
            name: "r1",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "r2",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "stage3Out",
            type: {
              defined: "EcvrfIntermediate",
            },
          },
          {
            name: "hPoint",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "sReduced",
            type: {
              defined: "Scalar",
            },
          },
          {
            name: "yPointBuilder",
            type: {
              array: [
                {
                  defined: "FieldElementZC",
                },
                3,
              ],
            },
          },
          {
            name: "yRistrettoPoint",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "mulRound",
            type: "u8",
          },
          {
            name: "hashPointsRound",
            type: "u8",
          },
          {
            name: "mulTmp1",
            type: {
              defined: "CompletedPointZC",
            },
          },
          {
            name: "uPoint1",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "uPoint2",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "vPoint1",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "vPoint2",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "uPoint",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "vPoint",
            type: {
              defined: "EdwardsPointZC",
            },
          },
          {
            name: "u1",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "u2",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "invertee",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "y",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "z",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "p1Bytes",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "p2Bytes",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "p3Bytes",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "p4Bytes",
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "cPrimeHashbuf",
            type: {
              array: ["u8", 16],
            },
          },
          {
            name: "m1",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "m2",
            type: {
              defined: "FieldElementZC",
            },
          },
          {
            name: "txRemaining",
            docs: [
              "The number of transactions remaining to verify the VRF proof.",
            ],
            type: "u32",
          },
          {
            name: "verified",
            docs: ["Whether the VRF proof has been verified on-chain."],
            type: "bool",
          },
          {
            name: "result",
            docs: [
              "The VRF proof verification result. Will be zeroized if still awaiting fulfillment.",
            ],
            type: {
              array: ["u8", 32],
            },
          },
        ],
      },
    },
    {
      name: "AccountMetaZC",
      type: {
        kind: "struct",
        fields: [
          {
            name: "pubkey",
            type: "publicKey",
          },
          {
            name: "isSigner",
            type: "bool",
          },
          {
            name: "isWritable",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "AccountMetaBorsh",
      type: {
        kind: "struct",
        fields: [
          {
            name: "pubkey",
            type: "publicKey",
          },
          {
            name: "isSigner",
            type: "bool",
          },
          {
            name: "isWritable",
            type: "bool",
          },
        ],
      },
    },
    {
      name: "CallbackZC",
      type: {
        kind: "struct",
        fields: [
          {
            name: "programId",
            docs: ["The program ID of the callback program being invoked."],
            type: "publicKey",
          },
          {
            name: "accounts",
            docs: ["The accounts being used in the callback instruction."],
            type: {
              array: [
                {
                  defined: "AccountMetaZC",
                },
                32,
              ],
            },
          },
          {
            name: "accountsLen",
            docs: ["The number of accounts used in the callback"],
            type: "u32",
          },
          {
            name: "ixData",
            docs: ["The serialized instruction data."],
            type: {
              array: ["u8", 1024],
            },
          },
          {
            name: "ixDataLen",
            docs: ["The number of serialized bytes in the instruction data."],
            type: "u32",
          },
        ],
      },
    },
    {
      name: "VrfRound",
      type: {
        kind: "struct",
        fields: [
          {
            name: "alpha",
            docs: ["The alpha bytes used to calculate the VRF proof."],
            type: {
              array: ["u8", 256],
            },
          },
          {
            name: "alphaLen",
            docs: ["The number of bytes in the alpha buffer."],
            type: "u32",
          },
          {
            name: "requestSlot",
            docs: ["The Slot when the VRF round was opened."],
            type: "u64",
          },
          {
            name: "requestTimestamp",
            docs: ["The unix timestamp when the VRF round was opened."],
            type: "i64",
          },
          {
            name: "result",
            docs: [
              "The VRF round result. Will be zeroized if still awaiting fulfillment.",
            ],
            type: {
              array: ["u8", 32],
            },
          },
          {
            name: "numVerified",
            docs: ["The number of builders who verified the VRF proof."],
            type: "u32",
          },
          {
            name: "ebuf",
            docs: ["Reserved for future info."],
            type: {
              array: ["u8", 256],
            },
          },
        ],
      },
    },
    {
      name: "VrfPoolRow",
      type: {
        kind: "struct",
        fields: [
          {
            name: "timestamp",
            type: "i64",
          },
          {
            name: "pubkey",
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "BufferRelayerRound",
      type: {
        kind: "struct",
        fields: [
          {
            name: "numSuccess",
            docs: ["Number of successful responses."],
            type: "u32",
          },
          {
            name: "numError",
            docs: ["Number of error responses."],
            type: "u32",
          },
          {
            name: "roundOpenSlot",
            docs: ["Slot when the buffer relayer round was opened."],
            type: "u64",
          },
          {
            name: "roundOpenTimestamp",
            docs: ["Timestamp when the buffer relayer round was opened."],
            type: "i64",
          },
          {
            name: "oraclePubkey",
            docs: [
              "The public key of the oracle fulfilling the buffer relayer update request.",
            ],
            type: "publicKey",
          },
        ],
      },
    },
    {
      name: "Lanes",
      docs: [
        "The `Lanes` enum represents a subset of the lanes `A,B,C,D` of a",
        "`FieldElement2625x4`.",
        "",
        "It's used to specify blend operations without",
        "having to know details about the data layout of the",
        "`FieldElement2625x4`.",
      ],
      type: {
        kind: "enum",
        variants: [
          {
            name: "C",
          },
          {
            name: "D",
          },
          {
            name: "AB",
          },
          {
            name: "AC",
          },
          {
            name: "CD",
          },
          {
            name: "AD",
          },
          {
            name: "BC",
          },
          {
            name: "ABCD",
          },
        ],
      },
    },
    {
      name: "Shuffle",
      docs: [
        "The `Shuffle` enum represents a shuffle of a `FieldElement2625x4`.",
        "",
        "The enum variants are named by what they do to a vector \\\\(",
        "(A,B,C,D) \\\\); for instance, `Shuffle::BADC` turns \\\\( (A, B, C,",
        "D) \\\\) into \\\\( (B, A, D, C) \\\\).",
      ],
      type: {
        kind: "enum",
        variants: [
          {
            name: "AAAA",
          },
          {
            name: "BBBB",
          },
          {
            name: "CACA",
          },
          {
            name: "DBBD",
          },
          {
            name: "ADDA",
          },
          {
            name: "CBCB",
          },
          {
            name: "ABAB",
          },
          {
            name: "BADC",
          },
          {
            name: "BACD",
          },
          {
            name: "ABDC",
          },
        ],
      },
    },
    {
      name: "Shuffle",
      type: {
        kind: "enum",
        variants: [
          {
            name: "AAAA",
          },
          {
            name: "BBBB",
          },
          {
            name: "BADC",
          },
          {
            name: "BACD",
          },
          {
            name: "ADDA",
          },
          {
            name: "CBCB",
          },
          {
            name: "ABDC",
          },
          {
            name: "ABAB",
          },
          {
            name: "DBBD",
          },
          {
            name: "CACA",
          },
        ],
      },
    },
    {
      name: "Lanes",
      type: {
        kind: "enum",
        variants: [
          {
            name: "D",
          },
          {
            name: "C",
          },
          {
            name: "AB",
          },
          {
            name: "AC",
          },
          {
            name: "AD",
          },
          {
            name: "BCD",
          },
        ],
      },
    },
    {
      name: "Error",
      type: {
        kind: "enum",
        variants: [
          {
            name: "InvalidPublicKey",
          },
          {
            name: "SerializationError",
          },
          {
            name: "DeserializationError",
          },
          {
            name: "InvalidDataError",
          },
        ],
      },
    },
    {
      name: "VerificationStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "None",
          },
          {
            name: "VerificationPending",
          },
          {
            name: "VerificationFailure",
          },
          {
            name: "VerificationSuccess",
          },
          {
            name: "VerificationOverride",
          },
        ],
      },
    },
    {
      name: "AggregatorResolutionMode",
      type: {
        kind: "enum",
        variants: [
          {
            name: "ModeRoundResolution",
          },
          {
            name: "ModeSlidingResolution",
          },
        ],
      },
    },
    {
      name: "SwitchboardPermission",
      type: {
        kind: "enum",
        variants: [
          {
            name: "PermitOracleHeartbeat",
          },
          {
            name: "PermitOracleQueueUsage",
          },
          {
            name: "PermitVrfRequests",
          },
        ],
      },
    },
    {
      name: "OracleResponseType",
      type: {
        kind: "enum",
        variants: [
          {
            name: "TypeSuccess",
          },
          {
            name: "TypeError",
          },
          {
            name: "TypeDisagreement",
          },
          {
            name: "TypeNoResponse",
          },
        ],
      },
    },
    {
      name: "VrfStatus",
      type: {
        kind: "enum",
        variants: [
          {
            name: "StatusNone",
          },
          {
            name: "StatusRequesting",
          },
          {
            name: "StatusVerifying",
          },
          {
            name: "StatusVerified",
          },
          {
            name: "StatusCallbackSuccess",
          },
          {
            name: "StatusVerifyFailure",
          },
        ],
      },
    },
  ],
  events: [
    {
      name: "VrfRequestRandomnessEvent",
      fields: [
        {
          name: "vrfPubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "oraclePubkeys",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
        {
          name: "loadAmount",
          type: "u64",
          index: false,
        },
        {
          name: "existingAmount",
          type: "u64",
          index: false,
        },
        {
          name: "alpha",
          type: "bytes",
          index: false,
        },
        {
          name: "counter",
          type: "u128",
          index: false,
        },
      ],
    },
    {
      name: "VrfRequestEvent",
      fields: [
        {
          name: "vrfPubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "oraclePubkeys",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
      ],
    },
    {
      name: "VrfProveEvent",
      fields: [
        {
          name: "vrfPubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "authorityPubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "VrfVerifyEvent",
      fields: [
        {
          name: "vrfPubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "authorityPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "VrfCallbackPerformedEvent",
      fields: [
        {
          name: "vrfPubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorOpenRoundEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "oraclePubkeys",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
        {
          name: "jobPubkeys",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
        {
          name: "remainingFunds",
          type: "u64",
          index: false,
        },
        {
          name: "queueAuthority",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorSaveResultEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "value",
          type: {
            defined: "BorshDecimal",
          },
          index: false,
        },
        {
          name: "slot",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "jobValues",
          type: {
            vec: {
              option: {
                defined: "BorshDecimal",
              },
            },
          },
          index: false,
        },
      ],
    },
    {
      name: "AggregatorTeeSaveResultEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "value",
          type: {
            defined: "BorshDecimal",
          },
          index: false,
        },
        {
          name: "slot",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorValueUpdateEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "value",
          type: {
            defined: "BorshDecimal",
          },
          index: false,
        },
        {
          name: "slot",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
        {
          name: "oraclePubkeys",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
        {
          name: "oracleValues",
          type: {
            vec: {
              defined: "BorshDecimal",
            },
          },
          index: false,
        },
      ],
    },
    {
      name: "OracleRewardEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "leasePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "walletPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "roundSlot",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "OracleWithdrawEvent",
      fields: [
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "walletPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "destinationWallet",
          type: "publicKey",
          index: false,
        },
        {
          name: "previousAmount",
          type: "u64",
          index: false,
        },
        {
          name: "newAmount",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "LeaseWithdrawEvent",
      fields: [
        {
          name: "leasePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "walletPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "previousAmount",
          type: "u64",
          index: false,
        },
        {
          name: "newAmount",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "OracleSlashEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "leasePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "walletPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "roundSlot",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "LeaseFundEvent",
      fields: [
        {
          name: "leasePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "funder",
          type: "publicKey",
          index: false,
        },
        {
          name: "amount",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "ProbationBrokenEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "queuePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "FeedPermissionRevokedEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "GarbageCollectFailureEvent",
      fields: [
        {
          name: "queuePubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "OracleBootedEvent",
      fields: [
        {
          name: "queuePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorCrankEvictionEvent",
      fields: [
        {
          name: "crankPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "aggregatorPubkey",
          type: "publicKey",
          index: true,
        },
        {
          name: "reason",
          type: {
            option: "u32",
          },
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "CrankLeaseInsufficientFundsEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "leasePubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "CrankPopExpectedFailureEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "leasePubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "BufferRelayerOpenRoundEvent",
      fields: [
        {
          name: "relayerPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "jobPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "oraclePubkeys",
          type: {
            vec: "publicKey",
          },
          index: false,
        },
        {
          name: "remainingFunds",
          type: "u64",
          index: false,
        },
        {
          name: "queue",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "PriorityFeeReimburseEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "slot",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
        {
          name: "fee",
          type: "u64",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorAddJobEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "jobPubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorRemoveJobEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "jobPubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorLockEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorInitEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorSetAuthorityEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "oldAuthority",
          type: "publicKey",
          index: false,
        },
        {
          name: "newAuthority",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "AggregatorSetConfigsEvent",
      fields: [
        {
          name: "feedPubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
    {
      name: "PermissionSetEvent",
      fields: [
        {
          name: "permissionKey",
          type: "publicKey",
          index: false,
        },
        {
          name: "permission",
          type: {
            defined: "SwitchboardPermission",
          },
          index: false,
        },
        {
          name: "enable",
          type: "bool",
          index: false,
        },
      ],
    },
    {
      name: "VrfPoolUpdateEvent",
      fields: [
        {
          name: "queuePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "vrfPoolPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "vrfPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "newSize",
          type: "u32",
          index: false,
        },
        {
          name: "minInterval",
          type: "u32",
          index: false,
        },
      ],
    },
    {
      name: "VrfPoolRequestEvent",
      fields: [
        {
          name: "queuePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "vrfPoolPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "vrfPubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "oraclePubkey",
          type: "publicKey",
          index: false,
        },
        {
          name: "slot",
          type: "u64",
          index: false,
        },
        {
          name: "timestamp",
          type: "i64",
          index: false,
        },
      ],
    },
    {
      name: "QuoteVerifyRequestEvent",
      fields: [
        {
          name: "quotePubkey",
          type: "publicKey",
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "ArrayOperationError",
      msg: "Illegal operation on a Switchboard array.",
    },
    {
      code: 6001,
      name: "QueueOperationError",
      msg: "Illegal operation on a Switchboard queue.",
    },
    {
      code: 6002,
      name: "IncorrectProgramOwnerError",
      msg: "An account required to be owned by the program has a different owner.",
    },
    {
      code: 6003,
      name: "InvalidAggregatorRound",
      msg: "Aggregator is not currently populated with a valid round.",
    },
    {
      code: 6004,
      name: "TooManyAggregatorJobs",
      msg: "Aggregator cannot fit any more jobs.",
    },
    {
      code: 6005,
      name: "AggregatorCurrentRoundClosed",
      msg: "Aggregator's current round is closed. No results are being accepted.",
    },
    {
      code: 6006,
      name: "AggregatorInvalidSaveResult",
      msg: "Aggregator received an invalid save result instruction.",
    },
    {
      code: 6007,
      name: "InvalidStrDecimalConversion",
      msg: "Failed to convert string to decimal format.",
    },
    {
      code: 6008,
      name: "AccountLoaderMissingSignature",
      msg: "AccountLoader account is missing a required signature.",
    },
    {
      code: 6009,
      name: "MissingRequiredSignature",
      msg: "Account is missing a required signature.",
    },
    {
      code: 6010,
      name: "ArrayOverflowError",
      msg: "The attempted action will overflow a zero-copy account array.",
    },
    {
      code: 6011,
      name: "ArrayUnderflowError",
      msg: "The attempted action will underflow a zero-copy account array.",
    },
    {
      code: 6012,
      name: "PubkeyNotFoundError",
      msg: "The queried public key was not found.",
    },
    {
      code: 6013,
      name: "AggregatorIllegalRoundOpenCall",
      msg: "Aggregator round open called too early.",
    },
    {
      code: 6014,
      name: "AggregatorIllegalRoundCloseCall",
      msg: "Aggregator round close called too early.",
    },
    {
      code: 6015,
      name: "AggregatorClosedError",
      msg: "Aggregator is closed. Illegal action.",
    },
    {
      code: 6016,
      name: "IllegalOracleIdxError",
      msg: "Illegal oracle index.",
    },
    {
      code: 6017,
      name: "OracleAlreadyRespondedError",
      msg: "The provided oracle has already responded this round.",
    },
    {
      code: 6018,
      name: "ProtoDeserializeError",
      msg: "Failed to deserialize protocol buffer.",
    },
    {
      code: 6019,
      name: "UnauthorizedStateUpdateError",
      msg: "Unauthorized program state modification attempted.",
    },
    {
      code: 6020,
      name: "MissingOracleAccountsError",
      msg: "Not enough oracle accounts provided to closeRounds.",
    },
    {
      code: 6021,
      name: "OracleMismatchError",
      msg: "An unexpected oracle account was provided for the transaction.",
    },
    {
      code: 6022,
      name: "CrankMaxCapacityError",
      msg: "Attempted to push to a Crank that's at capacity",
    },
    {
      code: 6023,
      name: "AggregatorLeaseInsufficientFunds",
      msg: "Aggregator update call attempted but attached lease has insufficient funds.",
    },
    {
      code: 6024,
      name: "IncorrectTokenAccountMint",
      msg: "The provided token account does not point to the Switchboard token mint.",
    },
    {
      code: 6025,
      name: "InvalidEscrowAccount",
      msg: "An invalid escrow account was provided.",
    },
    {
      code: 6026,
      name: "CrankEmptyError",
      msg: "Crank empty. Pop failed.",
    },
    {
      code: 6027,
      name: "PdaDeriveError",
      msg: "Failed to derive a PDA from the provided seed.",
    },
    {
      code: 6028,
      name: "AggregatorAccountNotFound",
      msg: "Aggregator account missing from provided account list.",
    },
    {
      code: 6029,
      name: "PermissionAccountNotFound",
      msg: "Permission account missing from provided account list.",
    },
    {
      code: 6030,
      name: "LeaseAccountDeriveFailure",
      msg: "Failed to derive a lease account.",
    },
    {
      code: 6031,
      name: "PermissionAccountDeriveFailure",
      msg: "Failed to derive a permission account.",
    },
    {
      code: 6032,
      name: "EscrowAccountNotFound",
      msg: "Escrow account missing from provided account list.",
    },
    {
      code: 6033,
      name: "LeaseAccountNotFound",
      msg: "Lease account missing from provided account list.",
    },
    {
      code: 6034,
      name: "DecimalConversionError",
      msg: "Decimal conversion method failed.",
    },
    {
      code: 6035,
      name: "PermissionDenied",
      msg: "Permission account is missing required flags for the given action.",
    },
    {
      code: 6036,
      name: "QueueAtCapacity",
      msg: "Oracle queue is at lease capacity.",
    },
    {
      code: 6037,
      name: "ExcessiveCrankRowsError",
      msg: "Data feed is already pushed on a crank.",
    },
    {
      code: 6038,
      name: "AggregatorLockedError",
      msg: "Aggregator is locked, no setting modifications or job additions allowed.",
    },
    {
      code: 6039,
      name: "AggregatorInvalidBatchSizeError",
      msg: "Aggregator invalid batch size.",
    },
    {
      code: 6040,
      name: "AggregatorJobChecksumMismatch",
      msg: "Oracle provided an incorrect aggregator job checksum.",
    },
    {
      code: 6041,
      name: "IntegerOverflowError",
      msg: "An integer overflow occurred.",
    },
    {
      code: 6042,
      name: "InvalidUpdatePeriodError",
      msg: "Minimum update period is 5 seconds.",
    },
    {
      code: 6043,
      name: "NoResultsError",
      msg: "Aggregator round evaluation attempted with no results.",
    },
    {
      code: 6044,
      name: "InvalidExpirationError",
      msg: "An expiration constraint was broken.",
    },
    {
      code: 6045,
      name: "InsufficientStakeError",
      msg: "An account provided insufficient stake for action.",
    },
    {
      code: 6046,
      name: "LeaseInactiveError",
      msg: "The provided lease account is not active.",
    },
    {
      code: 6047,
      name: "NoAggregatorJobsFound",
      msg: "No jobs are currently included in the aggregator.",
    },
    {
      code: 6048,
      name: "IntegerUnderflowError",
      msg: "An integer underflow occurred.",
    },
    {
      code: 6049,
      name: "OracleQueueMismatch",
      msg: "An invalid oracle queue account was provided.",
    },
    {
      code: 6050,
      name: "OracleWalletMismatchError",
      msg: "An unexpected oracle wallet account was provided for the transaction.",
    },
    {
      code: 6051,
      name: "InvalidBufferAccountError",
      msg: "An invalid buffer account was provided.",
    },
    {
      code: 6052,
      name: "InsufficientOracleQueueError",
      msg: "Insufficient oracle queue size.",
    },
    {
      code: 6053,
      name: "InvalidAuthorityError",
      msg: "Invalid authority account provided.",
    },
    {
      code: 6054,
      name: "InvalidTokenAccountMintError",
      msg: "A provided token wallet is associated with an incorrect mint.",
    },
    {
      code: 6055,
      name: "ExcessiveLeaseWithdrawlError",
      msg: "You must leave enough funds to perform at least 1 update in the lease.",
    },
    {
      code: 6056,
      name: "InvalideHistoryAccountError",
      msg: "Invalid history account provided.",
    },
    {
      code: 6057,
      name: "InvalidLeaseAccountEscrowError",
      msg: "Invalid lease account escrow.",
    },
    {
      code: 6058,
      name: "InvalidCrankAccountError",
      msg: "Invalid crank provided.",
    },
    {
      code: 6059,
      name: "CrankNoElementsReadyError",
      msg: "No elements ready to be popped.",
    },
    {
      code: 6060,
      name: "IndexOutOfBoundsError",
      msg: "Index out of bounds",
    },
    {
      code: 6061,
      name: "VrfInvalidRequestError",
      msg: "Invalid vrf request params",
    },
    {
      code: 6062,
      name: "VrfInvalidProofSubmissionError",
      msg: "Vrf proof failed to verify",
    },
    {
      code: 6063,
      name: "VrfVerifyError",
      msg: "Error in verifying vrf proof.",
    },
    {
      code: 6064,
      name: "VrfCallbackError",
      msg: "Vrf callback function failed.",
    },
    {
      code: 6065,
      name: "VrfCallbackParamsError",
      msg: "Invalid vrf callback params provided.",
    },
    {
      code: 6066,
      name: "VrfCallbackAlreadyCalledError",
      msg: "Vrf callback has already been triggered.",
    },
    {
      code: 6067,
      name: "VrfInvalidPubkeyError",
      msg: "The provided pubkey is invalid to use in ecvrf proofs",
    },
    {
      code: 6068,
      name: "VrfTooManyVerifyCallsError",
      msg: "Number of required verify calls exceeded",
    },
    {
      code: 6069,
      name: "VrfRequestAlreadyLaunchedError",
      msg: "Vrf request is already pending",
    },
    {
      code: 6070,
      name: "VrfInsufficientVerificationError",
      msg: "Insufficient amount of proofs collected for VRF callback",
    },
    {
      code: 6071,
      name: "InvalidVrfProducerError",
      msg: "An incorrect oracle attempted to submit a proof",
    },
    {
      code: 6072,
      name: "InvalidGovernancePidError",
      msg: "Invalid SPLGovernance Account Supplied",
    },
    {
      code: 6073,
      name: "InvalidGovernanceAccountError",
      msg: "An Invalid Governance Account was supplied",
    },
    {
      code: 6074,
      name: "MissingOptionalAccount",
      msg: "Expected an optional account",
    },
    {
      code: 6075,
      name: "InvalidSpawnRecordOwner",
      msg: "Invalid Owner for Spawn Record",
    },
    {
      code: 6076,
      name: "NoopError",
      msg: "Noop error",
    },
    {
      code: 6077,
      name: "MissingRequiredAccountsError",
      msg: "A required instruction account was not included",
    },
    {
      code: 6078,
      name: "InvalidMintError",
      msg: "Invalid mint account passed for instruction",
    },
    {
      code: 6079,
      name: "InvalidTokenAccountKeyError",
      msg: "An invalid token account was passed into the instruction",
    },
    {
      code: 6080,
      name: "InvalidJobAccountError",
      msg: "",
    },
    {
      code: 6081,
      name: "VoterStakeRegistryError",
      msg: "",
    },
    {
      code: 6082,
      name: "AccountDiscriminatorMismatch",
      msg: "Account discriminator did not match.",
    },
    {
      code: 6083,
      name: "FuckingImpossibleError",
      msg: "This error is fucking impossible.",
    },
    {
      code: 6084,
      name: "InvalidVrfRound",
      msg: "Responding to the wrong VRF round",
    },
    {
      code: 6085,
      name: "JobSizeExceeded",
      msg: "Job size has exceeded the max of 6400 bytes",
    },
    {
      code: 6086,
      name: "JobChunksExceeded",
      msg: "Job loading can only support a maximum of 8 chunks",
    },
    {
      code: 6087,
      name: "JobDataLocked",
      msg: "Job has finished initializing and is immutable",
    },
    {
      code: 6088,
      name: "JobNotInitialized",
      msg: "Job account has not finished initializing",
    },
    {
      code: 6089,
      name: "BufferRelayerIllegalRoundOpenCall",
      msg: "BufferRelayer round open called too early.",
    },
    {
      code: 6090,
      name: "InvalidSliderAccount",
      msg: "Invalid slider account.",
    },
    {
      code: 6091,
      name: "VrfLiteHasExistingPool",
      msg: "VRF lite account belongs to an existing pool.",
    },
    {
      code: 6092,
      name: "VrfPoolFull",
      msg: "VRF pool is at max capacity.",
    },
    {
      code: 6093,
      name: "VrfPoolEmpty",
      msg: "VRF pool is empty.",
    },
    {
      code: 6094,
      name: "VrfAccountNotFound",
      msg: "Failed to find VRF account in remaining accounts array.",
    },
    {
      code: 6095,
      name: "AccountCloseNotReady",
      msg: "Account is not ready to be closed.",
    },
    {
      code: 6096,
      name: "VrfPoolRequestTooSoon",
      msg: "VRF requested too soon.",
    },
    {
      code: 6097,
      name: "VrfPoolMiss",
      msg: "VRF pool miss.",
    },
    {
      code: 6098,
      name: "VrfLiteOwnedByPool",
      msg: "VRF lite belongs to a pool.",
    },
    {
      code: 6099,
      name: "InsufficientTokenBalance",
      msg: "Escrow has insufficient funds to perform this action.",
    },
    {
      code: 6100,
      name: "InvalidQuoteError",
      msg: "Invalid SAS quote account",
    },
    {
      code: 6101,
      name: "InvalidHistoryAccountError",
      msg: "",
    },
    {
      code: 6102,
      name: "GenericError",
      msg: "",
    },
    {
      code: 6103,
      name: "InvalidAuthorityState",
      msg: "",
    },
  ],
};
