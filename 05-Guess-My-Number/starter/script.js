'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 2;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1; //*20 gives us a range of 1- 19.0000 +1 makes it 20, math.trunc removes the decimals
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'Are you sure?';
    displayMessage('Are you sure!');
  }

  //when the player wins
  else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Wazi buda!';
    displayMessage('Wazi Buda!');
    document.querySelector('body').style.backgroundColor = '#60b347'; //css in JS needs to be in camel case and always specify with a string

    document.querySelector('.number').style.width = '30rem'; //30rem has to be a string, in quotes and this is inline css

    document.querySelector('.number').textContent = secretNumber; //set it to the variable number

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  //When the guess is higher than expected number
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Ai buda, mbali!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //when the game is lost
    else {
      document.querySelector('.message').textContent = 'Iza buda!';
      document.querySelector('.score').textContent = 0;
    }
  }

  //when the guess is lower than the expected number
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Acha za ovyo!';
      score--;
      document.querySelector('.score').textContent = score;
    }

    //when the game is lost
    else {
      document.querySelector('.message').textContent = 'Iza buda!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); // note that we did not call the function but the JS engine will call it as soon as the event happens

document.querySelector('.again').addEventListener('click', function () {
  //this is an anonymous handler function
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Tuanze tena';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
