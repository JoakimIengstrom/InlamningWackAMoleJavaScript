export class Logic {
  constructor() {
    let lastHole;
    this.timeLimit = 20000;
    this.countdown = this.timeLimit / 1000;
  }

  countDown() {
    this.countdown -= 1;
  }

  stillTimeLeft() {
    if (this.countdown != 0);
    return this.countdown;
  }
}

export class GameScore {
  constructor() {
    this.score = 0;
    this.newHighscore = 0;
  }

  whackedMole() {
    this.score++;
  }

  saveHighScore() {
    localStorage.setItem("save", JSON.stringify(this.newHighscore));
  }
  loadHighScore() {
    let oldHighscore = localStorage.getItem("save");
    if (localStorage.getItem("save") > 0) {
      return oldHighscore;
    } else {
      oldHighscore = 0;
      return oldHighscore;
    }
  }
  uppdateHighScore() {
    if (this.score > this.newHighscore) {
      this.newHighscore = this.score;
    }
  }
}
