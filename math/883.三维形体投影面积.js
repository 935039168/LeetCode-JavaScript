/*
 * @lc app=leetcode.cn id=883 lang=javascript
 *
 * [883] 三维形体投影面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function (grid) {
    const n = grid.length;
    let x = 0, y = 0, z = 0;
    for (let i = 0; i < n; i++) {
        let maxx = 0, maxy = 0;
        for (let j = 0; j < n; j++) {
            z += grid[i][j] > 0 ? 1 : 0;
            maxx = Math.max(maxx, grid[i][j]);
            maxy = Math.max(maxy, grid[j][i]);// 精髓：行列倒置
        }
        x += maxx;
        y += maxy;
    }
    return x + y + z;
};
// @lc code=end

