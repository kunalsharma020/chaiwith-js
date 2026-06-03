const name="kunal"
const repocount=50

console.log(name+recount) //kunal50
console.log(`${name} and ${repocount}`)//kunal and 50

const getname=new String("kunal-sh")

// console.log(getname[0]) //k
// console.log(getname.length) //5
// console.log(getname.toUpperCase()) //KUNAL
// console.log(getname.toLowerCase()) //kunal
// console.log(getname.includes("na")) //true
// console.log(getname.startsWith("ku")) //true
// console.log(getname.endsWith("al")) //true  
// console.log(getname.indexOf("na")) //2
// console.log(getname.slice(1,4)) //una
// console.log(getname.substring(1,4)) //una
// console.log(getname.substr(1,3)) //una
// console.log(getname.replace("na","NA")) //kuNAL
// console.log(getname.trim()) //kunal
// console.log(getname.split("")) //['k', 'u', 'n', 'a', 'l']
// console.log(getname.__proto__) //String {length: 0, constructor: ƒ, anchor: ƒ, big: ƒ, blink: ƒ, …}
// console.log(getname.charAt(0)) //k
// console.log(getname.concat(" kumar")) //kunal kumar

// const name=getname.substring(0, 4)
// console.log(name) //kuna

// const name=getname.slice(0, 4)
// console.log(name) //kuna difference between slice and substring is that slice can accept negative index but substring cannot accept negative index

// const name="   kunal "
// console.log(name.trim()) //kunal

const url="https://www.youtube.com/ channel/UCWv7vMbMWH4-V0ZXdmDpPBA"
console.log(url.replace(" ", "")) //https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA


url.includes("youtube") ? console.log("yes") : console.log("no") //yes

// string to arr
console.log(name.split('-')) //['kunal', 'sh']

// arr to string
const arr=["kunal", "sh"]
console.log(arr.join('-')) //kunal-sh