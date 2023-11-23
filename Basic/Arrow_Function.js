const user = {
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

user.message();

