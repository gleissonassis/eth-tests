var Web3 = require('web3');

var web3 = new Web3();

web3.setProvider(new web3.providers.HttpProvider('https://ropsten.infura.io'));
console.log('Getting contract tokens balance.....');

var addr = ('0xbD524F668C929efefBfCff269D70effF87E05332');

console.log("Address: " + addr);

var contractAddr = ('0x583cbBb8a8443B38aBcC0c956beCe47340ea1367');

var tknAddress = (addr).substring(2);

var contractData = ('0x70a08231000000000000000000000000' + tknAddress);

web3.eth.call({
    to: contractAddr,
    data: contractData
    }, function(err, result) {
	if (result) {
		var tokens = web3.utils.toBN(result).toString();
		console.log('Tokens Owned: ' + web3.utils.fromWei(tokens, 'ether'));
	}
	else {
		console.log(err); // Dump errors here
	}
});
