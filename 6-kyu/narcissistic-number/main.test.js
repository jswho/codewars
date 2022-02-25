const narcissistic = require('./main');

test('Test case, returns true', () => {
  expect(narcissistic(3)).toBe(true);
});
