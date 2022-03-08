const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const weebContractFactory = await hre.ethers.getContractFactory("WeebPortal");
  const weebContract = await weebContractFactory.deploy();
  await weebContract.deployed();

  console.log("weebPortal address: ", weebContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
