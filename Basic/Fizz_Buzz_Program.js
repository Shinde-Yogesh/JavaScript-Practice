// var count = 1
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
