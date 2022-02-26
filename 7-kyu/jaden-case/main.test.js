const toJadenCase = require('./main');

test('a single word, with the initial Jaden case spelling', () => {
  const string = 'How';
  expect(string.toJadenCase()).toBe('How');
});

test('an all lowercase word', () => {
  const string = 'jaden';
  expect(string.toJadenCase()).toBe('Jaden');
});

test('two words at the beginning of a sentence', () => {
  const string = 'How can';
  expect(string.toJadenCase()).toBe('How Can');
});

test('a full sentence', () => {
  const notJadenCase = "How can mirrors be real if our eyes aren't real";
  const jadenCase = "How Can Mirrors Be Real If Our Eyes Aren't Real";
  expect(notJadenCase.toJadenCase()).toBe(jadenCase);
});
