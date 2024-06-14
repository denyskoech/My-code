'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 2;

// document.querySelector('.guess').value = 23;

const secretNumber = Math.trunc(Math.random() * 20) + 1; //*20 gives us a range of 1- 19.0000 +1 makes it 20, math.trunc removes the decimals
let score = 20;

document.querySelector('.number').textContent = secretNumber; //set it to the variable number

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'Are you sure?';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You are awesome!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Ai buda, mbali!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Acha za ovyo!';
    score--;
    document.querySelector('.score').textContent = score;
  }
}); // note that we did not call the function but the JS engine will call it as soon as the event happens
