"use strict";

//Let's start by rolling the dice//

//1. The number of the dice needs to be random ---> COMPLETED
//2. For every time that random number is generated, we need to display a dice image representing it ---> COMPLETED

//We have to make the "roll dice" button roll the dice ----> COMPLETED
//1.)

function addsNumber(dice) {
  dice += dice;
}

document.querySelector(".btn--roll").addEventListener("click", function () {
  const dice = Math.trunc(Math.random() * 6) + 1;

  if (dice === 1) {
    document.querySelector(".dice").src = "dice-1.png";
  } else if (dice === 2) {
    document.querySelector(".dice").src = "dice-2.png";
  } else if (dice === 3) {
    document.querySelector(".dice").src = "dice-3.png";
  } else if (dice === 4) {
    document.querySelector(".dice").src = "dice-4.png";
  } else if (dice === 5) {
    document.querySelector(".dice").src = "dice-5.png";
  } else if (dice === 6) {
    document.querySelector(".dice").src = "dice-6.png";
  }
  document.getElementById("current--0").textContent =
    Number(document.getElementById("current--0").textContent) + dice;
});

document.querySelector(".currentLabel");

//We have to keep adding the dice value into "current" value
