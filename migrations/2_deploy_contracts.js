var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var SimpleEscrow = artifacts.require("./SimpleEscrow.sol");


module.exports = function(deployer) {
  deployer.deploy(SimpleEscrow, '0x00aa23874D6DC3346fbCA9B99415Be1fC4e40fe7', '0xf17f52151ebef6c7334fad080c5704d77216b732');
};
