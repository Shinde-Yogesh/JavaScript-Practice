console.log("Hello world");
/*
 declaration of var keyword
var a = 10;
console.log(a);

//making another variable of same valriable name
var a = 20;
console.log(a);*/

//another one scenario
var a, b = a = "A";
//console.log(b)

var x = y,
  y = "A";
  var x = y;
//console.log(x); // undefined A
/*
//using function
var key = 70;
function foo()
{
    var key = lock = 90;
    console.log(key);
}
foo()
// console.log(key);


var x = "global";
let y = "global";
console.log(this.x); // "global"
console.log(x === y);
console.log(this.y); // undefined
*/
function varTest() {
    var x = 1;
    {
      var x = 2; // same variable!
      console.log(x); // 2
    }
    console.log(x); // 2
  }

  varTest() //                                     ** var override the properties if same properties in the function     ***
  
  function letTest() {
    let x = 1;
    {
      let x = 2; // different variable
      console.log(x); // 2
    }
    console.log(x); // 1
  }