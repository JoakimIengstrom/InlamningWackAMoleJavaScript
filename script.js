//glue-code, (UI-code, frontend-code)
const holes = document.querySelectorAll(".hole");
const moles = document.querySelectorAll(".mole");
const scoreBoard = document.querySelector(".score");
const highScore = document.querySelector(".highScore");
const startButton = document.querySelector(".startButton");
const countdownBoard = document.querySelector(".countdown");

let lastHole;
let score = 0;
let countdown;
let timeUp = false;
let newHighscore = 0;
let timeLimit = 20000;

//--------------------------

//random 0-5
function pickRandomHole(holes) {
  const randomHole = Math.floor(Math.random() * holes.length);
  const hole = holes[randomHole];
  //Check for not same hole
  if (hole === lastHole) {
    return pickRandomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function popOut() {
  const time = Math.random() * 1300 + 400;
  const hole = pickRandomHole(holes);
  hole.classList.add("up");
  setTimeout(function () {
    hole.classList.remove("up");
    if (!timeUp) popOut();
  }, time);
}

function startGame() {
  countdown = timeLimit / 1000;
  scoreBoard.textContent = 0;
  scoreBoard.style.textContent = "block";
  startButton.style.visibility = "hidden";
  countdownBoard.textContent = "Time left: " + countdown;
  timeUp = false;
  score = 0;
  popOut();
  setTimeout(function () {
    timeUp = true;
  }, timeLimit);

  let startCountdown = setInterval(function () {
    countdown -= 1;
    countdownBoard.textContent = "Time left: " + countdown;
    if (countdown < 0) {
      countdown = 0;
      clearInterval(startCountdown);
      startButton.style.visibility = "visible";
      countdownBoard.textContent = "Times up!";
      if (score > newHighscore) {
        newHighscore = score;
      }

      if (score > 0 && score == newHighscore) {
        highScore.textContent = "New HighScore: " + score + " points";
        localStorage.setItem("save", JSON.stringify(newHighscore));
        if (score > 0 && score == newHighscore && score > 15) {
          highScore.textContent = "Great job!: " + score;
        }
      }
    }
  }, 1000);
}

function printHighscore() {
  let oldHighscore = localStorage.getItem("save");
  if (localStorage.getItem("save") > 0) {
    highScore.textContent = "HighScore: " + oldHighscore + " points";
  }
}

printHighscore();

function whack(e) {
  score++;
  this.style.backgroundImage = 'url("/image/sonic3.png")';
  this.style.pointerEvents = "none";
  setTimeout(() => {
    this.style.backgroundImage = 'url("/image/sonic.png")';
    this.style.pointerEvents = "all";
  }, 800);
  scoreBoard.textContent = score;
}

startButton.addEventListener("click", startGame);

moles.forEach((mole) => mole.addEventListener("click", whack));
