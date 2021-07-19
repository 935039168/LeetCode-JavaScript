/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let a = 0;
    let b = 1;
    let r = a;
    for (let i = 0; i < n; i++) {
        [a, b] = [b, r = a + b];
    }
    return r;
};