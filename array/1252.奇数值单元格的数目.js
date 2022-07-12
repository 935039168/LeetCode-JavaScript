/*
 * @lc app=leetcode.cn id=1252 lang=javascript
 *
 * [1252] 奇数值单元格的数目
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function (m, n, indices) {
    const arr = new Array(m).fill(0).map(() => new Array(n).fill(0));
    let res = 0;
    for (const [x, y] of indices) {
        for (let i = 0; i < n; i++) {
            arr[x][i]++;
        }
        for (let i = 0; i < m; i++) {
            arr[i][y]++;
        }
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((arr[i][j] & 1) !== 0) {
                res++;
            }
        }
    }
    return res;
};
// @lc code=end
// https://leetcode.cn/problems/cells-with-odd-values-in-a-matrix/solution/qi-shu-zhi-dan-yuan-ge-de-shu-mu-by-leet-oa4o/
var oddCells = function (m, n, indices) {
    const rows = new Array(m).fill(0),
        cols = new Array(n).fill(0);
    let res = 0;
    for (const [x, y] of indices) {
        rows[x]++;
        cols[y]++;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((rows[i] + cols[j]) & 1 !== 0) res++;
        }
    }
    return res;
};

var oddCells = function (m, n, indices) {
    const rows = new Array(m).fill(0),
        cols = new Array(n).fill(0);
    let res = 0;
    for (const [x, y] of indices) {
        rows[x]++;
        cols[y]++;
    }
    let oddx = 0, oddy = 0;
    for (let i = 0; i < m; i++) {
        if ((rows[i] & 1) !== 0) {
            oddx++;
        }
    }
    for (let i = 0; i < n; i++) {
        if ((cols[i] & 1) !== 0) {
            oddy++;
        }
    }
    return oddx * (n - oddy) + (m - oddx) * oddy;
};