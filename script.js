'use strict';
//* why can't I link up the two?
//const players = require('./players');

const players = [
  'Iga Swiatek',
  'Aryna Sabalenka',
  'Jessica Pegula',
  'Elena Rybankina',
  'Caroline Garcia',
  'Coco Gauf',
  'Ons Jabeur',
  'Maria Sakkari',
  'Daria Kasatkina',
  'Petra Kvitova',
  'Belinda Bencic',
  'Veronika Kudermetova',
  'Barbora Krejcikova',
  'Karolina Pliskova',
  'Beatriz Haddad Maia',
  'Liudmila Samsonova',
  'Victoria Azarenka',
  'Qinwen Zheng Vic check',
  'Madison Keys',
  'Jelena Ostapenko',
];

let attemptsLeft = document.querySelector('.label-score');

const playerPhoto = document.querySelector('.player-photo');
let numbersPlayed = [];
let playing = true;

//generate random number
let generateSecretNumber = function () {
  let newNumber = Math.trunc(Math.random() * 20) + 1;

  //add while loop so that random number is not repeated in the game
  while (numbersPlayed.includes(newNumber)) {
    newNumber = generateSecretNumber();
    //newNumber = Math.trunc(Math.random() * 20) + 1;
  }
  return newNumber;
};

let secretNumber = generateSecretNumber();

//setting the scores at start of game

let score = 10;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

console.log(`secretNumber: ${secretNumber}`);
//connect random number to player image
playerPhoto.src = `./playerImages/player-${secretNumber}.png`;
attemptsLeft.textContent =
  'Attempts left to guess ' +
  players[`${secretNumber}` - 1] +
  "'s ranking: " +
  score;

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
            ? 'You underestimate them!'
            : "Mmm... they're not quite that good!"
        );
        score--;
        attemptsLeft.textContent =
          'Attempts left to guess ' +
          players[`${secretNumber}` - 1] +
          "'s ranking: " +
          score;
        //  if no guesses left
      } else {
        displayMessage('Sorry, game over. You ran out of guesses 😔');
        playing = false;
        attemptsLeft.textContent =
          'Attempts left to guess ' +
          players[`${secretNumber}` - 1] +
          "'s ranking: " +
          0;
      }
      // if guess correct
    } else if (guess === secretNumber) {
      numbersPlayed.push(secretNumber);
      console.log(numbersPlayed);
      highScore += score;
      document.querySelector('.highscore').textContent = highScore;
      if (numbersPlayed.length === 20) {
        playing = false;
        displayMessage('Bang on! End of Game! 🍾');
      } else {
        displayMessage('Bang on! 💥 Try the next player!');
        score = 10;
        document.querySelector('.guess').value = '';
        secretNumber = generateSecretNumber();
        attemptsLeft.textContent =
          'Attempts left to guess ' +
          players[`${secretNumber}` - 1] +
          "'s ranking: " +
          score;
        playerPhoto.src = `./playerImages/player-${secretNumber}.png`;
        console.log(`numbers played: ${numbersPlayed}`);
        console.log(`new secretNumber: ${secretNumber}`);
      }
    }
  }
});

// 'next player' button
document.querySelector('.again').addEventListener('click', function () {
  if (playing) {
    score = 10;
    document.querySelector('.guess').value = '';
    secretNumber = generateSecretNumber();
    attemptsLeft.textContent =
      'Attempts left to guess ' +
      players[`${secretNumber}` - 1] +
      "'s ranking: " +
      score;
    player.src = `./playerImages/player-${secretNumber}.png`;
    console.log(`numbers played: ${numbersPlayed}`);
    console.log(`new secretNumber: ${secretNumber}`);
    displayMessage('Start guessing... 🤞🏻');
  }
});

//  input box reset by clicking on it
document.querySelector('.guess').addEventListener('click', function () {
  document.querySelector('.guess').value = '';
});

//start again button
document.querySelector('.reset').addEventListener('click', function () {
  numbersPlayed = [];
  playing = true;
  score = 10;
  highScore = 0;
  secretNumber = generateSecretNumber();
  playerPhoto.src = `./playerImages/player-${secretNumber}.png`;
  console.log(`new secretNumber: ${secretNumber}`);
  attemptsLeft.textContent =
    'Attempts left to guess ' +
    players[`${secretNumber}` - 1] +
    "'s ranking: " +
    score;
  document.querySelector('.highscore').textContent = highScore;
  displayMessage('Start guessing...');
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
