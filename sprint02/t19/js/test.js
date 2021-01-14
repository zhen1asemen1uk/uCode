describe("checkBrackets", function () {
   it("if_NaN", function () {
      assert.equal(checkBrackets(NaN), '-1');
   });
});
describe("checkBrackets", function () {
   it("if_Undefind", function () {
      assert.equal(checkBrackets(undefined), '-1');
   });
});
describe("checkBrackets", function () {
   it("if_null", function () {
      assert.equal(checkBrackets(null), '-1');
   });
});
describe("checkBrackets", function () {
   it("if_infinity", function () {
      assert.equal(checkBrackets(Infinity), '-1');
   });
});
describe("checkBrackets", function () {
   it("if_number", function () {
      assert.equal(checkBrackets(1), '-1');
   });
});
describe("checkBrackets", function () {
   it("1)()(())2(()", function () {
      assert.equal(checkBrackets('1)()(())2(()'), '2');
   });
});
describe("checkBrackets", function () {
   it("1)", function () {
      assert.equal(checkBrackets('1)'), '1');
   });
});
describe("checkBrackets", function () {
   it(")()(", function () {
      assert.equal(checkBrackets('()()'), '0');
   });
});
describe("checkBrackets", function () {
   it("() () () () () () () () () ()", function () {
      assert.equal(checkBrackets('() () () () () () () () () ()'), '0');
   });
});
describe("checkBrackets", function () {
   it("() )(", function () {
      assert.equal(checkBrackets('() )('), '2');
   });
});
describe("checkBrackets", function () {
   it(")(", function () {
      assert.equal(checkBrackets(')('), '2');
   });
});
describe("checkBrackets", function () {
   it("((((((((((1))))))))))", function () {
      assert.equal(checkBrackets('((((((((((1))))))))))'), '0');
   });
});
describe("checkBrackets", function () {
   it("( ( ( ( ( ( (", function () {
      assert.equal(checkBrackets('( ( ( ( ( ( ('), '7');
   });
});
describe("checkBrackets", function () {
   it("(1) (2) (3) (4)", function () {
      assert.equal(checkBrackets('(1) (2) (3) (4)'), '0');
   });
});
describe("checkBrackets", function () {
   it(")1( )2(", function () {
      assert.equal(checkBrackets(')1( )2('), '2');
   });
});