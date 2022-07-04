const leapYears = function(isLeapYear) {
    return isLeapYear % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

// Do not edit below this line
module.exports = leapYears;
