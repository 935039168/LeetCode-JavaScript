/*
 * @lc app=leetcode.cn id=1725 lang=javascript
 *
 * [1725] 可以形成最大正方形的矩形数目
 */

// @lc code=start
/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function (rectangles) {
    const n = rectangles.length,
        res = [];
    for (let i = 0; i < n; i++) {
        res.push(Math.min(rectangles[i][0], rectangles[i][1]));
    }
    res.sort((a, b) => b - a);
    let ans = 0;
    for (let i = 0; i < n; i++) {
        if (res[0] === res[i]) ans++;
        else break;
    }
    return ans;
};
// @lc code=end
console.log(countGoodRectangles([
    [3, 1]
]));