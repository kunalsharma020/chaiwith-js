const marvel_hero=["Iron Man","Captain America","Thor","Hulk","Black Widow"];
const dc_hero=["Superman","Batman","Wonder "]

// marvel_hero.push(dc_hero)
// console.log(marvel_hero)

// const allhero=marvel_hero.concat(dc_hero)
// console.log(allhero)
const allhero=[...marvel_hero, ...dc_hero]
console.log(allhero)

// .flat()
