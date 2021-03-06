/*
You are provided with a list (or array) of integer pairs.

Elements of each pair represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

Your task is to return number of people who are still in the bus after the last bus station (after the last array). 

Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

The second value in the first integer array is 0, since the bus is empty in the first bus stop.
*/

const number = (busStops) => {
  let peopleOnBus = 0;

  busStops.forEach((busStop) => {
    peopleOnBus += busStop.reduce((onBus, offBus) => onBus - offBus);
  });
  return peopleOnBus;
};

module.exports = number;
