const toCamelCase = require('./toCamelCase');

test('an empty string', () => {
  expect(toCamelCase('')).toBe('');
});

test('a word that starts with an uppercase letter', () => {
  expect(toCamelCase('The')).toBe('The');
});
