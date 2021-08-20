const Migrations = artifacts.require("LibreVault");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
