//String declaration
//One way to declair the string 
const variable = 'Black ship';
console.log(variable);

//another way is created the object of string class
const sample = new String('Black ship');
console.log(sample);
console.log(typeof sample);
console.log(typeof variable);

console.log(sample == variable); // here is check the content
console.log(sample === variable); // here is check the reference (hashcode)
