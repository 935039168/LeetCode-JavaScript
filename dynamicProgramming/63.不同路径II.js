// https://leetcode-cn.com/problems/unique-paths-ii/
// 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
// 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
// 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 
var uniquePathsWithObstacles = function (obstacleGrid) {
    const len1 = obstacleGrid.length,
        len2 = obstacleGrid[0].length,
        dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    dp[1][0] = 1;
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (obstacleGrid[i - 1][j - 1] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[len1][len2];
};

console.log(uniquePathsWithObstacles([[0, 0, 0], [0, 1, 0], [0, 0, 0]]));// 2
console.log(uniquePathsWithObstacles([[0, 1], [0, 0]]));// 1
console.log(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0],[0,0,0],[0,1,0],[0,0,0],[0,0,0],[0,1,0],[0,0,0]]));// 8