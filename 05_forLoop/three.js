//for of loop

// const Arr = [10,20,30,40,50]
// for (const i of Arr) {
//     console.log(i);
    
// }

// const stringss= ["Ajay","umesh","shubham"]
// for (const b of stringss) {
//     console.log(`ech char is ${b}`)
    
// }

// const Ar = [10,20,30,40,50]
// const aR = [10,40,50,60]
    //console.log(Ar)
    // Ar.push(10);
    // Ar.pop()
    // Ar.shift()
    // Ar.unshift(0)
    
    //console.log(Ar.concat(aR))

    // const my7 = [...Ar,...aR]
    // console.log(my7)


    

// const myMap = new Map([
//     [1, "one"],
//     [2, "two"],
//     [3, "three"],
//   ]);

//   console.log(myMap)

// const map1 = new Map();

// map1.set('bar', 'baz');
// map1.set(1, 'foo');

// console.log(map1.size);
// // Expected output: 2

// map1.clear();

// console.log(map1.size);
// // Expected output: 0


const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
// Expected result: true
// True indicates successful removal

console.log(map1.has('bar'));
// Expected result: false

