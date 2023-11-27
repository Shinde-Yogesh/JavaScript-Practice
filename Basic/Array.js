/*const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
console.log();
console.log("difference between slice and splice")
console.log();

console.log("splice reduce the array like it cut the array and created the new array")
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
const months = ['Jan', 'March', 'April', 'June'];

// console.log(animals)
// console.log(typeof animals)

// console.log(months)
// animals.push(months)

// console.log(animals)
// console.log(typeof animals)
// console.log(animals[5])
// console.log(animals[5][2])
console.log(animals)
console.log(months)
console.log(animals.concat(months))


const collection = [...animals, ...months] // spread operation
console.log(collection)

const varibale = [1,2,3,4,[5,6,7],7,[8,9,0]];
console.log(varibale.flat());*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers);
/*
const numGreaterThanFive =  numbers.filter((item) => {
  return item > 5;
});

without the curli bracket 
const numGreaterThanFive =  numbers.filter((item) => item > 5);
const numGreaterThanFive =  numbers.filter((item) => item > 5);
console.log(numGreaterThanFive)

const total = numbers.reduce( function (acc ,cur)
{
    return acc + cur;
},0); // here is the last zere is initial value

console.log(total)
const total = numbers.reduce( function (acc ,cur)
{
    console.log(`acc ${acc}  and the val ${cur}`)
    return acc + cur;
},0); // here is the last zere is initial value

// console.log(total)
*/
//using the arrow function
const total_using_arrow = numbers.reduce( (acc, cur)=> acc+cur, 0);
console.log(total_using_arrow)