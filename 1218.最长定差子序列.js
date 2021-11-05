/*
 * @lc app=leetcode.cn id=1218 lang=javascript
 *
 * [1218] 最长定差子序列
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} difference
 * @return {number}
 */
var longestSubsequence = function (arr, difference) {
    let ans = 0;
    const dp = new Map();
    for (const v of arr) {
        dp.set(v, (dp.get(v - difference) || 0) + 1);
        ans = Math.max(ans, dp.get(v));
    }
    return ans;
};
// @lc code=end

