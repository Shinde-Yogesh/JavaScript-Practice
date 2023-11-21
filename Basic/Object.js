/*const key = Symbol("main")

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
console.log(userJS.caption());*/
/*
const tinder = new Object();
tinder.id = "14578";
tinder.name = "Jakson";
tinder.Address = "San-Fransico";

//console.log(tinder);

const newUser = {
  email: "514@gmail.com",
  fullName: {
    First: "Nandy",
    Last: "Farndace",
    Telephone: {
      mobile: 6457815487,
      tel: 17874,
    },
  },
};
console.log(newUser);
// console.log(typeof newUser.fullName);
// console.log( newUser.fullName);
console.log(tinder)

const combination = Object.assign({}, tinder, newUser)
console.log(combination)
*/

const person = {
    isHuman: false,
    printIntroduction: function () {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    },
  };
  
  const me = Object.create(person);
  
  me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
  me.isHuman = true; // Inherited properties can be overwritten
  
  me.printIntroduction();
  // Expected output: "My name is Matthew. Am I human? true"

  const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});

console.log(object1.property1);
// Expected output: 42

const object2 = {
    a: 'somestring',
    b: 42,
  };
  
  for (const [key, value] of Object.entries(object2)) {
    console.log(`${key}: ${value}`);
  }
  
  // Expected output:
  // "a: somestring"
  // "b: 42"