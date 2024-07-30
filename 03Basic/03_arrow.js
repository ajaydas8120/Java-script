const user = {
    userName : "Ajay",
    Price : 999,

    welcomemessage:function(){
        console.log(`${this.userName},welcome to website`)
        //console.log(this)
    }
}

//console.log(this)
// user.welcomemessage()

// user.userName="sam"
// user.welcomemessage()

// function Ajay(){

//     let userName = "sammy"
//     console.log(this.userName)
// }
// Ajay()


const Ajay = function(){
    let userName="ajy"
    console.log(this.userName)
}
Ajay()


// const Ajay = ()=>{
//     let userName = "ajay"
//     console.log(this.userName)
// }
// Ajay()

// const addTwo =(num1, num2) =>{ //Arrow funcstion
//     return num1 + num2
// }
// console.log(addTwo(4,5))


//const addTwo =(num1,num2)=> num1 + num2//impliycity retrun funcstion
//console.log(addTwo(40,50))

const addTwo=(num1,num2)=>({username:"ajay"})
console.log(addTwo())


