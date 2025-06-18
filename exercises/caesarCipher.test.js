import caesarCipher from "./caesarCipher";

test("Shifting works", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});
test("Shifting works", () => {
  expect(caesarCipher("Abc!1", 26)).toBe("Abc!27");
});
test("Wrapping works", () => {
  expect(caesarCipher("Xyz", 3)).toBe("Abc");
});
test("Text Preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
test("Special chars", () => {
  expect(caesarCipher("HeLLo!", 3)).toBe("KhOOr!");
});
