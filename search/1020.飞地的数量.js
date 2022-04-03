/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    const m = grid.length,
        n = grid[0].length,
        D = [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0]
        ];
    let isfd = true,
        counter = 0,
        ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            counter = dfs(i, j);
            if (isfd) {
                ans += counter;
            }
            counter = 0;
            isfd = true;
        }
    }
    return ans;

    function dfs(i, j) {
        if (grid[i][j] === 0) return 0;
        grid[i][j] = 0;
        let res = 1;
        if (isfd === true && (i === 0 || j === 0 || i === m - 1 || j === n - 1)) {
            isfd = false;
        }
        for (let k = 0; k < 4; k++) {
            if (i + D[k][0] >= 0 && i + D[k][0] < m &&
                j + D[k][1] >= 0 && j + D[k][1] < n) {
                if (grid[i + D[k][0]][j + D[k][1]] === 1) {
                    res += dfs(i + D[k][0], j + D[k][1]);
                    grid[i + D[k][0]][j + D[k][1]] = 0;
                }
            }
        }
        return res;
    };
};
// @lc code=end

console.log(numEnclaves([
    [0, 0, 0, 0],
    [1, 0, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0]
])); // 3
console.log(numEnclaves([
    [0, 1, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0]
])); // 0