const HDWalletProvider = require('@truffle/hdwallet-provider')

const mnemonic='' 
const POLYGONSCANAPIKEY=''
module.exports = {
  plugins: [
    'truffle-plugin-verify'
  ],
  api_keys: {
    polygonscan: POLYGONSCANAPIKEY,
  },
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard BSC port (default: none)
      network_id: "*", // Any network (default: none)
    },
  },

  mocha: {
    // timeout: 100000
  },
  compilers: {
    solc: {
      version: ">=0.8.0",
      settings: { optimizer: { enabled: true, runs: 200 }}
    }
  }
};