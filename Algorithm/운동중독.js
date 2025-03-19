// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let W = 0;
	let R = 0;
	let result = 0;
	let input_val = [];
	
	for await (const line of rl) {
		input_val = line.split(' ');
		rl.close();
	}
	W = input_val[0];
	R = input_val[1];
	result = W * (1+R/30);
	
	console.log(Math.floor(result));
	process.exit();
})();
