// let myDate=new Date()
// console.log(myDate.toString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())

// let myDate2=new Date(2024,0, 23)
// console.log(myDate2.toString())
// console.log(myDate2.toLocaleString())
// console.log(myDate2.toLocaleDateString())
// console.log(myDate2.toLocaleTimeString())

// let myTimeStamp=Date.now()
// console.log(myTimeStamp)
// console.log(Math.floor (Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDate())
console.log(newDate.getFullYear())
console.log(newDate.getHours())
console.log(newDate.getMinutes())
console.log(newDate.getSeconds())

// `${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`

newDate.toLocaleString('deault', {
    weekday:'long',
    timeZone:'UTC'
})