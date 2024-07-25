const name = "Ajay"
const repoCount = 50
//console.log(name + repoCount + " value")

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

//console.log(name[0]);


const newGame = new String ("freefire")
console.log(newGame[3])
console.log(newGame.length)
console.log(newGame.toUpperCase())
console.log(newGame.toLowerCase())
console.log(newGame.charAt(2))
console.log(newGame.indexOf('i'))

const newstring = newGame.substring(0,4)
console.log(newstring)

const anotherStrings = newGame.slice(-8,4)
console.log(anotherStrings)

const ab = "   ajaybairagi "
console.log(ab)
console.log(ab.trim())


const url = "https://ajay.com/ajay%3bairagi"
console.log(url.replace('%3','-'))
console.log(url)