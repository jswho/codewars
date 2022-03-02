const friend = require('./main');

test('a single name of length 4', () => {
  expect(friend(['Mark'])).toStrictEqual(['Mark']);
});

test('a name less than 4 characters', () => {
  expect(friend(['Kim'])).toStrictEqual([]);
});

test('a name more than 4 characters', () => {
  expect(friend(['Oliver'])).toStrictEqual([]);
});

test('multiple names of different lengths', () => {
  expect(friend(['Ryan', 'Kieran', 'Mark', 'Kim'])).toStrictEqual([
    'Ryan',
    'Mark',
  ]);
});
