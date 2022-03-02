const friend = require('./main');

test('a single name of length 4', () => {
  expect(friend(['Mark'])).toStrictEqual(['Mark']);
});
