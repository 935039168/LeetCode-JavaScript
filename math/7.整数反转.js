/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let n = 0;
    while (x) {
        n = n * 10 + x % 10;
        x = ~~(x / 10);
    }
    return Math.abs(n) > Math.pow(2, 31) - 1 ? 0 : n;
};
// @lc code=end

