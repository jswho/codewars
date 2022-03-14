const toCamelCase = require('./toCamelCase');

test('an empty string', () => {
  expect(toCamelCase('')).toBe('');
});

test('a word that starts with an uppercase letter', () => {
  expect(toCamelCase('The')).toBe('The');
});

test('a word that starts with a lowercase letter', () => {
  expect(toCamelCase('is')).toBe('is');
});

test('multiple words that are delimited with either an "-" or "_"', () => {
  const testCases = [
    {
      input: 'the-stealth-warrior',
      camelCased: 'theStealthWarrior',
    },
    {
      input: 'javascript_code_',
      camelCased: 'javascriptCode',
    },
  ];

  testCases.forEach((test) => {
    expect(toCamelCase(test.input)).toBe(test.camelCased);
  });
});
