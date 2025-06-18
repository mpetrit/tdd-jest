import analyzeArray from "./analyzeArray";

test("Works", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("If an element is a char", () => {
  expect(analyzeArray([1, 8, "a", 4, 2, 6])).toEqual("No string");
});
test("If only one element", () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test("If empty", () => {
  expect(analyzeArray([])).toEqual({});
});
