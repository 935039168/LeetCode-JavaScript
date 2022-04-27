/*
 * @lc app=leetcode.cn id=417 lang=javascript
 *
 * [417] 太平洋大西洋水流问题
 */

// @lc code=start
/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
// 深度优先搜索
var pacificAtlantic = function (heights) {
    const m = heights.length,
        n = heights[0].length,
        flow1 = new Array(m).fill(0).map(() => new Array(n).fill(false)),
        flow2 = new Array(m).fill(0).map(() => new Array(n).fill(false)),
        dfs = (r, c, flow) => {
            flow[r][c] = true;
            [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]].forEach(([rr, cc]) => {
                if (rr >= 0 && cc >= 0 && rr < m && cc < n
                    && heights[rr][cc] >= heights[r][c]
                    && !flow[rr][cc]) {
                    dfs(rr, cc, flow);
                }
            });
        };
    for (let r = 0; r < m; r++) {
        dfs(r, 0, flow1);
        dfs(r, n - 1, flow2);
    }
    for (let c = 0; c < n; c++) {
        dfs(0, c, flow1);
        dfs(m - 1, c, flow2);
    }
    const res = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (flow1[r][c] && flow2[r][c]) {
                res.push([r, c])
            }
        }
    }
    return res;
};
// @lc code=end
console.log(pacificAtlantic([[3, 3, 3, 3, 3, 3], [3, 0, 3, 3, 0, 3], [3, 3, 3, 3, 3, 3]]));
console.log(pacificAtlantic([[1, 2, 2, 3, 5], [3, 2, 3, 4, 4], [2, 4, 5, 3, 1], [6, 7, 1, 4, 5], [5, 1, 1, 2, 4]]));
console.log(pacificAtlantic([[2, 1], [1, 2]]));
