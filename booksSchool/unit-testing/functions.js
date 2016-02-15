function pow(x, n) {
  var result = 1;

  for (var i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

/**
 * Unit testing:
 * wrote on mochaJS
 */
//describe("pow", function () {
//
//  function makeTest(x) {
//    var expected = x * x * x;
//    it("The construction " + x + " in degree three results: " + expected, function () {
//
//    });
//  }
//
//  for (var x = 1; x <= 5; x++) {
//    makeTest(x);
//  }
//});

describe("pow", function () {

  describe("builds x to degree n", function () {

    function makeTest(x) {
      var expected = x * x * x;
      it("The construction " + x + " in degree three results: " + expected, function () {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (var x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });
});