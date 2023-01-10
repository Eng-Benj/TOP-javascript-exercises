const removeFromArray = function(array, ...args) {
    return array.filter(arg => !args.includes(arg))
};

// Do not edit below this line
module.exports = removeFromArray;
