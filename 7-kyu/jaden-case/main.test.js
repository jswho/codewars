const toJadenCase = require('./main');

test('a single word, with the initial Jaden case spelling', () => {
  expect(toJadenCase('How')).toBe('How');
});
