const repeatString = function (string, num) {
    let i = 0;
    while (i < num) {
        string += string;
        i++;
        return 'hey' + string;
    }
};

// Do not edit below this line
module.exports = repeatString;
