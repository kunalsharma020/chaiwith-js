const tinderuser=new Object()
tinderuser.id="123abs"
tinderuser.name="John Doe"
tinderuser.age=30
tinderuser.isLoggedIn=true

// console.log(tinderuser)

const regular={
    email:"kunal@gmail.com",
    fullname:{
        userfullname:{
            firstname:"kunal",
            lastname:"sharma"
        }
    }
}
// console.log(regular.fullname.userfullname.lastname)

const obj1={1:"a", 2:"b", 3:"c"}
const obj2={4:"d", 5:"e", 6:"f"}
const obj3={...obj1, ...obj2}
// console.log(obj3)

const users=[
    {id:1,
        email:"kk@gmail.com"},
    {id:2,
    email:"kunal@gmail.com"},
    {id:3,
    email:"john@gmail.com"}
]

users[1].email
console.log(tinderuser)
console.log(Object.keys(tinderuser))
console.log(Object.values(tinderuser))