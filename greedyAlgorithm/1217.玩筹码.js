/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function (position) {
    let odd = 0, even = 0;
    const n = position.length;
    for (let i = 0; i < n; i++) {
        if (position[i] % 2 !== 0) {
            odd++;
        } else {
            even++;
        }
    }
    return Math.min(odd, even);
};
// @lc code=end

