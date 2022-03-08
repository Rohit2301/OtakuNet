const main = async () => {
  const [owner, randomPerson, deployer] = await hre.ethers.getSigners();
  const weebContractFactory = await hre.ethers.getContractFactory("WeebPortal");
  const weebContract = await weebContractFactory.deploy();
  await weebContract.deployed();

  console.log("Contract deployed to: ", weebContract.address);
  console.log("Contract deployed by :", owner.address);

  let waveCount;
  waveCount = await weebContract.getTotalWaves();

  let waveInc = await weebContract.wave();
  await waveInc.wait();

  waveCount = await weebContract.getTotalWaves();
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
