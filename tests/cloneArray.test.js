const cloneArray = require("../functions/cloneArray");

test("clones array to equal array", () => {
  const array = [4, 3, 7, 5];
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array);
});
