'use strict';

const player = document.querySelector('.player-photo');
let numbersPlayed = [];
let playing = true;

//generate random number
let generateSecretNumber = function () {
  let newNumber = Math.trunc(Math.random() * 20) + 1;
  //add while loop so that random number is not repeated in the game
  while (numbersPlayed.includes(newNumber)) {
    newNumber = Math.trunc(Math.random() * 20) + 1;
  }
  return newNumber;
};

let secretNumber = generateSecretNumber();

console.log(`secretNumber: ${secretNumber}`);
//connect random number to player image
player.src = `player-${secretNumber}.png`;

//setting the scores at start of game
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

/////////// LOGIC FOR PLAYING GAME

document.querySelector('.check').addEventListener('click', function () {
  if (playing) {
    const guess = Number(document.querySelector('.guess').value);
    // guess not valid
    if (!guess || guess > 20 || guess < 1) {
      displayMessage('You must enter a number between 1 and 20');
      // if guess not correct
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(
          guess > secretNumber
            ? 'You underestimate them, try again!'
            : "Mmm... they're not quite that good"
        );
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('Sorry, game over');
        document.querySelector('.score').textContent = 0;
      }
      // if guess correct
    } else if (guess === secretNumber) {
      numbersPlayed.push(secretNumber);
      if (numbersPlayed.length === 20) {
        playing = false;
        displayMessage('Bang on!, end of Game, check your final score!');
      } else {
        displayMessage('Bang on! Press next to get next player');
      }
      console.log(numbersPlayed);
      highScore += score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

// 'play again' button
document.querySelector('.again').addEventListener('click', function () {
  if (playing) {
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    secretNumber = generateSecretNumber();
    player.src = `player-${secretNumber}.png`;
    console.log(`numbers played: ${numbersPlayed}`);
    console.log(`new secretNumber: ${secretNumber}`);
  }
});

//  input box reset
document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});

/////////// LOGIC FOR POP-UP 'HOW TO PLAY' BUTTON

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.open-modal');

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

btnOpenModal.addEventListener('click', openModal);

btnClosemodal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
