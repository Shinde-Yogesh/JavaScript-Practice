/*const value = 10;
//if check
if(value > 50)
{
    console.log("value is greater than 50");
}
console.log("Program is executed")

//checking for else
if(value > 50)
{
    console.log("value is greater than 50");
}
else{
    console.log("value is small")
}
console.log("Program is executed")

const Month = "Nov";
switch (Month) {
  case "Mar":
    console.log(`Months is ${Month}`);
    break;

  case "Feb":
    console.log(`Months is ${Month}`);
    break;

  case "Nov":
    console.log(`Months is ${Month}`);
    break;

  default:
    console.log("Month is checked")
    break;
}

// checking for object
const sample = {
    name : "Jayakant",
    class : "IX"
};

if(Object.keys(sample).length === 0)
{
    console.log("Object is empty");
}else
{
    console.log(`Object length is ${Object.keys(sample).length}`);
}
*/
//Map function

 const county = new Map();
 county.set("IN", "India");
 county.set("LA", "Los Angles");
 county.set("USA", "United State Of America");
 county.set("FR", "France");

for (const values of county) {
  console.log(values)  
}

// destructing of array
console.log("Distructing of array")
for (const [key, value] of county) {
  console.log(key, value)  
}
//Object are not iterable by this way
