const my1 = ["js","rubby","pythone","java"]
my1.forEach( function(val1){
    console.log(val1)
})
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"


const ratings = [5, 4, 5];
let sum = 0;

const sumFunction = async (a, b) => a + b;

ratings.forEach(async (rating) => {
  sum = await sumFunction(sum, rating);
});

console.log(sum);
// Naively expected output: 14
// Actual output: 0

const logArrayElements = (element, index /*, array */) => {
    console.log(`a[${index}] = ${element}`);
  };
  
  // Notice that index 2 is skipped, since there is no item at
  // that position in the array.
  [2, 5, , 9].forEach(logArrayElements);
  // Logs:
  // a[0] = 2
  // a[1] = 5
  // a[3] = 9
  