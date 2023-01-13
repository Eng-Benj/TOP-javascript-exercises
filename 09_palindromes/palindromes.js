const palindromes = function (string) {
    const initial = string.toLowerCase().split("");
    const forwards = initial.filter(char => char !== " " && char !== "!" && char !== "." && char !== ",");
    let backwards = forwards.slice();
    backwards.reverse();
    for (let i=0; i < forwards.length; i++) {
        if (forwards[i] !== backwards[i]) {return false};
    };
    return true;
};

palindromes("A car, a man, a maraca.")
// Do not edit below this line
module.exports = palindromes;
