const toCamelCase = require('./toCamelCase');

test('an empty string', () => {
  expect(toCamelCase('')).toBe('');
});
