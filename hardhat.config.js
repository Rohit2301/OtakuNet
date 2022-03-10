require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/M90JJ_o80Mycd2suHaq1cQkoOheucmh3",
      accounts: ["Privaste key here"],
    },
  },
};
