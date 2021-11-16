/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let x = m,
        y = n;
    const len = ops.length;
    for (let i = 0; i < len; i++) {
        x = Math.min(x, ops[i][0]);
        y = Math.min(y, ops[i][1]);
    }
    return x * y;
};
// @lc code=end