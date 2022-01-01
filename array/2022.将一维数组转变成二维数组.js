/*
 * @lc app=leetcode.cn id=2022 lang=javascript
 *
 * [2022] 将一维数组转变成二维数组
 */

// @lc code=start
/**
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
var construct2DArray1 = function(original, m, n) {
    const len = original.length;
    if (m * n !== len) return [];
    const res = new Array(m).fill(0).map(() => new Array(n));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = original[i * n + j];
        }
    }
    return res;
};
var construct2DArray = function(original, m, n) {
    if (original.length !== m * n) {
        return [];
    }
    const ans = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < original.length; i += n) {
        ans[Math.floor(i / n)].splice(0, n, ...original.slice(i, i + n))
    }
    return ans;
};
// @lc code=end