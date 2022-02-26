const toJadenCase = require('./main');

test('a single word, with the initial Jaden case spelling', () => {
  expect(toJadenCase('How')).toBe('How');
});

test('an all lowercase word', () => {
  expect(toJadenCase('jaden')).toBe('Jaden');
});

test('two words at the beginning of a sentence', () => {
  expect(toJadenCase('How can')).toBe('How Can');
});
