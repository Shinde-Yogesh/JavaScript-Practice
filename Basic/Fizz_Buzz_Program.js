/*
var sample = [];

for (let count = 1; count <= 15; count++) {
  if (count % 3 === 0 && count % 5 === 0) {
    sample.push("FizzBuzz");
  } else if (count % 3 === 0) {
    sample.push("Fizz");
  } else if (count % 5 === 0) {
    sample.push("Buzz");
  } else {
    sample.push(count);
  }
}
console.log(sample);
*/

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	numberOfBottles--;
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}