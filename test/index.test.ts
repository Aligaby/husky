import { subtr, sum } from "../index";

describe("Add 2 numbers", () => {
  test("check that 1 + 2 is equal to 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Substract 2 numbers", () => {
  test("check that 5 - 3 is equal to 2", () => {
    expect(subtr(5, 3)).toBe(0);
  });
});
