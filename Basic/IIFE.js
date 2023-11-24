//Immediately Invoked Function Expression (IIFE)
/*function check() {
  console.log(`DB Connected`);
}
check()
  //here we create IIFE
(function check() {
    // named IIFE
    console.log(`DB Connected`);
  }
)();*/

// arrow function
( (name)=>{
    console.log(`Arrow function called ${name}`)
})("Markus")
