// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let lineCount = 0;
	let input = [];
	let N = 0;
	let As = [];
	let result = 0;
	
	for await (const line of rl) {
		input.push(line);
		lineCount ++;
		if(lineCount === 2)
			rl.close();
	}
	N = input[0].split(' ').map(Number);
	As = input[1].split(' ').map(Number);
	
	result = N*2 + As[0] + As[N-1];
	for (let i=0 ; i<As.length ; i++){
		if(i === 0) continue;
		result += Math.abs(As[i]-As[i-1]);
	}
	
	console.log(result);
	
	process.exit();
})();
