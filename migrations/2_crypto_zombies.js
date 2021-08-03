var CryptoZombies = artifacts.require("../contracts/CryptoZombies.sol");
module.exports = function(deployer) {
  deployer.deploy(CryptoZombies);
};