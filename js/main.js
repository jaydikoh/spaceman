/*----- constants -----*/

const words = [
    { word: "galaxy", hint: "A system of stars" },
    { word: "astronaut", hint: "A person trained to go to space" },
    { word: "orbit", hint: "The curved path of a celestial object" },
    { word: "telescope", hint: "An instrument for viewing distant objects" },
    { word: "planet", hint: "A celestial body orbiting a star" },
];

/*----- state variables -----*/

let selectedWord = {};
let guessedLetters = [];
let remainingGuesses = 7;

/*----- cached elements  -----*/

const letterContainer = document.querySelector(".word"); //selecting divs were guessed word will appear
const livesEl = document.getElementById("lives");        //selcting h3 that show how many wrong guesses
const hintEl = document.querySelector("#hint");          //selecting hint element
const keyboardButtons = document.querySelectorAll(".keyboard-buttons"); //selecting all the buttons on the heyboard
const gameOverEl = document.querySelector(".gameover");  //selecting the gameover element
const playAgainButton = document.querySelector(".try-again"); //selecting the play-again button

/*----- event listeners -----*/



/*----- functions -----*/

// Initialize Game
init();

function init() {

}

// function render() {
//   renderGameover()
// }



    
 
 
 
 
 
 
 
 






 
 
 
 /*----- constants -----*/
 //const words = ['student', 'teacher', 'person', 'ball', 'thing'];
 //const chosenWord = words[Math.floor(Math.random() * words.length)];

 /*----- state variables -----*/

 //let displayWord = Array(chosenWord.length).fill('_');
//  let lives = 6;
//  let a = document.getElementById('word').textContent 
//  let buttons = document.querySelectorAll('.keyboard-buttons');
//  a = displayWord.join(' ');

  /*----- cached elements  -----*/

//   document.getElementById('lives').textContent = `Wrong Guesses: ${lives}`;

  /*----- event listeners -----*/
  
//   buttons.forEach(button => {
    //   button.addEventListener("click", () => handleGuess(button.textContent.toLowerCase(), button));
//   });

  /*----- functions -----*/

// init():
  
// handleGuess () {

// }




  // create an array with words
  
  //math.random pick a index number at random, math.floor makes it a whole number
  // giving us a random word
//   console.log(chosenWord);
  // convert the chosen word to a string
//   console.log(displayWord)
// traack game state
// the number of wrong guesses inside the element who id is lives = 6
// add event listner to the buttons


