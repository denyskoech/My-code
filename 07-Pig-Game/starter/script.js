'use strict';

//selecting elements
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');

const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0EL.textContent = 0; //this will be converted to a string when out putted
score1EL.textContent = 0;
diceEL.classList.add('hidden');

let currentScore = 0;

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;

  //3.checj for rolled dice 1
  if (dice !== 1) {
    //add dice to the current score
    currentScore += dice;
    current0EL.textContent = currentScore;
  } else {
    //switch to the next player
  }
});
