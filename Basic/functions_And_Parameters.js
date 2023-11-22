//creation of function
function sayMyName(name)
{
    console.log(`My name is ${name}`)
}

//checking undefined condition
function userlogin(user)
{
    if(user === undefined)
    {
        return "Please enter valid userName";
        return;
    }
    else{
      return  `User is logged in :  ${user}`
    }
}

// sayMyName("Nitya")
console.log(userlogin("Nitya"));

