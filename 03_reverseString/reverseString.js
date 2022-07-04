const reverseString = function(string, array) {
    array = string.split('');
    array.reverse();
    let newString = array.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
