'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // guess not valid
  if (!guess || guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'You must enter a number between 1 and 20';

    // guess not correct
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber
          ? 'You underestimate them, try again!'
          : "Mmm... they're not quite that good";
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Sorry, game over';
      document.querySelector('.score').textContent = 0;
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

// 'play again' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
});

//  input box reset
document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});
