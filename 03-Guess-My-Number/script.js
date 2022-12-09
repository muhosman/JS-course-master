"use strict";

let score = 20;
let flag = 0;
let highScore = 0;
const message = document.querySelector(".message");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

check.addEventListener("click", function () {
  if (flag == 0) {
    const guess = Number(document.querySelector(".guess").value);

    if (!guess) {
      displayMessage("🛑 No number 🛑");
    } else if (guess == secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      displayMessage("🎉 Correct Number 🎉");
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      flag = 1;
      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else if (guess != secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? "📈 Too High" : "📉 Too Low");
        score--;
        document.querySelector(".score").textContent = score;
      } else {
        displayMessage("💥 Lost the game");
        document.querySelector(".score").textContent = 0;
      }
    }
  }
});

again.addEventListener("click", function () {
  flag = 0;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = " ";
  document.querySelector(".score").textContent = score;
});
