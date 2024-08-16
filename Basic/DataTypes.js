

console.log("Following are the data types")
console.log("############################### Primitive Data type ##############################")

console.log("******************** for String ***************************");
//for String
let being  = 'Black fox';
console.log(being);

let usingDoubleQuotes = "Winner is comeing"
console.log(usingDoubleQuotes)
console.log("******************** For Boolean***************************");

let isActive = true;
console.log(isActive)
console.log(typeof isActive)

console.log("******************** For null ***************************");
let nullCheck = null;
console.log(nullCheck)
console.log(typeof nullCheck);

/// here is null type of is "Object"
//  main difference between null and undefined

console.log("******************** For Undefined ***************************");
let key ;
console.log(key);

console.log(typeof key)
//here type of key is undefined 

console.log("******************** For Symbol ***************************");
var sym = Symbol("Hello") 
console.log(typeof(sym)); 
console.log(sym);
console.log("Symbol are used to identification")

console.log("############################### Not Primitive Data type ##############################");

console.log("******************** For Object ***************************");
let person = {
    "identification" : "aadhar",
    "Address" : "Keshav Nagar,  Jamu-kashmir" 
}
console.log(person)
console.log(person.Address)

console.log("******************** For Array ***************************");

let city = ["Barlin", "Tokiyo", "Shanghai", "Jaypur"];
console.log(city)
console.log(typeof city);

console.log(city.length)
console.log(city.sort())
