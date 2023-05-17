'use strict';

const secretNumber = 12;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess || guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'You must enter a number between 1 and 20';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent =
      "They're better than that!";
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent =
      "Mmm... they're not quite that good";
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Bang on! You won a point!';
  }
});
