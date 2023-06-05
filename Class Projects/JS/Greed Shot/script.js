"use strict";

const firstPlayerEl = document.getElementById(`player--0`);
const secondPlayerEl = document.getElementById(`player--1`);

const shooterEl = document.querySelector(".shooter_container");
const laserEl = document.querySelector(".laser");

const firstplayerOverallScoreEl = document.getElementById("overall_score--0");
const firstPlayerCurrentScoreEl = document.getElementById("current_score--0");

const secondplayerOverallScoreEl = document.getElementById("overall_score--1");
const secondPlayerCurrentScoreEl = document.getElementById("current_score--1");

const addCurrentScore1El = document.getElementById("add_curr_score--0");
const addCurrentScore2El = document.getElementById("add_curr_score--1");

const popupList = document.querySelectorAll(".popup");

const restartBtnEl = document.querySelector(".restart_btn");

// generating random numbers:
const generateRandomNumber = (min, max) =>
  Math.trunc(Math.random() * (max - min) + min) + 1;

// handeling laser width:
const handleLaserWidth = (width) => {
  laserEl.style.width = `${width}px`;
};

// adding the animations:
const addAnimation = (randomNum, animationType) => {
  popupList[popupList.length - randomNum].classList.add(animationType);
};

// animation remover:
const removeAllAnimations = function () {
  for (let i = 0; i < popupList.length; i++) {
    popupList[i].classList.remove(
      "shakeAnimate",
      "translateAbove",
      "translateBelow"
    );
  }
};

// application data:
let overallScores = [0, 0],
  activePlayerCurrentScore = 0,
  playerActive = 0,
  gameWinScore = 50,
  gameWon = false;

const invalidScores = [1, 5, 10];

// init function:
const init = function () {
  gameWon = false;

  firstplayerOverallScoreEl.textContent =
    secondplayerOverallScoreEl.textContent =
    firstPlayerCurrentScoreEl.textContent =
    secondPlayerCurrentScoreEl.textContent =
      "0";

  overallScores = [0, 0];
  activePlayerCurrentScore = 0;
  playerActive = 0;

  handleLaserWidth(0);
  removeAllAnimations();

  firstPlayerEl.classList.add("player--active");
  secondPlayerEl.classList.remove("player--active");

  addCurrentScore1El.classList.remove("isDisabled");
  addCurrentScore2El.classList.add("isDisabled");

  // after someone wins:
  shooterEl.classList.remove("isDisabled");

  firstPlayerEl.classList.remove("winner", "loser");
  secondPlayerEl.classList.remove("winner", "loser");

  restartBtnEl.classList.remove("animateUpdown");
};

init();

// game winning condition:
const handleGameWin = () => {
  shooterEl.classList.add("isDisabled");

  document.getElementById(`player--${playerActive}`).classList.add("winner");
  document
    .getElementById(`player--${playerActive === 0 ? 1 : 0}`)
    .classList.add("loser");

  restartBtnEl.classList.add("animateUpdown");

  gameWon = true;
};

// player switching:
const switchPlayers = function () {
  document.getElementById(`current_score--${playerActive}`).textContent = 0;

  firstPlayerEl.classList.toggle("player--active");
  secondPlayerEl.classList.toggle("player--active");

  addCurrentScore1El.classList.toggle("isDisabled");
  addCurrentScore2El.classList.toggle("isDisabled");

  playerActive = playerActive === 0 ? 1 : 0;

  activePlayerCurrentScore = 0;
};

// game play:
shooterEl.addEventListener("click", function () {
  if (gameWon) return;

  const randomlyGeneratedNumber = generateRandomNumber(0, 10);
  handleLaserWidth(randomlyGeneratedNumber * 100);

  removeAllAnimations();

  if (invalidScores.includes(randomlyGeneratedNumber)) {
    addAnimation(randomlyGeneratedNumber, "shakeAnimate");
    switchPlayers();
  } else {
    activePlayerCurrentScore += randomlyGeneratedNumber;
    document.getElementById(`current_score--${playerActive}`).textContent =
      activePlayerCurrentScore;

    addAnimation(
      randomlyGeneratedNumber,
      playerActive === 0 ? "translateAbove" : "translateBelow"
    );
  }
});

const fetchOverallScore = function () {
  if (gameWon) return;

  overallScores[playerActive] += activePlayerCurrentScore;
  document.getElementById(`overall_score--${playerActive}`).textContent =
    overallScores[playerActive];

  removeAllAnimations();
  handleLaserWidth(0);

  if (overallScores[playerActive] >= gameWinScore) {
    handleGameWin();
  } else {
    switchPlayers();
  }
};

addCurrentScore1El.addEventListener("click", fetchOverallScore);
addCurrentScore2El.addEventListener("click", fetchOverallScore);

// restart btn:
restartBtnEl.addEventListener("click", init);