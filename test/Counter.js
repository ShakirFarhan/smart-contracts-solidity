const {expect} =require("chai")
const {ethers}=require("hardhat")
describe("Counter",()=>{
  let counter;
  beforeEach(async()=>{
    const Counter=await ethers.getContractFactory("Counter")
    counter=await Counter.deploy("Farhan",1)
  })
  describe("Deployment",()=>{

    it("Sets the count",async()=>{
      const count=await counter.count()
      expect(count).to.equal(1)
    })
    it("Sets the name",async()=>{
    
      const name=await counter.name()
      expect(name).to.equal("Farhan")
    })
  })
  describe("Counting",()=>{
    let transaction
    it("increment the count",async()=>{
     transaction= await counter.increment()
      await transaction.wait()
      const count=await counter.count()
      expect(count).to.equal(2)
    })
    it("Decrement the count",async()=>{
        transaction=await counter.decrement()
        await transaction.wait()
        const count=await counter.count()
        expect(count).to.equal(0)
        await expect(counter.decrement()).to.be.reverted
    })
  })
})