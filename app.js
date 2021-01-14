// import functions and grab DOM elements
import { makeRPSThrow } from './utils.js';
import { didUserWin } from './utils.js';

const goButton = document.getElementById('guess-botton');
const currentThrow = document.getElementById('current-game-results');
const winSpan = document.getElementById('wins');
const loseSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
// initialize state

let wins = 0;
let losses = 0;
let draws = 0;


// set event listeners to update state and DOM

goButton.addEventListener('click', () => {

  // randomly generate computer throw //

  // function that generates computerThrow can be found in utils.js //

  // store computers throw in a const //

    const computerRPSThrow = makeRPSThrow();

  // get user's throw and store that in a const //

    const selectedThrow = document.querySelector('input[type="radio"]:checked');

    const userThrow = selectedThrow.value;
  
  // YAY okay now compare the two, and see who wins, loses or if its a draw!! //
  
    didUserWin(userThrow, computerRPSThrow); 


    
});



