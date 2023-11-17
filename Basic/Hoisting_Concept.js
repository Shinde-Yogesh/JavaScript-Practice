//console.log(10+70);

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
console.log(z)