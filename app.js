// import functions and grab DOM elements
import { makeRPSThrow } from './utils.js';

const goButton = document.getElementById('guess-botton');
const currentThrow = document.getElementById('current-game-results');
const winSpan = document.getElementById('wins');
// initialize state

let wins = 0;


// set event listeners to update state and DOM

goButton.addEventListener('click', () => {

  // randomly generate computer throw //

    const computerThrow = Math.floor(Math.random() * 3);

    // function that generates userThrow can be found in utils.js //

  // store computers throw in a const //

    const computerRPSThrow = makeRPSThrow(computerThrow);

  // get user's throw and store that in a const //

    const selectedThrow = document.querySelector('input[type="radio"]:checked');

    const userThrow = selectedThrow.value;
  
  // YAY okay now compare the two, and see who wins, loses or if its a draw!! // 

    
});



