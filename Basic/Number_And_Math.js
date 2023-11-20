/*console.log("******************** For number ***************************");
let a = 10;
console.log(a);

let maxIntValue = 10155144455147785855114646131166464613116564661313135644661313166564661336565161161311644611313164846461131684611116446631116444161;
console.log(maxIntValue);

//What is the limit of number in JavaScript?
//1.7976931348623157e+308
// 64 bit can store in single number

console.log(typeof maxIntValue);*/

/*const value = 564;
console.log(value)
console.log(typeof value)

const digit  = new Number(564);
console.log(digit);
console.log(typeof digit);
console.log( value == digit);
console.log( value === digit);
*/
const value = 564;
const digit = 1000000;
console.log(value.toFixed(2));  //increasing the zero after the parameter passing into the method 564.00
console.log(digit);
console.log(digit.toLocaleString());  //Increasing the readability

