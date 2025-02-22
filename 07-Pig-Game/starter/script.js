'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions

let scores, currentScore, activePlayer, playing; //because of scoping, we will only declare the variables globally but initialize them in the function

const init = function () {
  scores = [0, 0]; //store playscores
  currentScore = 0;
  activePlayer = 0;
  playing = true; // these variables are now initialized

  current0EL.textContent = 0;
  current1EL.textContent = 0;
  score0EL.textContent = 0; //this will be converted to a string when out putted
  score1EL.textContent = 0;

  diceEL.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
};
init(); //call the function

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0; //ternary operator use to switch players
  currentScore = 0;
  player0El.classList.toggle('player--active'); // introduced toggle to changes the style back and forth instead of adding and removing
  player1El.classList.toggle('player--active');
}; //just a function that serves as a reusable code

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //3.checj for rolled dice 1
    if (dice !== 1) {
      //add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to the next player
      switchPlayer();
    }
  }
});

//add an event listener to track total scores of each player
btnHold.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. Check if the player's score is >= 100, if so, finsh game
    if (scores[activePlayer] >= 100) {
      //Finish the game
      playing = false;
      diceEL.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //3. Switch to the next player
      switchPlayer();
    }
  }
});

//resetting the game button

btnNew.addEventListener('click', init); //we do not call the function here, anonymous function
//we love javascript
