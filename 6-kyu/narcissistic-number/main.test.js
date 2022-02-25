const narcissistic = require('./main');

test('a single digit', () => {
  expect(narcissistic(1)).toBe(true);
});

test('a double digit is not a narcissistic number', () => {
  expect(narcissistic(52)).toBe(false);
});
