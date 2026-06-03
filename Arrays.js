const myArr=[1,2,3,4,5]
// console.log(myArr[0])
// console.log(myArr[1])
// console.log(myArr[2])
// console.log(myArr[3])
// console.log(myArr[4])

const myHeroes=['Superman','Batman','Spiderman','Ironman','Thor']
const myarr=new Array(1,2,3,454,5)


// array methods
// myarr.push(6) // [1 2 3 454 5 6]
// myarr.unshift(0) // [0 1 2 3 454 5 6]
// myarr.pop() // [0 1 2 3 454 5]
// myarr.shift() // [1 2 3 454 5]

// console.log(myarr.includes(3)) // true
// console.log(myarr.includes(10)) // false

// console.log(myarr.indexOf(454)) // 3
// console.log(myarr.indexOf(10)) // -1
const myarr2=myarr.join()
console.log(myarr2) // 1,2,3,454,5  
typeof myarr2 // string

// slice and splice
console.log("A", myarr) // A [1, 2, 3, 454, 5]
const myn1=myarr.slice(1,3) // [2, 3]
console.log("B", myarr) // B [1, 2, 3, 454, 5]
const myn2=myarr.splice(1,3) // [2, 3, 454]

// diff between slice and splice
// slice does not modify the original array, it returns a new array with the selected elements
// splice modifies the original array, it removes the selected elements and returns them as a new array