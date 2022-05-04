
const myCalculator = require('./calculator');

describe('my calculator', () => {
  test('the sum is great', () => {
    expect(myCalculator.add(5, 10)).toBe(15);
  });
  test('the subtraction', () => {
    expect(myCalculator.subtract(10,5)).toBe(5);
  });
  test('division', () => {
    expect(myCalculator.divide(20,10)).toBe(2);
  });
  test('multiplication', () => {
    expect(myCalculator.multiply(2,3)).toBe(6);
  });
})