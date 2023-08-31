require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


const mantleTestnet = "https://rpc.testnet.mantle.xyz/"
const mantleMain = "https://rpc.mantle.xyz"
const ethGoerli = "https://ethereum-goerli.publicnode.com"
const baseGoerli = "https://base-goerli.publicnode.com"

const blockscoutApi = "https://eth-goerli.blockscout.com/api"
const mantleTestnetApi = "https://explorer.testnet.mantle.xyz/api"
const mantleMainnetExplorer = "https://explorer.mantle.xyz/"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    mantleTestnet:{
      url:mantleTestnet,
      accounts:[process.env.ACCOUNT_KEY],
    },
    mantle:{
      url:mantleMain,
      accounts:[process.env.ACCOUNT_KEY],
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: {
      mantleTestnet: process.env.ETHERSCAN_API,
      mantle: process.env.ETHERSCAN_API
    },
    customChains: [
      {
        network: "mantleTestnet",
        chainId: 5001,
        urls: {
          apiURL: mantleTestnetApi,
          browserURL: "https://explorer.testnet.mantle.xyz"
        }
      },
      {
        network: "mantle",
        chainId: 5000,
        urls: {
          apiURL: `${mantleMainnetExplorer}api`,
          browserURL: mantleMainnetExplorer
        }
      }
    ]
  }
};
