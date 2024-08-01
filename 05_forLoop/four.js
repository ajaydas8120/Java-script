// const object = { a: 1, b: 2, c: 3 };

// for (const property in object) {
//   console.log(`${property}: ${object[property]}`);
// }

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

// const obj = { a: 1, b: 2 };

// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
//   obj.c = 3;
// }

// Logs:
// obj.a = 1
// obj.b = 2


// const arr = ["js","ruby","javascript","paythone","reatjs"]
// for(i in arr){
//     console.log(arr[i]);
// };

const arr1 = [1,2,3,4,5,6,7,8]
for(i of arr1){
    console.log(arr1[i])
}