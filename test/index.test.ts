import { sum } from "../index";

describe("Add 2 numbers", () => {
  test("check that 1 + 2 is equal to 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
