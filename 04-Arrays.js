// Creating Arrays

// const emptyArray = [];
// const numbers = [1, 2, 3, 4, 5];
// const mixedArray = [1, 'Hello', true, null, undefined, [1, 2, 3]];

 // Using the Array constructor

// const emptyArrayAgain = new Array();
// console.log(emptyArrayAgain);

// const numbersAgain = new Array(1, 2, 3, 4, 5);
// console.log(numbersAgain);

// const mixedArrayAgain = new Array(1, 'Hello', true, null, undefined, [1, 2, 3]);
// console.log(mixedArrayAgain);

// const arrayWithLength = new Array(5);
// console.log(arrayWithLength);
// console.log(arrayWithLength.length);
// console.log(arrayWithLength[0]);

// const filledArray = new Array(5).fill(0);
// console.log(filledArray);
// arrayWithLength.fill(1);
// console.log(arrayWithLength);

// const arr = new Array();
// arr.length = 10;
// console.log(arr);

// const arrOne = [1, 2, 3];
// arr.length = 1; // Truncates the array
// console.log(arrOne);
// arr.length = 3; // Expands the array with undefined
// console.log(arrOne);


// Getting and editing elements
// const arr = [1, 2, 3, 4, 5];
// console.log(arr[0]);
// arr[1] = 10;
// console.log(arr);

// Finding a value
// const arr = [1, 2, 3, 3];
// console.log(arr.includes(3));
// console.log(arr.indexOf(3));
// console.log(arr.lastIndexOf(3));

// Adding and removing elements
// const arr = [1, 2, 3];

// arr.push(4);
// console.log(arr);

// console.log(arr.pop());
// console.log(arr);

// for(let i = 0; i < 10; i++)
//     console.log(arr.pop());

// console.log(arr);
// arr.push(1, 2, 3);
// console.log(arr);

// arr.unshift(0); // inserts at the beginning but takes O(n) time
// console.log(arr);
// arr.shift(); // removes from the beginning but takes O(n) time
// console.log(arr);

// // Type of array
// console.log(typeof arr); // object
// console.log(Array.isArray(arr)); // true
// console.log(arr instanceof Array); // true
// console.log(arr instanceof Object); // true

// Deleting and replacing elements
const arr = [1, 2, 3, 4, 5];

arr.splice(1, 2); // Removes 2 elements at index 1
console.log(arr);

arr.splice(1, 0, 2, 3); // Inserts 2, 3 at index 1
console.log(arr);

arr.splice(1, 2, 'Hello'); // Replaces 2, 3 with 'Hello' at index 1
console.log(arr);

arr.splice(1, 1, 2, 3); // Replaces 2 with 2, 3 at index 1
console.log(arr);

const newArr = arr.slice(1, 3); // Returns a new array from index 1 to 3
console.log(newArr);

// Slice returns a new array while splice modifies the original array
// Slice does not modify the original array

// Concatenating arrays
const arrOne = [1, 2, 3];
const arrTwo = [4, 5, 6];
const arrThree = arrOne.concat(arrTwo);
console.log(arrThree);

// Reversing inplace
const arrFour = [1, 2, 3];
arrFour.reverse();
console.log(arrFour);

// All the elements into a string
const arrFive = [1, 2, 3];
console.log(arrFive.join());
console.log(arrFive.join(''));
console.log(arrFive.join('-'));

// Looping
const arrSix = [1, 2, 3];

for(let i = 0; i < arrSix.length; i++)
    console.log(arrSix[i]);

for(const value of arrSix)
    console.log(value);

arrSix.forEach(function(value){
    console.log(value);
});
arrSix.forEach(function(value, index){
    console.log(value, index);
});
arrSix.forEach(function(value, index, arr){
    console.log(value, index, arr);
});
arrSix.forEach(function(value, index, arr){
    console.log(value, index, arr, this); 
}, {num: 10});

// Map function
const arrSeven = [1, 2, 3];

const mappedArray = arrSeven.map(function(value, index, array){
    return value + index + this.num + array.length;
}, {num: 10});
console.log(mappedArray); // [1 + 0 + 10 + 3 = 14, 2 + 1 + 10 + 3 = 16, 3 + 2 + 10 + 3 = 18]


// Filter function
const filledArray = arrSeven.filter(function(val, idx, nums){
    return val + idx + this.num >= nums.length; 
}, {num: 1});
console.log(filledArray);

// Find function
const foundValue = arrSeven.find(function(val, idx, nums){
    return val + idx + this.num >= nums.length;
}, {num: 1});
console.log(foundValue);

// FindIndex function
const foundIndex = arrSeven.findIndex(function(val, idx, nums){
    return val + idx + this.num >= nums.length;
}, {num: 1});
console.log(foundIndex);

// Every function
const allValues = arrSeven.every(function(val, idx, nums){
    return val + idx + this.num >= nums.length;
}, {num: 1});
console.log(allValues);

// Some function
const someValues = arrSeven.some(function(val, idx, nums){
    return val + idx + this.num >= nums.length;
}, {num: 1});
console.log(someValues);

// Reduce function
// array.reduce(callback, initialValue)
// callback: A function that executes on each element, taking four arguments:

// accumulator: Stores the accumulated result.
// currentValue: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array on which reduce() is called.
// initialValue (optional): The initial value of the accumulator. If omitted, the first element of the array is used as the initial value.

const sum = arrSeven.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(sum);

const str = arrSeven.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, '');
console.log(str);

const reversedStr = arrSeven.reduceRight(function(accumulator, currentValue){
    return accumulator + currentValue;
}
, '');
console.log(reversedStr);

// Sort
const arrEight = [5, 7, 3, 0];

arrEight.sort(compareNumbers);

function compareNumbers(firstNumber, secondNumber){
    if(firstNumber === 3)
        return -1;
    if(secondNumber === 3)
        return 1;
    return firstNumber - secondNumber;
}

console.log(arrEight);
