const number = require('./main');

test('for a single bus stop, with 0 people coming on and off the bus', () => {
  expect(number([0, 0])).toBe(0);
});
