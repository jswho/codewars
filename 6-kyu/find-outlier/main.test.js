const findOutlier = require('./main');

test('at least 3 integers and returns the outlier', () => {
  expect(findOutlier([1, 2, 3])).toBe(2);
});

test('at least 3 integers and returns an odd outlier', () => {
  expect(findOutlier([16, 17, 18])).toBe(17);
});
