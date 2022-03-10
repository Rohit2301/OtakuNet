const main = async () => {
  const [owner] = await hre.ethers.getSigners();
  const weebContractFactory = await hre.ethers.getContractFactory("WeebPortal");
  const weebContract = await weebContractFactory.deploy({
    value: hre.ethers.utils.parseEther("0.01"),
  });
  await weebContract.deployed();

  console.log("Contract deployed to: ", weebContract.address);
  console.log("Contract deployed by :", owner.address);

  let contractBalance = await hre.ethers.provider.getBalance(
    weebContract.address
  );

  console.log(
    "Contract balance : ",
    hre.ethers.utils.formatEther(contractBalance)
  );

  let waveCount;

  let waveTxn = await weebContract.wave("hlo user1");
  await waveTxn.wait();
  
  let waveTxn2 = await weebContract.wave("hlo wave2");
  await waveTxn2.wait();
  contractBalance = await hre.ethers.provider.getBalance(weebContract.address);

  console.log(
    "Contract balance : ",
    hre.ethers.utils.formatEther(contractBalance)
  );
  // const [_, randomPerson] = await hre.ethers.getSigners();
  // waveTxn = await weebContract.connect(randomPerson).wave("Another message!");

  waveCount = await weebContract.getTotalWaves();
  console.log(waveCount);
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
