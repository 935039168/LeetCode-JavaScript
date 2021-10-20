/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const min = Math.min(...nums);
    let res = 0;
    for (const i of nums) {
        res += i - min;
    }
    return res;
};
// @lc code=end

