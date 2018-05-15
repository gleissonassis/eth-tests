var Web3 = require('web3');

var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io'));

var r = web3.eth.getBalance('0xbD524F668C929efefBfCff269D70effF87E05332');
r.then(function(balance) {
  console.log('AAA', balance);
});

web3.eth.accounts.wallet.add('0xaa32f19d2d330e4f6a87ea7b34feca3735fc313db075cdc12bf61743f68076ff');
web3.eth.accounts.wallet.add('0x5944d63891ce30f1eb98349672421dd26ca7c878af05a30a4e39444c2555afdd');


web3.eth.sendTransaction({
    from: '0xbD524F668C929efefBfCff269D70effF87E05332',
    to: '0x583cbbb8a8443b38abcc0c956bece47340ea1367',
    value: 1000000000000,
    gas:  51505
})
.then(function(receipt){
  console.log(receipt);
})
.catch(function(r) {
  console.log(r);
});


/*
var r = web3.eth.getBalance('0x261dDE07ae1768A156f5c4FEf0AC2F06a987f3CF');
r.then(function(balance) {
  console.log('BBB', balance);
});
*/

/*
web3.eth.getBlockNumber()
.then(function(r) {
  console.log(r);
  var n = r - 100;
  var txs = [];
  for(var i = n; i < r; i++) {
      var block = web3.eth.getBlock(i, true);
      block.then(function(r) {
        r.transactions.forEach(function(transaction) {
          if (transaction.to === '0x261dDE07ae1768A156f5c4FEf0AC2F06a987f3CF') {
            console.log(transaction);
          }
        })
      })
  }
})
.catch(function(e) {
  console.log(e);
})
*/
