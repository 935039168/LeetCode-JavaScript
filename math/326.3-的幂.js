/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree1 = function (n) {
    let value = 1;
    while (value <= n) {
        if (value === n) {
            return true;
        }
        value *= 3;
    }
    return false;
};
var isPowerOfThree2 = function (n) {
    while (n !== 0 && n % 3 === 0) {
        n = n / 3;
    }
    return n === 1;
};
// 3进制转换，如果可以被3整除，格式必然为1000……
var isPowerOfThree3 = function (n) {
    return /^10*$/.test(n.toString(3));
};
// 3的幂次的质因子只有3，而所给出的n如果也是3的幂次，故而题目中所给整数范围内最大的3的幂次的因子只能是3的幂次，1162261467是3的19次幂，是整数范围内最大的3的幂次
var isPowerOfThree = function (n) {
    return n > 0 && 1162261467 % n == 0;
};
// @lc code=end

