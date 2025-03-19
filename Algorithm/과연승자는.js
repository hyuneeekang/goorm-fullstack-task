// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	let N = 0;
	let lineCount = 0;	
	
	for await (const line of rl) {
		input.push(line);
		N = Number(input[0]);
		lineCount ++;
	
		if(lineCount === 3) rl.close();
	}
	let A = input[1].split(' ').map(Number);
	let B = input[2].split(' ').map(Number);
	let scoreA = 0;
	let scoreB = 0;
	// console.log(A, B); //[ 1, 2, 3 ] [ 4, 5, 6 ]
	
	for(let i=0 ; i<N ; i++){
		if(Number(A[i]) > Number(B[i])) {
			scoreA += 2;
			if((Number(A[i]) - Number(B[i])) == 7) {
				scoreA -= 3;
				scoreB += 3;
			}
		}
		else if(Number(A[i]) < Number(B[i])) {
			scoreB += 2;
			if((Number(B[i]) - Number(A[i])) == 7) {
				scoreB -= 3;
				scoreA += 3;
			}
		}
		else if(Number(A[i]) == Number(B[i])) {
			scoreA += 1;
			scoreB += 1;
		}
	}
	console.log(scoreA, scoreB);
	
	
	
	
	
	process.exit();
})();
