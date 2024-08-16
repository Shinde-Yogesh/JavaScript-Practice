

/*//console.log(10+70);

//greeting()
function greeting ()
{
    console.log("Human is only being to destroy nature")
}

//keyword hoisting
// console.log(a);
// a = 10;


var x;
console.log(x === undefined); // true
x = 3;

(function () {
  var x;
  //console.log(x); // undefined
  x = "local value";
})();
let z = 50;

{
  var a = 10;
 
}
console.log(a)
console.log(z)*/

function addOne(num) {
  return num + 1;
}

console.log(addOne(74));

console.log(sayName("nitya"));
function sayName(name) {
  return `my name is ${name}`;
}
// here is hoisting
/*
const Expression_Example = function sample()
{
  return `helllo world`
}
console.log(Expression_Example())*/

/*
console.log(Expression_Example())
const Expression_Example = function sample()      // here we got error of cannot acces the Expression_Example
{                                                 // because of express variable
  return `helllo world`
}
*/
