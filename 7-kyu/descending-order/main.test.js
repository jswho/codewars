const descendingOrder = require('./main');

test('a single number', () => {
  expect(descendingOrder(3)).toBe(3);
});

test('a double digit number', () => {
  expect(descendingOrder(45)).toBe(54);
});

test('a triple digit number', () => {
  expect(descendingOrder(136)).toBe(631);
});

test('a large number', () => {
  expect(descendingOrder(123456789)).toBe(987654321);
});
