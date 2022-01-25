/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches1 = function (n) {
    return n - 1; // 每次比赛淘汰一队，最终保留一队，则需进行n-1次比赛。
};
// @lc code=end