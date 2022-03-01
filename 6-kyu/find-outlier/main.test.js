const findOutlier = require('./main');

test('at least 3 integers and returns the outlier', () => {
  expect(findOutlier([1, 2, 3])).toBe(2);
});

test('at least 3 integers and returns an odd outlier', () => {
  expect(findOutlier([16, 17, 18])).toBe(17);
});

test('multiple integers', () => {
  expect(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])).toBe(11);
});

test('multiple integers with a negative integer included', () => {
  expect(findOutlier([160, 3, 1719, 19, 11, 13, -21])).toBe(160);
});
