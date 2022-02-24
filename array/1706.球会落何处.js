/*
 * @lc app=leetcode.cn id=1706 lang=javascript
 *
 * [1706] 球会落何处
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findBall = function (grid) {
    const deep = grid.length,
        width = grid[0].length,
        res = new Array(width).fill(-1);
    for (let i = 0; i < width; i++) {
        let dc = 1, a = 0; b = i;
        [a, b] = canGo(a, b);
        while (a !== -1 && dc < deep) {
            [a, b] = canGo(a, b);
            dc++;
        }
        res[i] = b;
    }
    return res;

    function canGo(a, b) {
        if (grid[a][b] === 1) {
            if (b + 1 < width && grid[a][b + 1] === 1) {
                return [a + 1, b + 1];
            }
        } else {
            if (b - 1 >= 0 && grid[a][b - 1] === -1) {
                return [a + 1, b - 1];
            }
        }
        return [-1, -1];
    }
};
// @lc code=end
console.log(findBall(
    [[1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1],
    [1, 1, 1, 1, 1, 1],
    [-1, -1, -1, -1, -1, -1]]));// [0,1,2,3,4,-1]
