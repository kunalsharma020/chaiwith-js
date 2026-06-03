// singleton object
// object.Create()
const jsuer={
    name:"kunal",
    age:22,
    location: "mathura",
    email:"kunal@gmail.com",
    isLoggedIn:true
}
// console.log(jsuer.name) // kunal
// console.log(jsuer["email"]) // kunal@gmail.com
// jsuer.name="kunal sharma"
// object.freeze(jsuer) // freeze the object, it will not allow to change the object properties

jsuer.greeting=function(){
    console.log("hello")
}
    
jsuer.greeting2=function(){
    console.log(`hello, ${this.name}`)
}

jsuer.greeting() // hello
jsuer.greeting2() // hello, kunal sharma