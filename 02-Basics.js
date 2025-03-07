let num = 10;
console.log(num);

num = 20;
console.log(num);

const numConst = 10;
console.log(numConst);

// numConst = 20; // Gives error since it's a const 
// console.log(numConst);

let numFloor = 10.8;
console.log(numFloor);
console.log(Math.floor(numFloor));
console.log(Math.round(numFloor));

console.log(Math.random());

let strNum = '10.8';
console.log(Number(strNum));
console.log(parseInt(strNum));
console.log(parseFloat(strNum));

let pixels = '10.8px';
console.log(Number(pixels));
console.log(parseInt(pixels));
console.log(parseFloat(pixels));

console.log(Math.pow(2, 3));
console.log(Infinity);
console.log(-Infinity);
console.log(BigInt(100));
console.log(100n);

let str = 'abcd';
console.log(str);
console.log(str < 'efgh');
console.log('Hello this is a single quote: \'');
console.log('Hello\nworld');
console.log(`Hello 
    world ${10 + 20}`);
console.log('This is a very long string \
which will be continued in the next line');
console.log(str[1]);
console.log(str.charAt(1));
console.log(str.includes('bc'));
console.log(str.startsWith('ab'));
console.log(str.endsWith('cd'));
console.log(str.toUpperCase().toLowerCase());
console.log(str.substr(1, 1));
console.log(str.slice(1, 1));
console.log(str.slice(1, 2));
console.log(str.padStart(10, 'ABCDE'));
console.log(str.padStart(3, 'ABCDE'));
console.log(str.padEnd(10, 'ABCDE'));

let spaceStr = '   Hello World   ';
console.log(spaceStr.trim());
console.log(spaceStr.trimStart());
console.log(spaceStr.trimEnd());

str = "a,b,c,d,e";
console.log(str.split(','));
console.log(str.split('*'));

const person = {
    name: 'Conner',
    course: 'FrontendExpert',
};
console.log(person);
console.log(JSON.stringify(person));
console.log(typeof JSON.stringify(person));
console.log(JSON.parse(JSON.stringify(person)));
console.log(typeof JSON.parse(JSON.stringify(person)));
person.name = 'Clement'
console.log(person.name);

const map = new Map();
map.set(123, 'Hello');
console.log(map.get(123));
map.set(123, 'World');
console.log(map.get(123));
console.log(map.get(0));

const set = new Set();
set.add('Hello');
console.log(set.has('Hello'));
set.delete('Hello');
console.log(set.has('Hello'));
console.log(set.size);

const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr.push(6);
console.log(arr);
console.log(typeof arr);

function addTwo(num = 6){
    return num + 2;
}

console.log(addTwo());
console.log(addTwo(3));

function callFunc(func, param){
    console.log(func(param));
}

callFunc(addTwo, 10);
console.log(typeof addTwo);
console.log(addTwo instanceof Function);
console.log(addTwo instanceof Object);

for(let i = 0; i < 4; i++){
    if(i == 1){
        continue;
    }
    console.log(i);
    if(i == 3){
        break;
    }
}
let i = 0;
while(i < 4){
    console.log(i);
    i++;
}

i = 0;
do{
    console.log(i);
    i++;
}while(i < 4);

for(const value of [1, 2, 3]){
    console.log(value);
}

for(const value of 'abcd'){
    console.log(value);
}

const obj = {
    name: 'Conner',
    course: 'FrontendExpert',
};

for(const key in obj){
    console.log(key, obj[key]);
}

[1, 2, 3].forEach((value, index) => {
    console.log(value, index);
});

const conditions = [true, false, null];

for(const condition of conditions){
    if(condition){
        console.log('Yeahhh');
    }else{
        console.log('Nahhhh');
    }
}
for(const condition of conditions){
    if(condition){
        console.log('Yeahhh');
    }else if(condition === false){
        console.log('Nahhh')
    }
    else{
        console.log('Ummmm');
    }
}

const myNum = 2;

switch (myNum){
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    default:
        console.log('Default');
}

console.log(myNum > 5 ? 'Greater than 5' : 'Less than 5');

// throw new Error('This is an error'); // Throws an error

try{
    throw new Error('This is an error');
}catch(e){
    console.log(e);
}
console.log('Here');

console.log('Value');
console.error('error message');
console.debug('debug message');
console.table([[1, 2], ['Hello', 'World']]);
console.count();
console.count();
console.countReset();
console.count();
console.count('key');
console.count('key');
console.countReset();
console.count('key');
console.countReset('key');
console.count('key');
console.time(); // Can be done with keys as well
for(let i = 0; i < 1000000; i++){

}
console.timeLog();
console.timeEnd();

function foo(){
    console.trace();
}
foo();

// 'use strict'; // Enables strict mode
function strictFunction(){
    'use strict';
    let x = 3;
    console.log(x);
}

function notstrictFunction(){
    x = 3;
    console.log(x);
}

strictFunction();