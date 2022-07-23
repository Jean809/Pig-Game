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

//starting conditions
score0EL.textContent = 0;
score1EL.textContent = 0;
current0EL.textContent = 0;
current1EL.textContent = 0;
diceEL.classList.add("hidden");

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Rolling dice functionality

btnRoll.addEventListener("click", function () {
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
    dice;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

btnHold.addEventListener("click", function () {
  if (activePlayer === 0) {
    score0EL.textContent = Number(score0EL.textContent) + currentScore;
    current0EL.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  } else {
    score1EL.textContent = Number(score1EL.textContent) + currentScore;
    current1EL.textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
  }
});
