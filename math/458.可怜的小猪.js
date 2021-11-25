/*
 * @lc app=leetcode.cn id=458 lang=javascript
 *
 * [458] 可怜的小猪
 */

// @lc code=start
/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    const states = Math.floor(minutesToTest / minutesToDie) + 1;
    return Math.ceil(getBaseLog(states, buckets));

    // 使用Math.log时基于不同的底数
    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    }
};
// @lc code=end