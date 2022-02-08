import { Logic } from "../game.js";
import { GameScore } from "../game.js";

describe("countdown metod", function () {
  const logic = new Logic();

  it("is count a number?", function () {
    assert.isNumber(logic.countdown, 10, "it is a number");
  });
  it("Is my countdown going down 1 at the time", function () {
    let obj = { val: 20 };
    let countdown = function () {
      obj.val -= 1;
    };
    assert.decreasesBy(countdown, obj, "val", 1);
  });
});
