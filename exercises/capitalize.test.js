import capitalize from "./capitalize";

test("First char of string turned into upper case, no string =false", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("trim", () => {
  expect(capitalize(" hello")).toBe("Hello");
});
test(" string =false", () => {
  expect(capitalize("    ")).toBe(false);
});
