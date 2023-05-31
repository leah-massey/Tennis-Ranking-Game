# Tennis-Ranking-Game 🎾

A game where a user must successfully guess the rank of all top 20 female tennis players.

![screenshot](screenshots/main-page.png 'Main page');

## Table of contents

- [How to Play](#how-to-play)
- [Motivation](#motivation)
- [Technologies](#technologies)
- [Setup](#setup)

## How to Play

A user types their guess into the box.
When the user makes a correct guess, the next top 20 player is (randomly) generated. This continues until all 20 players have been correctly guessed.

A player has 10 chances to guess the ranking of each tennis player, if they fail to succeed in this time, the game ends prematurely.

Players are generated one at a time but if a user is stuck, they can temporarily skip a player and return to them later.

## Scoring

A user can score a maximum of 10 points per player. With each additional guess they have to make, their point earning potential reduces by 1.
The maximum score for a completed game is 200 (10 points for each of the 20 players). The minimum score for a completed game is 20 (1 point for each of the 20 players).

## MOTIVATION

I built this game as a way of solidifying the my learning and understanding of Javascript, HTML and CSS. Along the way I learned to use SASS to add a bit more interest to the page design. The game has a lot of scope for further development - see future improvements.

## Technologies

Built using:
Javascript
HTML
CSS
SASS

## Future improvements / additions

I'd like to add an animation to the project - curious to know if I can make a ball bounce across the screen!
I'd like to connect the project to a live rankings list so that the players rankings are always up to date.

## Setup

To run this project, install it locally using npm:

```
$ cd ../lorem
$ npm install
$ npm start
```
