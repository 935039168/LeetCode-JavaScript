/*
 * @lc app=leetcode.cn id=1219 lang=javascript
 *
 * [1219] 黄金矿工
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 回溯算法
// https://leetcode-cn.com/problems/path-with-maximum-gold/submissions/
var getMaximumGold = function (grid) {
    this.grid = grid;
    this.m = grid.length;
    this.n = grid[0].length;
    this.dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];
    this.ans = 0;

    const dfs = (x, y, gold) => {
        gold += grid[x][y];
        this.ans = Math.max(ans, gold);

        const rec = grid[x][y];
        grid[x][y] = 0;

        for (let d = 0; d < 4; ++d) {
            const nx = x + this.dirs[d][0];
            const ny = y + this.dirs[d][1];
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] > 0) {
                dfs(nx, ny, gold);
            }
        }

        grid[x][y] = rec;
    }
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (grid[i][j] !== 0) {
                dfs(i, j, 0);
            }
        }
    }
    return ans;
};
// @lc code=end