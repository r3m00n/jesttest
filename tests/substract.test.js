const substract = require("../functions/substract");

test("substracts 6 - 9 to equal -3", () => {
  expect(substract(6, 9)).toBe(-3);
});
