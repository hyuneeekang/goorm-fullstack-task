// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	let lineCount = 0;
	let N = 0;
	let M = 0;
	let xs = 0;
	let H = [];
	let Q = 0;
	let D = [];
	let result = 0;
	
	for await (const line of rl) {
		input.push(line);
		lineCount ++;
		
		if(lineCount == 4) rl.close();
	}
	
	N = Number(input[0].split(' ')[0]);
	M = Number(input[0].split(' ')[1]);
	xs = Number(input[0].split(' ')[2]);
	Q = Number(input[2]);
	for(let i=0 ; i<N ; i++){
		H.push(input[1].split(' ')[i]);
	}
	H = H.map(Number);
	for(let i=0 ; i<Q ; i++){
		D.push(input[3].split(' ')[i]);
	}
	
	// 나무 번호랑 배열 인덱스랑 맞추기
	H.unshift(0);
	let x = xs; //위치한 나무 번호 (초기값 xs)
	
	//벌목 START
	for(let i=0 ; i< Q ; i++){
		if( H[x] >= M){
			result += H[x];
			H[x] = 0;
		}
				
		if(D[i] == 'L'){
			if(x == 1) x = N;
			else
				x = x-1;
		}
		else if(D[i] == 'R'){
			if(x == N) x = 1;
			else
				x = x+1;
		}
		H = H.map( a => a+1 );
	
	}
	console.log(result);
	
	
	
	process.exit();
})();



/*********** 최적화 (feat.chat GPT) ************/
// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let input = [];
	let lineCount = 0;
	let N = 0;
	let M = 0;
	let xs = 0;
	let H = [];
	let Q = 0;
	let D = [];
	let result = 0;
	
	for await (const line of rl) {
		input.push(line);
		lineCount ++;
		
		if(lineCount == 4) rl.close();
	}
	
	N = Number(input[0].split(' ')[0]);
	M = Number(input[0].split(' ')[1]);
	xs = Number(input[0].split(' ')[2]);
	Q = Number(input[2]);
	for(let i=0 ; i<N ; i++){
		H.push(input[1].split(' ')[i]).map(Number);
	}
	// H = H.map(Number);
	for(let i=0 ; i<Q ; i++){
		D.push(input[3].split(' ')[i]);
	}
	
	// 나무 번호랑 배열 인덱스랑 맞추기
	// H.unshift(0);
	let x = xs-1; //위치한 나무 번호 (초기값 xs)
	
	//벌목 START
	for(let i=0 ; i< Q ; i++){
		if( H[x] >= M){
			result += H[x];
			H[x] = 0;
		}	
				
		if(D[i] == 'L'){
            if(x == 1 ? x=N : x-=1);
			// if(x == 1) x = N;
			// else
			// 	x = x-1;
		}
        
		else if(D[i] == 'R'){
            if(x == N ? x = 1 : x += 1);
			// if(x == N) x = 1;
			// else
			// 	x = x+1;
		}
		H = H.map( a => a+1 );
	
	}
	console.log(result);
	
	
	
	process.exit();
})();
