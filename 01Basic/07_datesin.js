// date

const myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toDateString())
//console.log(myDate.toLocaleTimeString())
//console.log(myDate.toUTCString())

//console.log( typeof myDate)

const myd = new Date(2023,0,21)
console.log(myd.toDateString())

let myTimestamp = Date.now()
console.log(myTimestamp)
console.log(Math.floor(Date.now())/1000)


let nweDate = new Date()
console.log(nweDate)
console.log(nweDate.getDate())
console.log(nweDate.getDay())
console.log(myDate.getHours())
console.log(myDate.getMinutes())