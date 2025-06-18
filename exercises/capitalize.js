export default function capitalize(string) {
  let currString = string.trim();
  if (currString.length === 0) return false;
  currString = currString[0].toUpperCase() + currString.slice(1);
  return currString;
}
