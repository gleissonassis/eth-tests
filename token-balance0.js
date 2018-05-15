var Web3 = require('web3');
var abi = require('human-standard-token-abi');
var Tx = require('ethereumjs-tx');
var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io'));

var addr = '0xbD524F668C929efefBfCff269D70effF87E05332';
var to = '0xbD524F668C929efefBfCff269D70effF87E05332';
var contractAddress = '0x583cbBb8a8443B38aBcC0c956beCe47340ea1367';

var token = new web3.eth.Contract(abi, contractAddress);

// Get the token name
token.methods.name().call().then(function(r) {
  console.log(r);
})

// Get the token symbol
token.methods.symbol().call({from: addr}).then(function(r) {
  console.log('Token symbol: ' + r)
})


token.methods.totalSupply().call({from: addr}, function(err, totalSupply) {
  console.log(totalSupply)
})


token.methods.balanceOf(addr).call()
.then(function(r) {
  console.log(r);
})
.catch(function(e) {
  console.error(e);
})

web3.eth.getTransactionCount(addr)
.then(function(count) {

  var gasPriceGwei = 3;
  var gasLimit = 3000000;
  var chainId = 3;
  var rawTransaction = {
      from: addr,
      nonce: web3.utils.toHex(count),
      gasPrice: web3.utils.toHex(gasPriceGwei * 1e9),
      gasLimit: web3.utils.toHex(gasLimit),
      to: contractAddress,
      value: '0x0',
      data: token.methods.transfer(to, 1000).encodeABI(),
      chainId: chainId
  };

  var tx = new Tx(rawTransaction);
  var privKey = new Buffer('aa32f19d2d330e4f6a87ea7b34feca3735fc313db075cdc12bf61743f68076ff', 'hex')
  tx.sign(privKey);
  var serializedTx = tx.serialize();

  web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'))
  .then(function(r) {
    console.log(r);
  })
})
