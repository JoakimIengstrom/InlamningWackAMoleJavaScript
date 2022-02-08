export class Logic {
  constructor() {
    let lastHole;
    this.timeLimit = 20000;
    this.countdown = this.timeLimit / 1000;
  }

  resetCountDown() {
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

  resetScore() {
    this.score = 0;
  }

  whackedMole() {
    this.score++;
  }

  saveHighScore() {
    localStorage.setItem("save", JSON.stringify(this.highscore));
  }
  loadHighScore() {
    if (this.highscore > 0) {
      return this.highscore;
    } else {
      return 0;
    }
  }
  uppdateHighScore() {
    if (this.score > this.highscore) {
      this.highscore = this.score;
    }
  }
}
