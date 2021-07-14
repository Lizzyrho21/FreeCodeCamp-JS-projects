const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// The variable above represents the values that are included in hex colors.
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    let hexColor = '#'; // We need to have a variable that holds the hashtag. 
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()]; /*When we run the code with 'hex[0]' and console.log it,
        we end up getting 6 0s in our output.!*/
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    console.log(hexColor);
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}
// This function was created to call random hex codes from our array!
// the hex was then written 'hex[getRandomNumber()]' and voila!!