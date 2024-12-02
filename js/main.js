/*----- constants -----*/

const words = [
  {
      word: "penguin",
      hint: "A flightless bird that loves the cold."
  },
  {
      word: "banana",
      hint: "A yellow fruit that monkeys love."
  },
  {
      word: "bubblegum",
      hint: "Chewy and pink, fun to blow into bubbles."
  },
  {
      word: "sunny",
      hint: "The weather when the sky is clear and bright."
  },
  {
      word: "giggles",
      hint: "The sound of uncontrollable laughter."
  },
  {
      word: "jellybean",
      hint: "A small, sweet, and colorful candy."
  },
  {
      word: "robot",
      hint: "A mechanical friend that follows commands."
  },
  {
      word: "superhero",
      hint: "A fictional character with extraordinary powers."
  },
  {
      word: "cupcake",
      hint: "A small, delicious cake often topped with frosting."
  },
  {
      word: "laughter",
      hint: "The joyful sound of amusement."
  },
  {
      word: "kite",
      hint: "A flying toy attached to a string."
  },
  {
      word: "snuggle",
      hint: "To embrace closely for warmth or affection."
  },
  {
      word: "sparkle",
      hint: "Shining with small, bright flashes of light."
  },
  {
      word: "gummybear",
      hint: "A chewy, fruity treat shaped like a bear."
  },
  {
      word: "cozy",
      hint: "Warm and comfortable, like a blanket."
  },
  {
      word: "whistle",
      hint: "A small device that makes a high-pitched sound."
  },
  {
      word: "bounce",
      hint: "To spring back after hitting a surface."
  },
  {
      word: "puzzle",
      hint: "A game or challenge to test your brain."
  },
  {
      word: "firefly",
      hint: "A tiny insect that glows in the dark."
  },
  {
      word: "campfire",
      hint: "A warm, outdoor fire for cooking or gathering."
  },
  {
      word: "wizard",
      hint: "A magical person with special powers."
  },
  {
      word: "daisy",
      hint: "A simple and cheerful white flower."
  },
  {
      word: "jungle",
      hint: "A dense, tropical forest full of wildlife."
  },
  {
      word: "muffin",
      hint: "A small, sweet bread often with fruit or nuts."
  },
  {
      word: "pillow",
      hint: "Soft and fluffy for resting your head."
  },
  {
      word: "robot",
      hint: "A mechanical friend that follows commands."
  },
  {
      word: "starry",
      hint: "Filled with bright and shining stars."
  },
  {
      word: "wizard",
      hint: "A magical person with special powers."
  },
  {
      word: "playful",
      hint: "Full of fun and lively activity."
  },
  {
      word: "magic",
      hint: "Mysterious and enchanting supernatural forces."
  },
  {
      word: "giggle",
      hint: "A light, happy laugh."
  },
  {
      word: "sunshine",
      hint: "The warm and bright rays of the sun."
  },
  {
      word: "fuzzy",
      hint: "Soft and slightly fluffy to the touch."
  },
  {
      word: "whisper",
      hint: "To speak very softly or quietly, often in a secretive manner."
  },
  {
      word: "playground",
      hint: "An outdoor area with equipment for children to play on."
  },
  {
      word: "lollipop",
      hint: "A sweet candy on a stick, often brightly colored."
  },
  {
      word: "giraffe",
      hint: "A tall African mammal with a long neck."
  },
  {
      word: "bubble",
      hint: "A thin sphere of liquid enclosing air or gas."
  },
  {
      word: "cartoon",
      hint: "An animated film or TV show with funny characters."
  },
  {
      word: "puzzle",
      hint: "A game or challenge to test your brain."
  },
  {
      word: "smile",
      hint: "A happy facial expression."
  },
  {
      word: "sprinkle",
      hint: "Tiny bits of candy or decoration."
  },
  {
      word: "acorn",
      hint: "The nut of an oak tree."
  },
  {
      word: "playful",
      hint: "Full of fun and lively activity."
  },
  {
      word: "giggle",
      hint: "A light, happy laugh."
  },
  {
      word: "sparkle",
      hint: "Shining with small, bright flashes of light."
  },
  {
      word: "snuggle",
      hint: "To embrace closely for warmth or affection."
  },
  {
      word: "laughter",
      hint: "The joyful sound of amusement."
  },
  {
      word: "campfire",
      hint: "A warm, outdoor fire for cooking or gathering."
  },
  {
      word: "pillow",
      hint: "Soft and fluffy for resting your head."
  },
  {
      word: "muffin",
      hint: "A small, sweet bread often with fruit or nuts."
  },
  {
      word: "giraffe",
      hint: "A tall African mammal with a long neck."
  },
  {
      word: "cartoon",
      hint: "An animated film or TV show with funny characters."
  },
  {
      word: "lollipop",
      hint: "A sweet candy on a stick, often brightly colored."
  },
  {
      word: "fuzzy",
      hint: "Soft and slightly fluffy to the touch."
  },
  {
      word: "whisper",
      hint: "To speak very softly or quietly, often in a secretive manner."
  },
  {
      word: "playground",
      hint: "An outdoor area with equipment for children to play on."
  },
  {
      word: "sparkle",
      hint: "Shining with small, bright flashes of light."
  },
  {
      word: "smile",
      hint: "A happy facial expression."
  },
  {
      word: "sprinkle",
      hint: "Tiny bits of candy or decoration."
  },
  {
      word: "acorn",
      hint: "The nut of an oak tree."
  },
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

function init() {
  renderGame();
  selectedWord = words[Math.floor(Math.random() * words.length)];       //math.random pick a index number at random, math.floor makes it a whole number
  guessedLetters = [];               //put the gussed letters in an Array
  remainingGuesses = 7;              // Hide game-over message
  gameOverEl.style.visibility = 'hidden';
  keyboardButtons.forEach((button) => {
    button.disabled = false; // Re-enable all buttons
    button.style.backgroundColor = ""; //reset button style
  });
  hintEl.textContent = `HINT: ${selectedWord.hint}`;      //selects hint for chosen word
  livesEl.innerHTML= `Attempts left: <b>${remainingGuesses}`
  letterContainer.innerHTML = "";                          //Clear existing `letter-word` divs
  wordsDisplay();                                       //renedr blank spaces
}

// function render() {
  //     renderGame();
  //   }
  
  function renderGame() {
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
  
  function updateWordDisplay () {
    const letterDivs = document.querySelectorAll(".letter-word");  //Selects all div elements with the class letter-word 
    selectedWord.word.split("").forEach((letter, index) => {   //Splits the selectedWord.word string into an array of letters, Iterates over each letter using forEach. index: The position of the letter in the word.
      if (guessedLetters.includes(letter)) {                         //Checks whether the current letter is in the guessedLetters array
        letterDivs[index].textContent = letter; // Reveal the guessed letter
      } 
    });
  }
  
  function getWinner () {
    const letterDivs = document.querySelectorAll(".letter-word");     //Selects all div elements with the class letter-word
    const wordArray = selectedWord.word.split("");
    if (remainingGuesses <= 0) {
      gameOverEl.style.display = "block";
      gameOverEl.textContent = `You Lose! The word was "${selectedWord.word}".`;
      gameOverEl.style.visibility = 'visible';
      disableKeyboard();                                              //disables keyboard if game losses
    }
    else if (wordArray.every((letter, index) => letterDivs[index].textContent === letter)) {   //Uses every() to check if all letters in the word (wordArray) match the corresponding letters displayed in the letterDivs.
      gameOverEl.style.display = "block";
      gameOverEl.textContent = "You Win!";
      gameOverEl.style.visibility = 'visible';
      disableKeyboard(); 
    }
  }
  
  function disableKeyboard() {
    keyboardButtons.forEach((button) => {
      button.disabled = true;
    });
  }
  
  function handleClick(event) {
    const guessedLetter = event.target.textContent.toLowerCase();     //Retrieves the text content of the button clicked by the player.
    event.target.disabled = true;                       //Disables the button so the player cannot select the same letter again.
    
    if (selectedWord.word.includes(guessedLetter)) {
      guessedLetters.push(guessedLetter);              // Add correct guess to guessedLetters array
      event.target.style.backgroundColor = "green"; // Indicate correct guess
      updateWordDisplay(); 
    } else {
      remainingGuesses--;
      event.target.style.backgroundColor = "grey"; // Indicate wrong guess
    }
    livesEl.innerHTML = `Attempts left: <b>${remainingGuesses}</b>`;
    getWinner();
  }
  
  // init();
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


