//String declaration
//One way to declair the string 
const variable = 'The quick red fox jumped over the lazy dog';
console.log(variable);
/*
//another way is created the object of string class
const sample = new String('Black ship');
console.log(sample);
console.log(typeof sample);
console.log(typeof variable);

console.log(sample == variable); // here is check the content
console.log(sample === variable); // here is check the reference (hashcode)*/

//properties
// console.log(variable.anchor())
// console.log(variable.charAt(5)); return the index value in character form

const digit = 4;
// console.log(`The Character code of q ${variable.charCodeAt(digit)} for the string ${variable}`)   charCode give the character code 0 to 655535 
// console.log(variable.charCodeAt(0))
const icons = 'A☃★♲';

const englishSmall = 'abcd';
// console.log(englishSmall.charCodeAt(0))
// console.log(icons.codePointAt(0))
const otherIcons = '💻🍁🖤😍';
console.log(otherIcons)
console.log(otherIcons.charCodeAt(0))
console.log(otherIcons.charCodeAt(1))

console.log(icons.concat(' Concatation of String ', otherIcons))
