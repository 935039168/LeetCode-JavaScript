/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
// dfs
var numIslands1 = function (grid) {
    function dfs(r, c) {
        const nr = grid.length,
            nc = grid[0].length;
        if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] === '0') {
            return;
        }
        grid[r][c] = '0';
        dfs(r - 1, c);
        dfs(r + 1, c);
        dfs(r, c - 1);
        dfs(r, c + 1);
    }
    if (grid === null || grid.length === 0) {
        return 0;
    }
    const nr = grid.length,
        nc = grid[0].length;
    let num_islands = 0;
    for (let r = 0; r < nr; ++r) {
        for (let c = 0; c < nc; ++c) {
            if (grid[r][c] === '1') {
                ++num_islands;
                dfs(r, c);
            }
        }
    }
    return num_islands;
};
// bfs
var numIslands = function (grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }
    const nr = grid.length,
        nc = grid[0].length;
    let num_islands = 0;
    for (let r = 0; r < nr; r++) {
        for (let c = 0; c < nc; c++) {
            if (grid[r][c] === '1') {
                ++num_islands;
                grid[r][c] = '0';
                let neighbors = [r * nc + c];
                while (neighbors.length > 0) {
                    const id = neighbors.shift(),
                        row = Math.floor(id / nc),
                        col = id % nc;
                    for (const [x, y] of ([
                            [row - 1, col],
                            [row + 1, col],
                            [row, col - 1],
                            [row, col + 1]
                        ])) {
                        if (0 <= x && x < nr && 0 <= y && y < nc && grid[x][y] == "1") {
                            neighbors.push(x * nc + y);
                            grid[x][y] = '0';
                        }
                    }
                }
            }
        }
    }
    return num_islands;
};
// @lc code=end
console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
])); // 1
console.log(numIslands([
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
])); // 3