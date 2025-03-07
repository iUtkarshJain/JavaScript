// Overview

const myKey = 'key';

const website = {
    name: 'WebBest',
    rating: 5,
    founders: ['Ned', 'Sophie'],
    isAwesome: true,
    'multi word key': 0,
    [myKey]: 'value',
};

console.log(website);
console.log(website.name);
console.log(website['multi word key']);
console.log(website[myKey]);

website.name = 'WebWorst';
console.log(website.name);

website.foo = 'bar';
console.log(website);

delete website.foo;
console.log(website);

// Object Equality

const obj = {};
console.log(obj === {}); // false, JavaScript compares objects by reference, not value.

const firstName = 'Conner';
const obj1 = {
    firstName: firstName,
};

const obj2 = {
    firstName,
};

console.log(obj1);
console.log(obj2);

// Object Constructor

const obj3 = new Object();
console.log(obj3);
obj3.name = 'Conner';
console.log(obj3);

// Function Constructor
function Website(name, rating, founders, isAwesome){
    this.name = name;
    this.rating = rating;
    this.founders = founders;
    this.isAwesome = isAwesome;
}

const facebook = new Website('Facebook', 4.5, ['Mark', 'Eduardo'], true);
console.log(facebook);

// Symbol
const id = Symbol('id');
const id2 = Symbol('id');

console.log(id === id2); // false

const id3 = Symbol.for('id');
const id4 = Symbol.for('id');

console.log(id3 === id4); // true
console.log(id === id3); // false

const obj4 = {
    [id]: 1,
    [id2]: 2,
    id: 'hello',
    id: 'world',
};

console.log(obj4);

// Checking if key is in an object

console.log('name' in website);
console.log('foo' in website);

console.log(website.hasOwnProperty('name'));
console.log(website.hasOwnProperty('foo'));

// There is differen between in and hasOwnProperty when it comes to inheritance
console.log('toString' in website);
console.log(website.hasOwnProperty('toString'));

// Not recommended
console.log(website.name !== undefined);
console.log(website.foo !== undefined);

// Methods, getter and setter in objects
const obj5 = {
    name: 'SomeName',
    rating: 10,
    founders: ['Ned', 'Sophie'],
    sayHello() {
        console.log('Hello');
    },
    sayBye: () => console.log('Bye'),
    get getRating() {
        return this.rating;
    },
    set setRating(value) {
        this.rating = value;
    },
};

console.log(obj5);
obj5.sayHello();
obj5.sayBye();
console.log(obj5.getRating);
obj5.setRating = 5;
console.log(obj5.getRating);

// Inheritance
 
const obj6 = {
    foo: 'bar',
    [Symbol('id')]: 0,
    __proto__: obj5,
};
console.log(obj6);
console.log(obj6.name);

// Interating over objects

console.log(Object.keys(obj6)); // Returns an array of keys but not inherited keys and symbols
console.log(Object.values(obj6)); // Returns an array of values but not inherited values and symbols
console.log(Object.entries(obj6)); // Returns an array of key value pairs but not inherited key value pairs and symbols

Object.entries(obj6).forEach(function([key, value]){
    console.log(key, value);
});

for(key in obj6){
    console.log(key, obj6[key]);
}

// Copying objects

const obj7 = {
    original: 123,
};

Object.assign(obj7, obj6);
console.log(obj7);

// Enumerable properties → Can be iterated over.
// Non-enumerable properties → Cannot be iterated over, but they still exist in the object.

// Freezing objects -> prevents modifications, additions and deletions of properties. (Can't be undone)

Object.freeze(obj7);
obj7.original = 456;
obj7.newKey = 'New Value';
console.log(Object.isFrozen(obj7));
console.log(obj7);

// Sealing objects -> prevents additions and deletions of properties. (Can't be undone)
const obj8 = {
    oldKey: 'Old Value',
};
Object.seal(obj8);
console.log(Object.isSealed(obj8));
obj8.oldKey = 'New Value';
obj8.newKey = 'New Value';
console.log(obj8);

// Coverting to primitives
const obj9 = {
    name: 'Conner',
    rating: 10,
    founders: ['Ned', 'Sophie'],
    [Symbol.toPrimitive](hint){
        if(hint === 'number'){
            return 5;
        }else if(hint === 'string'){
            return 'Hello';
        }else{
            return 1;
        }
    },
};

console.log(obj9.toString());
obj9.toString = function(){
    return `${this.name} has a rating of ${this.rating}`;
};
console.log(obj9.toString());

console.log(obj9.valueOf());
obj9.valueOf = function(){
    return 2;
};
console.log(obj9 - 1);

console.log(Number(obj9));
console.log(String(obj9));

console.log(10 - obj9);
console.log(10 + obj9);
