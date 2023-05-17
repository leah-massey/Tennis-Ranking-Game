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
    document.querySelector('.message').textContent =
      "They're better than that!";
    score--;
    document.querySelector('.score').textContent = score;

    // guess too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent =
      "Mmm... they're not quite that good";
    score--;
    document.querySelector('.score').textContent = score;
    // guess correct
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Bang on!';
  }
});
