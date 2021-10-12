/*
 * @lc app=leetcode.cn id=29 lang=javascript
 *
 * [29] 两数相除
 */

// @lc code=start
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// 链接 https://leetcode-cn.com/problems/divide-two-integers/solution/pythonjavajavascript-jian-fa-shi-chu-by-amrow/
var divide = function (dividend, divisor) {
    const MAX = 2147483647, MIN = -2147483648;
    if (dividend === MIN && divisor === -1) return MAX;
    let a = Math.abs(dividend), b = Math.abs(divisor), res = 0;
    // 从2^31试到2^0直到被除数被减到比除数小
    for (let i = 31; i >= 0; i--) {
        if ((a >>> i) >= b) {
            if (i === 31) {
                a -= MAX;
                a -= 1;
                res -= MIN;
            } else {
                a -= b << i;
                res += 1 << i;
            }
        }
    }
    return (dividend > 0) === (divisor > 0) ? res : -res;
};
// @lc code=end

console.log(divide(-2147483647, -1));