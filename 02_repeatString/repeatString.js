const repeatString = function(string, num) {
    let concString = ""
    for (let i = 1; i<=num; i++){
        concString += string
    }
    if (num < 0) {
        concString = "ERROR";
    }
    return concString
};

// Do not edit below this line
module.exports = repeatString;
