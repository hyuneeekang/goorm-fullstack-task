// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	let lineCount = 0;
	let N = 0;
	let itemList = [];
	class Item {
		construction(name, price){
			this.name = name;
			this.price = price;
		}
	}
	
	
	for await (const line of rl) {
		input.push(line);
		N = Number(input[0]);
		lineCount++;
		
		if(lineCount == N+1) rl.close();
	}
	input.splice(0,1);
	
	for(let i=0 ; i<input.length ; i++){
		let oneItem = new Item;
		oneItem.name = input[i].split(' ')[0];
		oneItem.price = input[i].split(' ')[1];
		itemList.push(oneItem);
	}
	
	let expensiveOne = getMaximum();
	let cheapOne = getMinimum();
	
	console.log(expensiveOne.name, expensiveOne.price);
	console.log(cheapOne.name, cheapOne.price);

	
	
	
	
	function getMaximum(){
	let expensivePrice = Number(itemList[0].price); //Number 붙여....
	let expensiveId = 0;
	for(i=0 ; i<itemList.length ; i++){
		if(Number(itemList[i].price) > expensivePrice){
			expensivePrice = itemList[i].price;
			expensiveId = i;
		}
	}
	// console.log(itemList[expensiveId]);
	return itemList[expensiveId];
}
	function getMinimum(){
	let cheaprice = Number(itemList[0].price);
	let cheapId = 0;
	for(i=0 ; i<itemList.length ; i++){
		if(Number(itemList[i].price) < cheaprice){
			cheaprice = itemList[i].price;
			cheapId = i;
		}
	}
	return itemList[cheapId];
}
	
	
	
	process.exit();
})();


	
	
	