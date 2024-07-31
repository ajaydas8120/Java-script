
const userEmail = ["hello@gmail.com"]
if(userEmail=== true){
    console.log("user is valid");
}else {
    console.log("user is not define")
}


//falsey va;ue
// 0, -0,nan ,undefind, false , bigint =0n , null,""



//truthyvalue

//"0",'false',"",[],{},function(){}

// if(userEmail.length===0){
//     console.log("Arry is emty")
// }


//nullishcoalsing opretar (??)null : undefind

// var l =5 ?? 10;
// var b = null ?? 10;
// var c = undefined ?? 15;
// var t = null ?? 10 ?? 20;


// terniary opretar
// condistion : true : false
  const iceTeaPrice = 100;
  iceTeaPrice <= 80 ? console.log("lace then 80"):console.log("more then80")