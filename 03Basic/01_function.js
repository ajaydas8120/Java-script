// function sayMyName(){
//     console.log("A")
//     console.log("J")
//     console.log("A")
//     console.log("Y")
// }
// (sayMyName());


// // function addTwoNumbers(number1 ,number2){
// //     console.log(number1 + number2)

// // }


// function addTwoNumbers(number1 ,number2){
//        return number1 + number2;
//     }
//     const result =addTwoNumbers(10,20)
//  console.log(result,"result")

//  function addTwoNumbers(number1 ,number2){
//     let result = number1 + number2
//     console.log("Ajay")
//     return result

// //  }
// //  const result =addTwoNumbers(10,20)
// // console.log(result,"result");

function justUserMassage(username){
    if(username===undefined){
        console.log("plese enter a usear name")
        return

    }
    return `${username} just logged in`
}
  //console.log(justUserMassage("Ajay"))
  console.log(justUserMassage())


// function calculatePrimePrice(value1,value2, ...num1){
//     return num1
// }
//  console.log(calculatePrimePrice(200,300,400,500,400))

// const user = {
//     userName : "Ajay",
//     price : 999
// }

// function handalObject(anyObject){
//     console.log(`user name is ${anyObject.userName} price is ${anyObject.price}`);

// }
// handalObject(user);

const newArry =[100,200,300,400]

function returnSecondValue(getArray){
    return getArray

}
console.log(returnSecondValue(newArry));