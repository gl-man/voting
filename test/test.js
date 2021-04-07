const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Proposals", function() {
  it("should create a proposal", async function() {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();

    await voting.deployed();
    expect(await voting.createProposal()).to.equal(true);

    // await voting.setGreeting("Hola, mundo!");
    expect(await voting.createOption()).to.equal(true);
  });
});

describe("Options", function() {
  it("should create a proposal", async function() {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();

    await voting.deployed();
    expect(await voting.createProposal()).to.equal(true);

    // await voting.setGreeting("Hola, mundo!");
    expect(await voting.createOption()).to.equal(true);
  });
});

describe("Voting", function() {
  it("should create a proposal", async function() {
    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();

    await voting.deployed();
    expect(await voting.createProposal()).to.equal(true);

    // await voting.setGreeting("Hola, mundo!");
    expect(await voting.createOption()).to.equal(true);
  });
});
