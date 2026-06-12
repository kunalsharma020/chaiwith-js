// for

// for (let index=0;index<array.length;index++){
//     const element=array[index];
// }

// for (let index=0;index<10;index++){
//     const element=index;
//     if(element==8){
//         console.log("8 is best")
//     }
//     console.log(index);

// }
// ++++++++++++++++++++++++++++++++++++++++++

//  for of 
// ["","",""]

// const arr=[1,2,3,4,5,6]
// for (const i of arr) {
//     console.log(i)    
// }

// map
const map=new Map()
map.set('IN', "India")
map.set('INi', "Indiana")
map.set('N', "norway")
// console.log(map)

// for(const [i, val] of map){
//     console.log(i, "-> ", val)
// }

// const myObject={
//     "game1":"NFS",
//     "game2":"spiderman"
// }

// for(const [key, val] of myObject){
//     console.log(key, val)
// }

//  for each 
// const coding=["js","cpp", "java", ]
// coding.forEach( function (item) {
//     console.log(item)
// } ) 


// object

const coding =[
    {
        languagename:"javascript",
        name:"js"
    },
    {languagename:"java",
        name:"java"},
    {languagename:"cpp",
        name:"c++"}
]

coding.forEach( (item)=>{
    console.log(item.languagename)
    console.log(item.name)
})