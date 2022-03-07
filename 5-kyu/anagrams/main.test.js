const anagrams = require('./main');

test('a word that is not an anagram', () => {
  expect(anagrams('laser', ['lazy'])).toStrictEqual([]);
});
