const removeFromArray = function(arr, ...args) {  // ...args is an array of arguments passed to the function 
    return arr.filter(item => !args.includes(item));  // filter returns a new array with all the items that don't match the condition
};

// Do not edit below this line
module.exports = removeFromArray;
