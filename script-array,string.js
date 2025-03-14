const a = [1,2,3,4,5,6,7,8,9,10];
console.log(`Array a = ${a}`);

const a_push = a.push(11);
console.log(`a.push(11)=> ${a}`);

const a_pop = a.pop();
console.log(`a.pop: ${a_pop}`);
console.log(`a.pop()=> ${a}`);

const a_shift = a.shift();
console.log(`a.shift()=> ${a}`);

let a_slice = a.slice(2,5);
console.log(`a.slice(2,5)=> ${a_slice}`);
a_slice = a.slice(-3);
console.log(`a.lice(-3)=> ${a_slice}`);

const a_map = a.map(value => value * 2);
console.log(`a.map=> ${a_map}`);


const str1 = 'Hello';
const str2 = 'World';
let str = '';
str = str.concat(str1,", ",str2,"!");
console.log(`str1 = ${str1}, str2 = ${str2}
    concat => ${str}`);
console.log(`toUpperCase: ${str.toUpperCase()}`);
console.log(`substring(0,4)=> ${str.substring(0,4)}`);
console.log(`substring(4)=> ${str.substring(4)}`);

const indexOf = str.indexOf(str2);
str.indexOf(str2)