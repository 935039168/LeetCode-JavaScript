/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let res = duration,
        expired = timeSeries[0] + duration;
    const len = timeSeries.length;
    for (let i = 1; i < len; i++) {
        const cTime = timeSeries[i];
        if (cTime < expired) {
            res = res - (expired - cTime) + duration;
        } else {
            res += duration;
        }
        expired = cTime + duration;
    }
    return res;
};
// @lc code=end