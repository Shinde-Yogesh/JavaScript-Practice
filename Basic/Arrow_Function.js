/*const user = {
  username: "hitesh",
  cousrePrice: 4578,

  message: function () {
    console.log(`${this.username}, user is login`);
    console.log(this);
  },
};
// console.log(user)
user.message();
user.username = "Jakson";
user.message();*/
/*
function chai()
{
    let name = "Jackson";
    console.log(this.name)      // this function alway work on object
}
chai()*/

// const value = function ()
// {
//     console.log("work is on the way")
// }
// value();

// Here is work with Arrow
// const value = () =>
// {
//    let username = "Jam"
//     console.log(`${username}, work is on the way`)
//     console.log(this.username)
// }

// value();

// syntax for arrow function   () => {}
// name to the arrow function
 const value = (num1, num3) => {
return num1 + num3;
}
// console.log(value(1,4))
// syntax for arrow explicit function   const value = (num1, num3) => num1 + num3;

const sayDigit = () => ({digit : 10}) //here when return the object then () is requered
console.log(sayDigit())
