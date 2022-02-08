import { Logic } from "../game.js";
import { GameScore } from "../game.js";

//const logic = new Logic();
//const gameScore = new GameScore();

describe("Logic", function () {
  let logic;
  beforeEach(function () {
    logic = new Logic();
  });

  describe("Countdown metod.", function () {
    it("countdown is 20 to start with.", function () {
      assert.equal(20, logic.countdown);
    });

    it("countdown is 19 after running countDown once.", function () {
      logic.countDown();
      assert.equal(19, logic.countdown);
    });
  });

  describe("Reset countdown counter.", function () {
    it("countdown is 18 after running countDown twice.", function () {
      for (let i = 1; i < 3; i++) logic.countDown(i);
      assert.equal(18, logic.countdown);
    });
    it("countdown is 20 after reset countDown.", function () {
      logic.resetCountDown();
      assert.equal(20, logic.countdown);
    });
  });

  describe("Is there time left?", function () {
    it("countdown is more than 0", function () {
      logic.stillTimeLeft();
      assert.notEqual(0, logic.countdown);
    });
  });

  describe("Timer should be 1 after running countDown x20", function () {
    it("is countdon 0 after running 20 time?", function () {
      for (let i = 1; i < 21; i++) logic.countDown(i);
      assert.equal(0, logic.countdown);
    });
  });
});

describe("Score functions", function () {
  let gameScore;
  let logic;
  beforeEach(function () {
    gameScore = new GameScore();
    logic = new Logic();
  });

  describe("WhackedMole score", function () {
    it("score starts at 0", function () {
      assert.equal(0, gameScore.score);
    });

    it("when wacked one times it should be 1", function () {
      gameScore.whackedMole(logic);
      assert.equal(1, gameScore.score);
    });
  });

  describe("WhackedMole score reset", function () {
    it("wack Once gives score 1", function () {
      gameScore.whackedMole(logic);
      assert.equal(1, gameScore.score);
    });

    it("reset should be 0 after reset.", function () {
      gameScore.resetScore();
      assert.equal(0, gameScore.score);
    });

    it("when wacked 10 times then score should be 10", function () {
      for (let i = 1; i < 11; i++) gameScore.whackedMole(logic);
      assert.equal(10, gameScore.score);
    });
  });

  describe("Local Storage", function () {
    it("Reset score, add 10, uppdate, then save it, load it and expectiong 10", function () {
      localStorage.clear("save");
      gameScore.resetScore();
      for (let i = 1; i < 11; i++) gameScore.whackedMole(logic);
      gameScore.uppdateHighScore();
      gameScore.saveHighScore();
      let checkLoadedScore = gameScore.loadHighScore();
      assert.equal(10, checkLoadedScore);
    });
  });
});
