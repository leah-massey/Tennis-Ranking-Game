'use strict';

const secretNumber = 12;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // guess not valid
  if (!guess || guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'You must enter a number between 1 and 20';

    // guess too high
  } else if (guess > secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = 'Sorry, game over';
      document.querySelector('.score').textContent = 0;
    } else {
      score--;
      document.querySelector('.message').textContent =
        'You underestimate them, try again!';
      document.querySelector('.score').textContent = score;
    }

    // guess too low
  } else if (guess < secretNumber) {
    if (score === 1) {
      document.querySelector('.message').textContent = 'Sorry, game over';
      document.querySelector('.score').textContent = 0;
    } else {
      score--;
      document.querySelector('.message').textContent =
        "Mmm... they're not quite that good";
      document.querySelector('.score').textContent = score;
    }

    // guess correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Bang on!';
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.highscore').textContent = highScore;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});

document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});
