const narcissistic = require('./main');

test('a single digit', () => {
  expect(narcissistic(1)).toBe(true);
});

test('a double digit is not a narcissistic number', () => {
  expect(narcissistic(52)).toBe(false);
});

test('a tripe digit number is a narcissistic number', () => {
  expect(narcissistic(153)).toBe(true);
});

test('a number that is not a narcissistic number', () => {
  expect(narcissistic(1652)).toBe(false);
});
