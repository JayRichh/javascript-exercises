const sumAll = function (input1, input2) {
  if (typeof input1 !== 'number' || typeof input2 !== 'number') {
    return 'ERROR';
  }
  if (input1 < 0 || input2 < 0) {
    return 'ERROR';
  }
  if (input1 > input2) {
    return sumAll(input2, input1);
  }
  let sum = 0;
  for (let i = input1; i <= input2; i++) {
    sum += i;
  }
  return sum;
}

// Do not edit below this line
module.exports = sumAll;
