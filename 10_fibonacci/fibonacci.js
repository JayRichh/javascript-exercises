const fibonacci = function (fibonacciNumber) {
    const fibonacci = [0, 1];
    if (fibonacciNumber < 0) {
        return "OOPS";
    } else if (fibonacciNumber === 0) {
        return 0;
    } else if (fibonacciNumber === 1) {
        return 1;
    } else {
        for (let i = 2; i <= fibonacciNumber; i++) {    // i = 2 because fibonacci[0] and fibonacci[1] are already defined above
            fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);    // push the sum of the previous two fibonacci numbers into the array fibonacci
        }
        return fibonacci[fibonacciNumber]; // return the fibonacci number at the index of the array
    }
};

// Do not edit below this line
module.exports = fibonacci;
