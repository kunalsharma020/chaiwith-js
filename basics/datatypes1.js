// primitive data types
let name = "John"; // string
let age = 30; // number
let isStudent = true; // boolean
let address = null; // null
let phone; // undefined     
// null and undefined are also primitive data types in JavaScript.
bigInt = 1234567890123456789012345678901234567890n; // bigInt

// non-primitive data types
arays = [1, 2, 3, 4, 5]; // array
let person = { // object
    name: "John",
    age: 30,
    isStudent: true
};
function greet() { // function
    console.log("Hello!");
}

// javascipt is a dynamically typed language, which means that the type of a variable is determined at runtime and can change during the execution of the program. For example:

// +++++++++++++++++++++++++++++++++++++++++++++++
//  stack memory (primitve data types) and heap memory (non-primitive data types

let myYoutubechannel="john"; // stored in stack memory

let myYoutubechannel2=myYoutubechannel; // stored in stack memory
console.log(myYoutubechannel); // john
console.log(myYoutubechannel2); // john

let userOne={
    name:"john",  
    channel:"john"
    email:""
} // stored in heap memory

let user2=userOne; // stored in heap memory
let user2.email="kunal@gmail.com";
console.log(userOne); // { name: 'kunal', channel: 'kunal', email: 'kunal@gmail.com' }