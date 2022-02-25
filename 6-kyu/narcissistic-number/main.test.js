const narcissistic = require('./main');

test('a single digit', () => {
  expect(narcissistic(1)).toBe(true);
});
