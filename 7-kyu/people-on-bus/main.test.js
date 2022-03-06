const number = require('./main');

test('for a single bus stop, with 0 people coming on and off the bus', () => {
  expect(number([[0, 0]])).toBe(0);
});

test('for two bus stops, with 0 people coming on and 1 off', () => {
  expect(
    number([
      [3, 0],
      [0, 1],
    ])
  ).toBe(2);
});
