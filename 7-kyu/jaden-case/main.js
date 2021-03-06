/*
Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
*/

// const toJadenCase = (string) => {
//   return string
//     .split(' ')
//     .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
//     .join(' ');
// };

String.prototype.toJadenCase = function () {
  const string = Object.values(this).join('');
  return string
    .split(' ')
    .map((word) => `${word[0].toUpperCase()}${word.substring(1)}`)
    .join(' ');
};

// module.exports = toJadenCase;
module.exports = String.prototype.toJadenCase;
