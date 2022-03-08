const main = async () => {
  const weebContractFactory = await hre.ethers.getContractFactory("WeebPortal");
  const weebContract = await weebContractFactory.deploy();
  await weebContract.deployed();
  console.log("Contract deployed to:", weebContract.address);
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