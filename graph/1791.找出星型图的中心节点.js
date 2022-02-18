/*
 * @lc app=leetcode.cn id=1791 lang=javascript
 *
 * [1791] 找出星型图的中心节点
 */

// @lc code=start
/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter1 = function (edges) {
    if (edges[0][0] === edges[1][0] || edges[0][0] === edges[1][1]) return edges[0][0];
    return edges[0][1];
};
var findCenter2 = function (edges) {
    const n = edges.length + 1,
        degrees = new Array(n + 1).fill(0);
    for (let i = 0; i < n - 1; i++) {
        degrees[edges[i][0]]++;
        degrees[edges[i][1]]++;
    }
    for (let i = 1; i <= n; i++) {
        if (degrees[i] > 1) return i;
    }
};
var findCenter = function (edges) {
    const a = edges.shift();
    const b = edges.shift();
    return a.find(item => b.includes(item));
};
// @lc code=end
console.log(findCenter([
    [1, 3],
    [2, 3]
])); //3
console.log(findCenter([
    [1, 18],
    [18, 2],
    [3, 18],
    [18, 4],
    [18, 5],
    [6, 18],
    [18, 7],
    [18, 8],
    [18, 9],
    [18, 10],
    [18, 11],
    [12, 18],
    [18, 13],
    [18, 14],
    [15, 18],
    [16, 18],
    [17, 18]
])); // 18