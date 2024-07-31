// let a =10;
// console.log(a);

// for(let i=0;i<=10;i++){
//     const element =i;
//     if(element==5){
//         consol.log("5 is a best number");
//     }
//     console.log(element)
// }
// //console.log(i)

// for (let i = 10; i>=0; i--) {
//     console.log(i)
    
// }


for(let i=0;i<=10;i++){
    console.log(`outer loop value : ${i} `);
    for(j=0;j<=10;j++){
        //console.log(`inner loop value is ${j} in ineer loop is ${i}`);
        console.log(i + '*' + j + '=' + i*j);
    }
}