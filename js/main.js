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

keyboardButtons.forEach((button) => {
    button.addEventListener('click', handleClick);
});
playAgainButton.addEventListener('click', init);

/*----- functions -----*/

// Initialize Game
init();

function init() {
    render();
}

function render() {
    renderGame();
}

function renderGame() {
    guessedLetters = [];               //put the gussed letters in an Array
    remainingGuesses = 7;
    selectedWord = words[Math.floor(maths.random() * words.length)]; //math.random pick a index number at random, math.floor makes it a whole number
    letterContainer.innerHTML = "";                          //Clear existing `letter-word` divs
    hintEl.textContent = `HINT: ${selectedWord.hint}`;      //selects hint for chosen word
    livesEl.innerHTML= `Wrong guesses: <b>${}`
    gameOverEl.style.display = 'none';
    wordsDisplay()
}

// this function displays blank spaces representing the div elements
function wordsDisplay() { 
    const wordArray = selectedWord.word.split("");         //spliting the array into individual letters
    wordArray.forEach(() => {                              //iterating through the split word
        const letterDiv = document.createElement('div');   //each letter creates a new div to hold the letter, this is in order to adapt to the number of letters in the word
        letterDiv.className = "letter-word";   //Assigns the letter-word class to the newly created div
        letterDiv.textContent = ""; // Initially display an empty div until player chooses letter
        letterContainer.appendChild(letterDiv);            //Appends the newly created div to the letterContainer
    
    });
}




    
 
 
 
 
 
 
 
 






 
 
 
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


