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


let a = 41;
console.log(a)

if(1 == 1)
{
  let a = 84;
  const b = 47;

}
console.log(a);
console.log(b)