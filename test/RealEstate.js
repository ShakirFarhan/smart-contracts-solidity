const {expect}=require("chai")
const {ethers}=require("hardhat")

describe("RealEsate",()=>{
  let RealEsate,Escrow,deployer,seller,accounts;
let NFTid=1
  beforeEach(async()=>{
   accounts=await ethers.getSigners()
    deployer=accounts[0]
    seller=deployer
  const Estate=await ethers.getContractFactory("RealEstate")
  const EscrowC=await ethers.getContractFactory("Escrow")
  RealEsate=await Estate.deploy()
  Escrow=await EscrowC.deploy()

  })
  describe("Deployment",()=>{
    it("Send NFT to Seller / Buyer",async()=>{
      expect(await RealEsate.ownerOf(NFTid)).to.equal(deployer.address)
    })
  })
})