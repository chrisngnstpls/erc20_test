

const NigerianPrinceCoin = artifacts.require("NigerianPrince");

contract('NigerianPrince', function(accounts){

    it('sets the total supply on deploy', function(){
        return NigerianPrinceCoin.deployed().then(function(instance){
            tokenInstance = instance;
            return tokenInstance.totalSupply();
        }).then(function(totalSupply){
            assert.equal(totalSupply.toString(), '10000000', 'set total supply to 10.0000.000')
        })
    })
})