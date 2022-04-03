/*
 * @lc app=leetcode.cn id=1601 lang=javascript
 *
 * [1601] 最多可达成的换楼请求数目
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} requests
 * @return {number}
 */
// https://leetcode-cn.com/problems/maximum-number-of-achievable-transfer-requests/solution/pythonjavajavascriptgo-cong-da-dao-xiao-abkmr/
// 回溯
var maximumRequests = function (n, requests) {
    const cnts = new Array(n).fill(0), m = requests.length;
    dfs = function (i, picked) {
        if (i === m) {
            for (let j = 0; j < n; j++) {
                if (cnts[j] !== 0) return 0;
            }
            return picked;
        }
        cnts[requests[i][0]]++;
        cnts[requests[i][1]]--;
        const pMax = dfs(i + 1, picked + 1);
        cnts[requests[i][0]]--;
        cnts[requests[i][1]]++;
        return Math.max(pMax, dfs(i + 1, picked));
    }
    return dfs(0, 0);
};
// @lc code=end
console.log(maximumRequests(3, [[0, 0], [1, 1], [0, 0], [2, 0], [2, 2], [1, 1], [2, 1], [0, 1], [0, 1]]));
