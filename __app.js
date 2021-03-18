const Web3 = require('web3')
const url = 'https://ropsten.infura.io/v3/a908fc09fb3a4e07aec2989f9a05ca4c'
const wallet = '0x12EFcff8d6bAB2a5d617bf343A6e2C4BE77716EA'
const web3 = new Web3(url)

const _ = web3.utils._

web3.eth.getBalance(wallet, (err, bal) => {
    if(err){
        console.log(err)
    }
    let balance = web3.utils.fromWei(bal,'ether')
    console.log('wallet balance : ' ,balance)
})

web3.eth.getGasPrice().then((result) => {
    console.log('avg gas price : ' , web3.utils.fromWei(result, 'ether'))
})

console.log('SHA3 testing this here: ', web3.utils.sha3('Testing this here'))

console.log(web3.utils.randomHex(32))

_.each({key1:'value1', key2:'value2'}, (value,key) => {
    console.log(key, value)
})

//console.log(balance)