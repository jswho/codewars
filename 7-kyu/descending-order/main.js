/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. 
Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

const descendingOrder = (number) => {
  return parseInt(
    number
      .toString()
      .split('')
      .map((number) => parseInt(number, 10))
      .sort((a, b) => b - a)
      .map((number) => number.toString())
      .join(''),
    10
  );
};

module.exports = descendingOrder;
