// Anonymouse and Arrow Functions

// Version 1
const arrOne = [1, 2, 3, 4];

const doubledOne = arrOne.map(double);

function double(num){
    return num * 2;
}

console.log(doubledOne);

// Version 2
const doubledTwo = arrOne.map(function(num){
    return num * 2;
});

console.log(doubledTwo);

// Version 3
const doubledThree = arrOne.map(num => num * 2);
console.log(doubledThree);

// Version 4
const doubleArrow = num => num * 2; // Should be decalred before use unlike function declaration
const doubledFour = arrOne.map(doubleArrow);
console.log(doubledFour);

// Desctructuring Assignment
const [first, second] = arrOne;
console.log(first, second);

// ...rest operator
const [firstOne, secondOne, ...rest] = arrOne;
console.log(firstOne, secondOne, rest);

const obj = {
    key1: 1,
    key2: 2,
    key3: 3,
    key4: 4,
};

const { key1: aliasKeyOne, key2, defaultValue = "Some value", ...restObj } = obj;
console.log(aliasKeyOne, key2, defaultValue, restObj);

const person = {
    name: 'Conner',
    website: 'leetcode.com',
};

function printName({ name }) {
    console.log(name);
}

printName(person);

// ...spread operator
const arrTwo = [1, 2, 3, 4];
const arrThree = [5, 6, 7];

function add(x, y){
    console.log(x + y);
}

add(...arrTwo);

const combined = [0, ...arrTwo, 4.5, ...arrThree];
console.log(combined);

function logParams(x, ...rest){
    console.log(x);
    console.log(rest);
}

logParams(1, 2, 3, 4, 5);

// Template Literals
const name = 'Conner';

console.log('Hello, ' + name + '! ' + (1 + 2));
console.log(`Hello, ${name}! ${1 + 2}`);

// Null Coalescing Operator
const defaultName = name ?? 'Default Name';
console.log(defaultName);

const nullName = null;
const undefinedName = undefined;
const defaultNullName = nullName ?? 'Default Null Name';
const defaultUndefinedName = undefinedName ?? 'Default Undefined Name';
console.log(defaultNullName);
console.log(defaultUndefinedName);

// Optional Chaining
const outerObj = {
    // innerObj: {
    //     innerKey: 'Inner Value',
    // },
};

console.log(outerObj?.innerObj?.innerKey ?? 'Foo');

// Short-circuit Evaluation

const shouldRunCode = true;

function logWorld(){
    console.log('Hello World');
}

shouldRunCode && logWorld();