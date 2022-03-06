const number = require('./main');

test('for a single bus stop, with 0 people coming on and off the bus', () => {
  expect(number([[0, 0]])).toBe(0);
});

test('for two bus stops, with 3 people coming on and 1 off', () => {
  expect(
    number([
      [3, 0],
      [0, 1],
    ])
  ).toBe(2);
});

test('multiple bus stops', () => {
  const testCases = [
    {
      busJourney: [
        [10, 0],
        [3, 5],
        [5, 8],
      ],
      peopleStillOnBus: 5,
    },
    {
      busJourney: [
        [3, 0],
        [9, 1],
        [4, 8],
        [12, 2],
        [6, 1],
        [7, 8],
      ],
      peopleStillOnBus: 21,
    },
  ];

  testCases.forEach((test) => {
    expect(number(test.busJourney)).toBe(test.peopleStillOnBus);
  });
});
