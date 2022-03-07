/*
Write a function that will find all the anagrams of a word from a list. 
You will be given two inputs a word and an array with words. 
You should return an array of all the anagrams or an empty array if there are none. For example:

anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

const anagrams = (word, list) => {
  const mainWordCount = letterCountForWord(word);

  return list.filter((wordInList) => {
    let wordInListCount = letterCountForWord(wordInList);

    return isAnagram(mainWordCount, wordInList);
  });
};

const isAnagram = (wordCount1, wordInList) => {
  let spellWord = '';

  for (letter of wordInList) {
    if (!!wordCount1[letter]) {
      spellWord += letter;
    }
  }

  return spellWord === wordInList;
};

const letterCountForWord = (word) => {
  const letterCount = {};

  for (letter of word) {
    if (!!letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
};

module.exports = anagrams;
