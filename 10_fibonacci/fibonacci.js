const fibonacci = function(member) {
    if (+member <0) {return "OOPS"}
    let fibSeq = [1, 1]
    for (let i = 2; i < +member; i++) {
        fibSeq.push(fibSeq[i-2]+fibSeq[i-1])
    }
    return fibSeq[+member -1]
};

console.log(fibonacci(4))
// Do not edit below this line
module.exports = fibonacci;
