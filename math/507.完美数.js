/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
// 打表
var checkPerfectNumber1 = function (num) {
    return num === 6 || num === 28 || num === 496 || num === 8128 || num === 33550336;
};
// 枚举
var checkPerfectNumber = function (num) {
    if (num === 1) return false;
    let total = 1;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            total += i;
            if (i * i < num) {
                total += num / i;
            }
        }
    }
    if (num === total) return true;
    return false;
};
// @lc code=end