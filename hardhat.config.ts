import '@shardlabs/starknet-hardhat-plugin';
import { HardhatUserConfig } from 'hardhat/types';

const config: HardhatUserConfig = {
    solidity: {
      version: '0.8.9',
      settings: {
        optimizer: {
          enabled: true,
          runs: 10,
        },
      },
    },
    networks: {
      ethereumLocal: {
        url: 'http://localhost:8545',
        chainId: 31337,
      },
      starknetLocal: {
        url: 'http://localhost:8000',
      },
    },
    starknet: {
      venv: 'active',
      network: 'starknetLocal',
    },
  };