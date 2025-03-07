// All the variables are hoisted but only var is initialized with undefined
// let and const are not initialized

// var is function scoped or global scoped
// let and const are block scoped

function test(){
    if(true){
        var a = 5;
        let b = 10;
    }

    console.log(a);
    // console.log(b); // ReferenceError: b is not defined
}

test();

console.log(varNum);
// console.log(letNum); // ReferenceError: Cannot access 'letNum' before initialization

var varNum = 5;
let letNum = 10;

console.log(varNum);
console.log(letNum);