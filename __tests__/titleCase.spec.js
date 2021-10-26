const titleCase = require("../titleCase");

describe("Title case function for all lower case", () => {
  test("it should convert all lower string to title case)", () => {
    expect(titleCase("chidi bede")).toEqual("Chidi Bede");
  });
});

describe("Title case function for all upper case", () => {
  test("it should convert all upper string to title case)", () => {
    expect(titleCase("CHIDI BEDE")).toEqual("Chidi Bede");
  });
});
