/*
 * @lc app=leetcode.cn id=1414 lang=javascript
 *
 * [1414] 和为 K 的最少斐波那契数字数目
 */

// @lc code=start
/**
 * @param {number} k
 * @return {number}
 */
var findMinFibonacciNumbers = function (k) {
    if (k === 0) return 0;
    let f = 1,
        f1 = 1;
    while (f1 <= k) {
        [f, f1] = [f1, f + f1];
    }
    return 1 + findMinFibonacciNumbers(k - f);
};
// @lc code=end