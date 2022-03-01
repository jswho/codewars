const findOutlier = require('./main');

test('at least 3 integers and returns the outlier', () => {
  expect(findOutlier([1, 2, 3])).toBe(2);
});
