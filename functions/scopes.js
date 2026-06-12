// let a=10
// const b=10
// var c=30
// console.log(a, b, c) // 10 10 30

// a=20
// // b=20 // error: Assignment to constant variable.
// c=40
// console.log(a, b, c) // 20 10 40

// let a=10
// if(true){
//     let a=50
//     const b=50
//     var c=50
//     console.log(a)
// }
// console.log(a)


function one(){
    const username="kunal"
    function  two(){
        const website="sharma"
        // console.log(username) // kunal
        
    }
    // console.log(website) // error: website is not defined

    two()
}
one()

if(true){
    const username="kunal"
    if(username==="kunal"){
        const website="sharma"
        // console.log(username + website)
    }
    // console.log(website) // error: website is not defined
}
// console.log(username) // error: username is not defined


// /+++++++++++++++++++++++++++++++++++++++++++++++++++=++
console.log(add(5)) // 6)
function add(value){
    return value+1;
}


const addtwo=function(num){
    return num+2
}
addtwo(5)