const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
//target changing the color of the body --> document.body
btn.addEventListener('click', function(){
    // get random number between 0-3
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    console.log(randomNumber);

});
/* Let's get the javascript to generate a random number!*/

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    
}

/* I created a function with no parameters and invoked it. Then, I called 
it in my btn function.*/
