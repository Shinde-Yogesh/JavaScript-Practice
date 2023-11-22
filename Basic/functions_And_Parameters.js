//creation of function
// function sayMyName(name)
// {
//     console.log(`My name is ${name}`)
// }
/*
//checking undefined condition
function loginUserName(userName) {
  if (!userName) {
    console.log("Please enter user name");
    return;
  }
  return `${userName} is logged in`;
}
console.log(loginUserName("Hitesh"));
console.log(loginUserName(""));

//default value for user
function loginUserName(userName = "Jackson") {
  if (!userName) {
    console.log("Please enter user name");
    return;
  }
  return `${userName} is logged in`;
}
// console.log(loginUserName("Hitesh"))
console.log(loginUserName("Rahul"));
*/
/*
cart shoping example
Spread operator
function calculateCartPrice(number)
{
    return number;
}
console.log(calculateCartPrice(10, 20, 30))

function calculateCartPrice(val1, val2,...number)
{
    return number;
}
console.log(calculateCartPrice(10, 20, 40))*/

//object with function

const book = {
  name: "The Untold Story",
  price: 6487,
};
console.log(book);

function callObjectProperties(anyObject) {
  console.log(
    `Book Name : ${anyObject.name}  and the price is ${anyObject.price}`
  );
}

callObjectProperties(book);
