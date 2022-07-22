"use strict";

//Let's start by rolling the dice//

//1. The number of the dice needs to be random ---> COMPLETED
//2. For every time that random number is generated, we need to display a dice image representing it ---> COMPLETED

//We have to make the "roll dice" button roll the dice ----> COMPLETED
//1.)

let currentScore0 = document.getElementById("current--0");
let overallScore0 = document.getElementById("score--0");
const player0 = document.querySelector(" player--0");

//let dice = Math.trunc(Math.random() * 6) + 1; //
let diceIMG = document.querySelector(".dice");
const rollButton = document.querySelector(".btn--roll");
const holdButton = document.querySelector(".btn--hold");

let currentScore1 = document.getElementById("current--1");
let overallScore1 = document.getElementById("score--1");

diceIMG.style.display = "none";

rollButton.addEventListener("click", function () {
  let dice = Math.trunc(Math.random() * 6 + 1);
  diceIMG.style.display = "block";
  if (dice === 1) {
    diceIMG.src = "dice-1.png";
  } else if (dice === 2) {
    diceIMG.src = "dice-2.png";
  } else if (dice === 3) {
    diceIMG.src = "dice-3.png";
  } else if (dice === 4) {
    diceIMG.src = "dice-4.png";
  } else if (dice === 5) {
    diceIMG.src = "dice-5.png";
  } else if (dice === 6) {
    diceIMG.src = "dice-6.png";
  }
  currentScore0.textContent = Number(currentScore0.textContent) + dice;
  if (dice === 1) {
    currentScore0.textContent = 0;
    rollButton.addEventListener("click", function () {
      currentScore0.textContent = 0;
      currentScore1.textContent = Number(currentScore1.textContent) + dice;
    });
  }
});

//We have to keep adding the dice value into "current" value ---> COMPLETE

//We have to make the "HOLD" btn store the value into player's overall score// --- COMPLETED
//We have to reset the current score each time we click the "HOLD" button// ---> COMPLETED
//We have to switch to player 2 after "HOLD" btn is pressed// PLAYER 2 ---> SEMI-COMPLETE (NEED TO DEVIDE THE PROBLEM MORE)
//For every time that random number is generated, we need to display a dice image representing it PLAYER 2

holdButton.addEventListener("click", function () {
  overallScore0.textContent =
    Number(overallScore0.textContent) + Number(currentScore0.textContent);
  currentScore0.textContent = 0;
});
