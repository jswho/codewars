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

test('a full sentence', () => {
  const notJadenCase = "How can mirrors be real if our eyes aren't real";
  const jadenCase = "How Can Mirrors Be Real If Our Eyes Aren't Real";
  expect(toJadenCase(notJadenCase)).toBe(jadenCase);
});
