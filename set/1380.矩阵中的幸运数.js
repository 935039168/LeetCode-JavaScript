/*
 * @lc app=leetcode.cn id=1380 lang=javascript
 *
 * [1380] 矩阵中的幸运数
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    const minSet = new Set(),
        n = matrix.length,
        m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        minSet.add(Math.min(...matrix[i]));
    }
    for (let i = 0; i < m; i++) {
        const arr = [];
        for (let j = 0; j < n; j++) {
            arr.push(matrix[j][i]);
        }
        const max = Math.max(...arr);
        if (minSet.has(max)) return [max]; // 符合要求的解仅有0或1个
    }
    return [];
};
// @lc code=end
console.log(luckyNumbers([
    [3, 7, 8],
    [9, 11, 13],
    [15, 16, 17]
])); // [15]