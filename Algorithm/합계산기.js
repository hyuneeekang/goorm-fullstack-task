// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	let lineCount = 0;
	let T = 0;
	let formula = '';
	let result = 0;
	
	
	for await (const line of rl) {
		input.push(line);
		T = Number(input[0]);
		lineCount ++;
		
		if(lineCount === T+1) rl.close();
	}
	input.splice(0,1);
	for(let i=0 ; i<input.length ; i++){
		formula = input[[i]].split(' '); // 1, +, 3
		result += calculate(formula);
	}
	
	
	
	console.log(result);
	process.exit();
})();

function calculate(formula) {
	let numA = Number(formula[0]);
	let operator = formula[1];
	let numB = Number(formula[2]);
	
	if(operator == '+'){
		return numA+numB;
	} else if(operator == '-'){
		return numA-numB;
	} else if(operator == '*'){
		return numA*numB;
	} else if(operator == '/'){
		return Math.floor(numA/numB);
	}
	
}