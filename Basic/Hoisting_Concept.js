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
