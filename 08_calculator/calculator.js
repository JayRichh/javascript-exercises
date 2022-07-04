const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arrayToSum, summedOutput) {
  if (summedOutput === undefined) {
    summedOutput = 0;
  }
  if (arrayToSum.length === 0) {
    return summedOutput;
  }
  return sum(arrayToSum.slice(1), summedOutput + arrayToSum[0]);
};
  
const multiply = function(arr) { 
  let total = 1;
  for (i = 0; i < arr.length; i++) {
    total *= arr[i];
  }
  return total;
};

const power = function(num1, num2) {
  return num1 ** num2;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
