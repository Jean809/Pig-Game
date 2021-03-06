"use strict";

// Selecting elements
const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

//starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
current0EL.textContent = 0;
current1EL.textContent = 0;
diceEL.classList.add("hidden");

const scores = [];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

function btnRollFunction() {
  //generating random dice roll
  let dice = Math.trunc(Math.random() * 6) + 1;
  console.log(dice);

  //display dice
  diceEL.src = `dice-${dice}.png`;
  diceEL.classList.remove("hidden");

  //check for rolled 1
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");
  }
}

function btnHoldFunction() {
  if (activePlayer === 0) {
    score0EL.textContent = Number(score0EL.textContent) + currentScore;
    scores[0] = Number(score0EL.textContent);
    current0EL.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");
  } else {
    score1EL.textContent = Number(score1EL.textContent) + currentScore;
    scores[1] = Number(score1EL.textContent);
    current1EL.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0EL.classList.toggle("player--active");
    player1EL.classList.toggle("player--active");
  }
  if (
    scores[0] >= 100 &&
    scores[0] > scores[1] &&
    !player1EL.classList.contains("player--winner")
  ) {
    player0EL.classList.add("player--winner");
  } else if (
    scores[1] >= 100 &&
    scores[1] > scores[0] &&
    !player0EL.classList.contains("player--winner")
  ) {
    player1EL.classList.add("player--winner");
  }

  if (
    player0EL.classList.contains("player--winner") ||
    player1EL.classList.contains("player--winner")
  ) {
    btnRoll.removeEventListener("click", btnRollFunction);
    btnHold.removeEventListener("click", btnHoldFunction);
  }
}

function newGame() {
  scores[0] = 0;
  scores[1] = 0;
  current0EL.textContent = 0;
  score0EL.textContent = 0;
  current1EL.textContent = 0;
  score1EL.textContent = 0;
  diceEL.classList.add("hidden");
  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  btnRoll.addEventListener("click", btnRollFunction);
  btnHold.addEventListener("click", btnHoldFunction);
}

btnRoll.addEventListener("click", btnRollFunction);
btnHold.addEventListener("click", btnHoldFunction);
btnNew.addEventListener("click", newGame);
