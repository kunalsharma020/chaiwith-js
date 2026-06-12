const user={
    name:"kunal",
    price:999,
    welcome:function(){
        console.log(`${this.name} welcome to website`)
        // console.log(this)
    }
    

}

// user.welcome()
// user.name="kunal kumar"
// user.welcome()

// function chai(){
//     let name="kunal"
//     console.log(this.name)

// }
// chai()

const chai=()=>{
    let name="kunal"
    console.log(this.name)

}
// chai()

// const addtwo=(num1, num2)=>{
//     return num1+num2
// }
// console.log(addtwo(2,3))



// const addtwo=(num1, num2)=>  ( num1+num2)

const addtwo=(num1, num2)=>  ({username:"kunal"})

console.log(addtwo(2,3))

