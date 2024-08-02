const myNums = [1,2,3,4,5,6,7]
// const newNUbs = myNums.filter((num)=>{
//      return num > 4

// })
// console.log(newNUbs)

const newnums = []

myNums.forEach((num)=>{
    if(num>4){
        newnums.push(num)
    }
})

console.log(newnums)