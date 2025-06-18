const alphabet = "abcdefghijklmnopqrstuvwxyz";
export default function caesarCipher(string, factor) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let currentValue = string[i].toLowerCase();
    if (Number(currentValue)) {
      newString += Number(currentValue) + factor;
      continue;
    }
    if (
      Number(currentValue) !== currentValue &&
      !alphabet.includes(currentValue)
    ) {
      newString += currentValue;
      continue;
    }
    if (alphabet.indexOf(currentValue) + factor > 25) {
      const index = alphabet.indexOf(currentValue) + factor - 25 - 1;
      newString += checkCase(alphabet[index], string[i]);
      continue;
    }
    newString += checkCase(
      alphabet[alphabet.indexOf(currentValue) + factor],
      string[i]
    );
  }
  return newString;
}
function checkCase(current, previous) {
  if (previous.toUpperCase() === previous) {
    return current.toUpperCase();
  }
  return current;
}
