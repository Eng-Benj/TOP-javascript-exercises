const reverseString = function(string) {
    let revStr = ""
    for (i = 0; i <= string.length; i++){
        revStr += string.charAt(string.length-i)
    }
    return revStr
};

// Do not edit below this line
module.exports = reverseString;
