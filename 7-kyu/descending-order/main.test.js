const descendingOrder = require('./main');

test('a single number', () => {
  expect(descendingOrder(3)).toBe(3);
});
