const { expect } = require('@jest/globals');
const maskify = require('./main');

test('a string less than or equal to four characters in length, should return itself', () => {
  expect(maskify('mask')).toBe('mask');
});

test('a string that is 5 characters in length, should have its first character masked', () => {
  expect(maskify('12345')).toBe('#2345');
});

test('a long string that has last 4 characters unmasked', () => {
  expect(maskify('4556364607935616')).toBe('############5616');
});
