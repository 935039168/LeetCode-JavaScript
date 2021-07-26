/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    if (n < 2) { return n; }
    let a = 1, b = 0;
    for (let i = 2; i <= n; i++) {
        [a, b] = [a + b, a];
        a %= 1e9 + 7;
    }
    return a;
};

console.log(fib(100));