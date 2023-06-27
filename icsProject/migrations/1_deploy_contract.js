const Ics_contract = artifacts.require("ICS");

module.exports = function(deployer) {
  deployer.deploy(Ics_contract,"ISQUISCO","ICS",1000000000000);
};