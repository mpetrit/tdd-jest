import reverseString from "./reverseString";

test("Text not the same as it were", () => {
  expect(reverseString("Hello")).not.toBe("Hello");
});

test("Text reversed", () => {
  expect(reverseString("Nah123")).not.toBe("321haN");
});

test("Spaces ignored", () => {
  expect(reverseString(" Nah123 ")).not.toBe("321haN");
});
