const anagrams = require('./main');

test('a word that is not an anagram', () => {
  expect(anagrams('laser', ['lazy'])).toStrictEqual([]);
});

test('a word that is an anagram', () => {
  expect(anagrams('racer', ['carer'])).toStrictEqual(['carer']);
});

test('multiple words', () => {
  expect(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])).toStrictEqual([
    'aabb',
    'bbaa',
  ]);
});
