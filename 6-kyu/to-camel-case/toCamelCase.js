/*
Complete the function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/

const toCamelCase = (string) => {
  const regex = /-|_/;

  const delimited = string.split(regex);

  return delimited.reduce((camelCase, word, index) => {
    if (index == 0) {
      return (camelCase += word);
    } else {
      return (camelCase += `${word[0].toUpperCase()}${word.substring(1)}`);
    }
  }, '');
};

module.exports = toCamelCase;
