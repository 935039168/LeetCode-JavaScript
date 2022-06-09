/*
 * @lc app=leetcode.cn id=1037 lang=javascript
 *
 * [1037] 有效的回旋镖
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {boolean}
 */
 var isBoomerang = function (points) {
    return (points[0][0] - points[1][0]) * (points[0][1] - points[2][1]) !== (points[0][1] - points[1][1]) * (points[0][0] - points[2][0]);
};
// @lc code=end

