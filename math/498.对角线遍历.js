/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @return {number[]}
 */
// https://leetcode.cn/problems/diagonal-traverse/solution/pythonjavatypescriptgo-by-himymben-d3uq/
// 已知 x + y = k 和 0 <= x < m 还有 0 <= y < n
// 0 <= x < m, 0 <= k - x < n
// 0 <= x < m, k - n < x <= k
var findDiagonalOrder = function (mat) {
    const m = mat.length,
        n = mat[0].length;
    const res = [];
    for (let k = 0; k < m + n - 1; k++) {// 一共m+n-1条对角线
        if ((k & 1) === 1) {
            for (let x = Math.max(0, k - n + 1); x < Math.min(k + 1, m); x++) {
                res.push(mat[x][k - x]);
            }
        } else {
            for (let x = Math.min(k, m - 1); x >= Math.max(0, k - n + 1); x--) {
                res.push(mat[x][k - x]);
            }
        }
    }
    return res;
};
// @lc code=end

