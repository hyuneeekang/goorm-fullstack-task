const a = [1,2,3,4,5,6,7,8,9,10];
var a_even = [];
var a_odd = [];
var a_add = [];

console.log(`a: [${a}]`);
for(let i=0; i<a.length; i++){
    if(a[i] % 2 === 0){
        a_even.push(a[i]);
    }
}
console.log(`짝수만 출력: [${a_even}]`);

for (let num of a){
    if(num % 2 ==! 0){
        a_odd.push(num);
    }
}
console.log(`홀수만 출력: [${a_odd}]`);

for (let num of a){
    num += 1;
    a_add.push(num);
}
console.log(`a + 1: [${a_add}]`);