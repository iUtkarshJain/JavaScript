// Equality operators

console.log(5 == 5); // "loose" equality, values
console.log(5 === 5); // "strict" equality, values and types

console.log(5 == '5'); // true, due to implicit type coercion
console.log(5 === '5'); // false

// Type Coercion

console.log(Number(false)); // 0
console.log(Number(true)); // 1 

console.log(true == 1); // true
console.log(false == 1); // false
console.log(false == 0); // true
console.log(true == 0); // false

console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(String(0)); // '0'
console.log(String(1)); // '1'

// NaN, Is not equal to anything, including itself

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(Number('abc')); // NaN

// Checking for null and undefined

console.log(null == undefined); // true, only for null and undefined
console.log(null === undefined); // false

const val = undefined;

// All three below are equivalent

if(val == null || val == undefined){
    console.log('Value is either null or undefined');
}

if(val == null){
    console.log('Value is either null or undefined');
}

if(val == undefined){
    console.log('Value is either null or undefined');
}

// Object Equality
// JavaScript compares objects by reference, not value.

console.log({} == {}); // false
console.log({} === {}); // false

const obj = {};
console.log(obj == obj); // true
console.log(obj === obj); // true

// Same goes for arrays, as they are objects
const arr = [];

console.log(arr == arr); // true
console.log(arr === arr); // true

console.log([] == []); // false
console.log(arr == []); // false