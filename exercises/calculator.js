export default calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  devide: (a, b) => {
    if (a === 0 || b === 0) return 0;
    return a / b;
  },
  multiply: (a, b) => {
    return a * b;
  },
};
