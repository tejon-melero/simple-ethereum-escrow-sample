
var HDWalletProvider = require("truffle-hdwallet-provider");
var providerSokol = new HDWalletProvider('pusher computer fog unglue crested marathon cursor unfeeling attempt mantra finless surrender', 'https://sokol.poa.network');

console.log("Public key = "+providerSokol.address);

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
   development: {
     host: 'localhost',
     port: 8545,
     gas: 5000000,
     network_id: '*', // eslint-disable-line camelcase
   },
    sokol: {
      provider: providerSokol,
      network_id: 77, // eslint-disable-line camelcase
      port: 443,
      gasPrice: "10000000000",
      gas: 5000000,
    }
 }
};
