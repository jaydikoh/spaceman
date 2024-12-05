const images = [
  "img/spaceman-0.png",
  "img/spaceman-0.png",
  "img/spaceman-1.png",
  "img/spaceman-2.png",
  "img/spaceman-3.png",
  "img/spaceman-4.png",
  "img/spaceman-5.png",
  "img/spaceman-6.png"
];
const acceptedKeys = 'abcdefghijklmnopqrstuvwxyz';
const correctSound = new Audio("sounds/correct.wav"); // Correct guess sound
const incorrectSound = new Audio("sounds/failed.wav"); // Incorrect guess sound
const winSound = new Audio("sounds/you-win.wav");
const loseSound = new Audio("sounds/you-lose.wav");

/*----- state variables -----*/

let selectedWord = {};
let guessedLetters = [];
let remainingGuesses = 7;
let keystroke
let pressedKeys = [];

/*----- cached elements  -----*/

const letterContainer = document.querySelector(".word"); //selecting divs were guessed word will appear
const livesEl = document.getElementById("lives");        //selcting h3 that show how many wrong guesses
const hintEl = document.querySelector("#hint");          //selecting hint element
const keyboardButtons = document.querySelectorAll(".keyboard-buttons"); //selecting all the buttons on the heyboard
const gameOverEl = document.querySelector(".gameover");  //selecting the gameover element
const playAgainButton = document.querySelector(".try-again"); //selecting the play-again button
const gameImageEl = document.getElementById("game-image"); // Select the game image container
const manImage = document.getElementById('spaceman');
const body = document.querySelector('body');
const winOrLose = document.querySelector('.checkwinner')

/*----- event listeners -----*/

keyboardButtons.forEach((button) => {
  button.addEventListener('click', handleClick);
});
playAgainButton.addEventListener('click', init);

/*----- functions -----*/

// Initialize Game

function init() {
  selectedWord = words[Math.floor(Math.random() * words.length)];       //math.random pick a index number at random, math.floor makes it a whole number
  guessedLetters = [];
  pressedKeys = [];            //put the gussed letters in an Array
  remainingGuesses = 7;              // Hide game-over message
  gameOverEl.style.visibility = 'hidden';
  keyboardButtons.forEach((button) => {
    button.disabled = false;                                      // Re-enable all buttons
    button.style.backgroundColor = "";                            //reset button style
  });
  hintEl.textContent = `HINT: ${selectedWord.hint}`;      //selects hint for chosen word
  livesEl.innerHTML = `Attempts left: <b>${remainingGuesses}`
  letterContainer.innerHTML = "";                           //Clear existing `letter-word` divs
  manImage.src = "img/spaceman-0.png";
  manImage.style.visibility = "visible";
  winOrLose.innerText = "";
  render();                   //renedr blank spaces
}

function render() {
  wordsDisplay();
  body.addEventListener('keydown', handleClick);

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

function updateWordDisplay() {
  const letterDivs = document.querySelectorAll(".letter-word");  //Selects all div elements with the class letter-word 
  selectedWord.word.split("").forEach((letter, index) => {   //Splits the selectedWord.word string into an array of letters, Iterates over each letter using forEach. index: The position of the letter in the word.
    if (guessedLetters.includes(letter)) {                         //Checks whether the current letter is in the guessedLetters array
      letterDivs[index].textContent = letter; // Reveal the guessed letter
    }
  });
}

function getWinner() {
  const letterDivs = document.querySelectorAll(".letter-word");     //Selects all div elements with the class letter-word
  const wordArray = selectedWord.word.split("");
  if (remainingGuesses <= 0) {
    gameOverEl.style.display = "block";
    gameOverEl.textContent = `The word was "${selectedWord.word}"`;
    gameOverEl.style.visibility = 'visible';
    winOrLose.innerText = "YOU LOSE";
    disableKeyboard();
    loseSound.play();                                           //disables keyboard if game losses
  }
  else if (wordArray.every((letter, index) => letterDivs[index].textContent === letter)) {   //Uses every() to check if all letters in the word (wordArray) match the corresponding letters displayed in the letterDivs.
    gameOverEl.style.display = "block";
    gameOverEl.style.visibility = 'visible';
    winOrLose.innerText = "YOU WIN";
    manImage.style.visibility = "hidden";
    disableKeyboard();
    winSound.play()
    confetti({
      particleCount: 400, // Number of confetti pieces
      spread: 100,        // Angle of spread
      origin: { x: 0.5, y: 0.3 }, // Start position
    });
  }
}

function disableKeyboard() {
  body.removeEventListener('keydown', handleClick);
  keyboardButtons.forEach((button) => {
    button.disabled = true;
  });
}

function handleClick(event) {
  let guessedLetter;                                         //Retrieves the text content of the button clicked by the player.
  if (event.type === 'click') {                               //Retrieves the text content of the button clicked by the player.
    guessedLetter = event.target.textContent.toLowerCase();
    event.target.disabled = true;
    keystroke = event.target                                  //Disables the button so the player cannot select the same letter again.
  } else {
    guessedLetter = event.key.toLowerCase();
    if (!acceptedKeys.includes(guessedLetter)) return;
    if (pressedKeys.includes(guessedLetter)) return;

    keyboardButtons.forEach((button) => {
      if (button.textContent.toLowerCase() === guessedLetter) {
        keystroke = button;
        keystroke.disabled = true;                       //Disables the button so the player cannot select the same letter again.  
      }
    })
  }

  pressedKeys.push(guessedLetter);                       //add the key to the pressedKeys array

  if (selectedWord.word.includes(guessedLetter)) {
    guessedLetters.push(guessedLetter);              // Add correct guess to guessedLetters array
    if (event.type === "click") event.target.style.backgroundColor = "green"; // Indicate correct guess
    keystroke.style.backgroundColor = "green";
    correctSound.currentTime = 0;
    correctSound.play();
    updateWordDisplay();
  } else {
    remainingGuesses--;
    if (event.type === "click") event.target.style.backgroundColor = "grey"; // Indicate wrong guess
    keystroke.style.backgroundColor = "grey"
    manImage.src = images[7 - remainingGuesses]
    incorrectSound.currentTime = 0;
    incorrectSound.play();
  }

  livesEl.innerHTML = `Attempts left: <b>${remainingGuesses}</b>`;
  getWinner();
}

init();