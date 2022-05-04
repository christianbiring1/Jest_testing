const reverseString = require('./reverse');

test('reverseString', () => {
  expect(reverseString('maman')).toMatch('namam');
});