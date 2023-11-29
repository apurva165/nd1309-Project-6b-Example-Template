const HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    sepolia: {
      provider: () => new HDWalletProvider("mind change amazing evidence own athlete soda vivid exercise rigid tray innocent", 'https://sepolia.infura.io/v3/a9fa67bb1afa45baad0511c7ff635d58'),
      network_id: "11155111",
      gas: 4465030,
    }
  }
};