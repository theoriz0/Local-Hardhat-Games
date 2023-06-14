// add the game address here and update the contract name if necessary
// const gameAddr = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
// const contractName = "Game1";
// const gameAddr = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";
// const contractName = "Game2";
// const gameAddr = "0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6";
// const contractName = "Game3";
// const gameAddr = "0x610178dA211FEF7D417bC0e6FeD39F05609AD788";
// const contractName = "Game4";
const gameAddr = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
const contractName = "Game5";

async function main() {
    // attach to the game
    const game = await hre.ethers.getContractAt(contractName, gameAddr);

    // do whatever you need to do to win the game here:
    // Game1
    // const tx = await game.win();
    // Game2
    // await game.setX(25);
    // await game.setY(25);
    // const tx = await game.win();
    // Game3
    // const tx = await game.win(45);
    // Game4
    // const tx = await game.win(56);
    // Game5
    await game.giveMeAllowance(20000);
    await game.mint(20000);
    const tx = await game.win();

    // did you win? Check the transaction receipt!
    // if you did, it will be in both the logs and events array
    const receipt = await tx.wait();
    console.log(receipt);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
