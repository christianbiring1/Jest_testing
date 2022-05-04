
const capitalizeString = require('./capitalizestr');

test('the capitalize string', () => {
  expect(capitalizeString('aba')).toBe('Aba');
});