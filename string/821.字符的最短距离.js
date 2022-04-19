/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
// 两次扫描
var shortestToChar = function (s, c) {
    const n = s.length, ans = new Array(n).fill(0);
    for (let i = 0, idx = 10000; i < n; i++) {
        idx = s[i] === c ? 0 : ++idx;
        ans[i] = idx;
    }
    for (let i = n - 1, idx = 10000; i >= 0; i--) {
        idx = s[i] === c ? 0 : ++idx;
        ans[i] = Math.min(idx, ans[i]);
    }
    return ans;
};
// @lc code=end

