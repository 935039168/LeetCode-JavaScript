/*
 * @lc app=leetcode.cn id=688 lang=javascript
 *
 * [688] “马”在棋盘上的概率
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
// https://leetcode-cn.com/problems/knight-probability-in-chessboard/solution/qi-shi-zai-qi-pan-shang-de-gai-lu-by-lee-2qhk/
var knightProbability = function (n, k, row, column) {
    const dirs = [
        [-2, -1],
        [-2, 1],
        [2, -1],
        [2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2]
    ];
    const dp = new Array(k + 1).fill(0).map(() => new Array(n).fill(0).map(() => new Array(n).fill(0)));
    for (let step = 0; step <= k; step++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                if (step === 0) {
                    dp[step][i][j] = 1;
                } else {
                    for (const dir of dirs) {
                        const ni = i + dir[0],
                            nj = j + dir[1];
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                            dp[step][i][j] += dp[step - 1][ni][nj] / 8;
                        }
                    }
                }
            }
        }
    }
    return dp[k][row][column];
};
// @lc code=end
console.log(knightProbability(3, 2, 0, 0)); // 0.06250