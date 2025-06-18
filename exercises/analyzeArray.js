const checkString = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (!Number(array[i])) {
      console.log(array[i]);
      return true;
    }
  }
  return false;
};
export default function analyzeArray(array) {
  if (array.length === 0) return {};
  if (checkString(array)) return "No string";
  const obj = {};
  obj.length = array.length;
  obj.average = array.reduce((acc, el) => (acc += el), 0) / obj.length;
  obj.min = Math.min(...array);
  obj.max = Math.max(...array);
  return obj;
}
