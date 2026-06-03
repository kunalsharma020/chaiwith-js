 console.log(2>1) // true
console.log(2<1) // false
console.log(2>=2) // true
console.log(2<=2) // true
console.log(2==2) // true
console.log(2!=2) // false

console.log("2"==2) // true -> only value is compared not the type
console.log("2"===2) // false -> value and type both are compared
console.log("02">1) // true -> string is converted to number and then compared

console.log(null==undefined) // true -> only value is compared
console.log(null===undefined) // false -> value and type both are compared
console.log(null>0) // false -> null is converted to 0 and then compared
console.log(null<0) // false -> null is converted to 0 and then compared
console.log(null==0) // false -> null is converted to 0 and then compared
console.log(null>=0) // true -> null is converted to 0 and then compared