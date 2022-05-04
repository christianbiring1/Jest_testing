
const myCalculator = {

  add(num1, num2) {
    return num1 + num2;
  },

  subtract(num1, num2) {
    return num1 - num2;
  },

  divide(num1, num2) {
    return num1 / num2;
  },

  multiply(num1, num2) {
    return num1 * num2;
  }
}

// console.log(myCalculator.multiply(10,5));
module.exports = myCalculator;