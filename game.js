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
    this.highscore = localStorage.getItem("save");
  }

  whackedMole() {
    this.score++;
  }

  saveHighScore() {
    localStorage.setItem("save", JSON.stringify(this.newHighscore));
  }
  loadHighScore() {
    let loadedHighscore = this.highscore;
    if (localStorage.getItem("save") > 0) {
      return loadedHighscore;
    } else {
      loadedHighscore = 0;
      return loadedHighscore;
    }
  }
  uppdateHighScore() {
    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
  }
}
