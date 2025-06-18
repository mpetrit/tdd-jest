import calculator from "./calculator";

test("Can add", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("Can subtract", () => {
  expect(calculator.subtract(3, 1)).toBe(2);
});

test("Can devide", () => {
  expect(calculator.devide(4, 2)).toBe(2);
  expect(calculator.devide(0, 0)).toBe(0);
});
test("Can multiply", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});
