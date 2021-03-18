const NigerianPrinceCoin = artifacts.require("NigerianPrince");

module.exports = async function(deployer) {
  await deployer.deploy(NigerianPrinceCoin);
  const nigerianPrince = await NigerianPrinceCoin.deployed()
};
