const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector("body")
// console.log(body) 
buttons.forEach(function (button){
    console.log(button);
    button.addEventListener('click', function(e)
    {
        console.log(e)
        console.log(e.target)
        //logic
        if(e.target.id === 'red')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'orange')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'yellow')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'green')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'blue')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'indigo')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'violet')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'white')
        {
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id === 'grey')
        {
            body.style.backgroundColor = e.target.id;
        }
    })
})