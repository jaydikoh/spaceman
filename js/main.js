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
let remainingGuesses = 6;

/*----- cached elements  -----*/

const letterContainer = document.querySelector(".word");
const livesEl = document.getElementById("lives");
const hintEl = document.querySelector("h3:nth-of-type(2)");
const keyboardButtons = document.querySelectorAll(".keyboard-buttons");
const gameOverEl = document.querySelector(".gameover");
const playAgainButton = document.querySelector(".try-again");

/*----- event listeners -----*/
keyboardButtons.forEach((button) => {
    button.addEventListener("click", handleKeyboardClick);
});
playAgainButton.addEventListener("click", init);

/*----- functions -----*/

// Initialize Game
function init() {
    resetGame();
    selectedWord = words[Math.floor(Math.random() * words.length)];
    createWordDisplay(); // Generate `letter-word` divs
    hintEl.textContent = `HINT: ${selectedWord.hint}`;
    livesEl.innerHTML = `Wrong guesses: <b>${remainingGuesses}</b>`;
    gameOverEl.style.display = "none";
}

// Reset the Game State
function resetGame() {
    guessedLetters = [];
    remainingGuesses = 6;
    letterContainer.innerHTML = ""; // Clear existing `letter-word` divs
    keyboardButtons.forEach((button) => {
        button.disabled = false;
        button.style.backgroundColor = "";
    });
}

// Create `letter-word` Divs Based on Word Length
function createWordDisplay() {
    const wordArray = selectedWord.word.split("");
    wordArray.forEach(() => {
        const letterDiv = document.createElement("div");
        letterDiv.className = "letter-word";
        letterDiv.textContent = ""; // Initially display an empty div
        letterContainer.appendChild(letterDiv);
    });
}

// Update the Displayed Letters
function updateWordDisplay() {
    const letterDivs = document.querySelectorAll(".letter-word");
    selectedWord.word.split("").forEach((letter, index) => {
        if (guessedLetters.includes(letter)) {
            letterDivs[index].textContent = letter; // Reveal the guessed letter
        }
    });
}

// Check for Game Over or Victory
function checkGameState() {
    const letterDivs = document.querySelectorAll(".letter-word");
    const wordArray = selectedWord.word.split("");

    if (remainingGuesses <= 0) {
        gameOverEl.style.display = "block";
        gameOverEl.textContent = `GAME OVER! The word was "${selectedWord.word}".`;
        disableKeyboard();
    } else if (wordArray.every((letter, index) => letterDivs[index].textContent === letter)) {
        gameOverEl.style.display = "block";
        gameOverEl.textContent = "You Win!";
        disableKeyboard();
    }
}

// Disable All Keyboard Buttons
function disableKeyboard() {
    keyboardButtons.forEach((button) => {
        button.disabled = true;
    });
}

// Handle Keyboard Button Click
function handleKeyboardClick(event) {
    const guessedLetter = event.target.textContent.toLowerCase();
    event.target.disabled = true;

    if (selectedWord.word.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
        updateWordDisplay();
        event.target.style.backgroundColor = "green"; // Indicate correct guess
    } else {
        remainingGuesses--;
        livesEl.innerHTML = `Wrong guesses: <b>${remainingGuesses}</b>`;
        event.target.style.backgroundColor = "grey"; // Indicate wrong guess
    }

    checkGameState();
}

// Start the Game
init();
 
 
 
 
 
 
 
 






 
 
 
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

