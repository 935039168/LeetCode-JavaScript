/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
    let s = new Set();
    const n = paths.length;
    for (let i = 0; i < n; i++) {
        s.add(paths[i][0]);
    }
    for (let i = 0; i < n; i++) {
        if (!s.has(paths[i][1])) {
            return paths[i][1];
        }
    }
};
// @lc code=end

