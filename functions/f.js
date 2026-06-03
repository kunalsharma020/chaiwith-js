// function say(name){
//     console.log(`hello, ${name}`)
// }
// say("kunal") // hello, kunal

// function add(a, b){
//     return a+b
// }

// console.log(add(2, 3)) // 5

// function addtwonum(num1, num2){
//     let result=num1+num2
//     return result

//     return num1+num2 // this will not execute because the function has already returned
// }
// console.log(addtwonum(4, 5)) // 9

// function loginuser(username){
//     if(username==="kunal"){
//         return "welcome back, kunal" 
        
//     }
//     return `${username} just logged in`
// }
// console.log(loginuser("kunal")) // welcome back, kunal


function cartpricecalculate(...num1){
    return num1
}
console.log(cartpricecalculate(1000, 2000, 3000)) // [1000, 2000, 3000]

const user={
    name:"kunal",
    price:10000,
}
function handleObject(anyobject){
    console.log(`username is${anyobject.username} and price is ${anyobject.price}`)
}

handleObject(user) // username isundefined and price is 10000

const arr=[1, 2, 3, 4, 5]

function returnsecondval(getarr){
    return getarr[1]
}
console.log(returnsecondval(arr)) // 2