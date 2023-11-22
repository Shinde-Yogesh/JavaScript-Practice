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
console.log(loginUserName(""));*/

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
