'use strict';

const score0 = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0.textContent = 0;
score1.textContent = 0;
let currentScore = 0;
let activePlayer = 0;
let stateGame = false;
const scores = [0, 0];

diceEl.classList.add('hidden');

const changePlayer = function () {
  document.getElementById('current--' + activePlayer).textContent = 0;
  activePlayer = activePlayer != 0 ? 0 : 1;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (!stateGame) {
    const dice = Math.trunc(Math.random() * 6) + 1;

    diceEl.classList.remove('hidden');

    diceEl.src = 'dice-' + dice + '.png';

    if (dice != 1) {
      currentScore += dice;
      document.getElementById('current--' + activePlayer).textContent =
        currentScore;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (!stateGame) {
    scores[activePlayer] += currentScore;

    document.getElementById('score--' + activePlayer).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 10) {
      document
        .querySelector('.player--' + activePlayer)
        .classList.add('player--winner');
      document
        .querySelector('.player--' + activePlayer)
        .classList.remove('player--active');
      stateGame = true;
    } else {
      changePlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  document
    .querySelector('.player--' + activePlayer)
    .classList.remove('player--winner');

  if (activePlayer == 1) {
    document.querySelector('.player--1').classList.remove('player--active');
  }

  player0El.classList.add('player--active');
  diceEl.classList.add('hidden');
  current0El.textContent = 0;
  current1El.textContent = 0;

  scores[0] = 0;
  scores[1] = 0;

  score0.textContent = 0;
  score1.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  stateGame = false;
});
