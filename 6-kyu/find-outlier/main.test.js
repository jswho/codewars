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
