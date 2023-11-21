
const key = Symbol("main")

const userJS = {
    name :"Javascript",
    version : 4.314,
    Date : "3/3/1648",
    isUpdate : false,
    [key] : "Jammu - Kashmir"  //here is initialization of symbol
}

console.log(userJS);
// console.log(userJS[key]);
// console.log(typeof userJS[key]);

userJS.myFunction = function() {
    console.log("Winner is coming")
}
userJS.caption = function() {
    console.log(`Winner is coming ${this.name}`)
}
console.log(userJS.myFunction());
console.log(userJS.caption());