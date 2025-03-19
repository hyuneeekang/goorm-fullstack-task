// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount = 0;
	let input = [];
	let T = 0;
	let AB = [];
	let A = 0;
	let B = 0;
	let caseCount = 0;
	
	for await (const line of rl) {
		input.push(line);
		T = Number(input[0]); //Number 함수 !!!!!!1

		lineCount++;
		
		if(lineCount == T+1)	rl.close();
	}
	
	
	input.splice(0, 1);
	for(let i=0 ; i<input.length ; i++){
		AB = input[i].split(' ').map(Number);
		A = AB[0];
		B = AB[1];
		
		if(isGoldRatio(A, B)){
			caseCount ++;
		}
	}
	function isGoldRatio(A_val, B_val){
		if(A_val > B_val){
			if( A_val >= B_val*1.6 && A_val <= B_val*1.63)
				return true;
			else
				return false;
		}
		else if(A_val < B_val){
			if( B_val >= A_val*1.6 && B_val <= A_val*1.63)
				return true;
			else
				return false;
		}
	}
	
	console.log(caseCount);
	
	process.exit();
})();
