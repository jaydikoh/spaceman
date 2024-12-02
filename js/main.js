 /*----- constants -----*/


 /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/

  // create an array with words
  const words = ['student', 'teacher', 'person', 'ball', 'thing'];
  //math.random pick a index number at random, math.floor makes it a whole number
  // giving us a random word
  const chosenWord = words[Math.floor(Math.random() * words.length)];
//   console.log(chosenWord);
  // convert the chosen word to a string
  let displayWord = Array(chosenWord.length).fill('_');
//   console.log(displayWord)
// traack game state
let lives = 6;
let a = document.getElementById('word').textContent 
a = displayWord.join(' ');
// the number of wrong guesses inside the element who id is lives = 6
document.getElementById('lives').textContent = `Wrong Guesses: ${lives}`;
// add event listner to the buttons
let buttons = document.querySelectorAll('.keyboard-buttons');

buttons.forEach(button => {
    button.addEventListener("click", () => handleGuess(button.textContent.toLowerCase(), button));
});
