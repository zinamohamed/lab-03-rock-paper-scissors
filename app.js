// import functions and grab DOM elements
import { makeRPSThrow } from './utils.js';
import { didUserWin } from './utils.js';

const goButton = document.getElementById('guess-button');
const currentThrow = document.getElementById('current-game-results');
const winSpan = document.getElementById('wins');
const loseSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const gameContainer = document.getElementById('game-container');
const startGame = document.getElementById('start-game');
const resetButton = document.getElementById('reset-button');
// initialize state

let wins = 0;
let losses = 0;
let draws = 0;

gameContainer.style.display = 'none';

startGame.addEventListener('click', () => {
    gameContainer.style.display = 'block';
    startGame.style.display = 'none';
});

// set event listeners to update state and DOM

goButton.addEventListener('click', () => {

  // randomly generate computer throw //

  // function that generates computerThrow can be found in utils.js //

  // store computers throw in a const //

    const computerNumber = Math.floor(Math.random() * 3) + 1;
    const computerRPSThrow = makeRPSThrow(computerNumber);

  // get user's throw and store that in a const //

    const selectedThrow = document.querySelector('input[type="radio"]:checked');

    const userThrow = selectedThrow.value;
  
  // YAY okay now compare the two, and see who wins, loses or if its a draw!! //
  
  
    const result = didUserWin(userThrow, computerRPSThrow);
    if (result === 'win') {
        wins++;


        currentThrow.textContent = 'Nice moves! You won.';
    }
    
    if (result === 'lose') {
        losses++;
        currentThrow.textContent = 'Gotcha! You lost.';
    }
    
    if (result === 'draw') {
        draws++;
        currentThrow.textContent = 'Ditto! Its a draw.';
    }

    finalScores();
    
});

function finalScores() {
    winSpan.textContent = wins;
    loseSpan.textContent = losses;
    drawSpan.textContent = draws;
}

resetButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    winSpan.textContent = wins;
    loseSpan.textContent = losses;
    drawSpan.textContent = draws;
    currentThrow.textContent = '';
});