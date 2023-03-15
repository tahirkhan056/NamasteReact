import { sum } from "../utils/helper";

test("Sum function should return sum of two positive number", () => {
  expect(sum(2, 3)).toBe(5);
});
