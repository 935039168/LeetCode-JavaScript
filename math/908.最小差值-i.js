/*
 * @lc app=leetcode.cn id=908 lang=javascript
 *
 * [908] 最小差值 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    nums.sort((a, b) => a - b);
    const temp = nums[nums.length - 1] - nums[0] - 2 * k;
    return temp > 0 ? temp : 0;
};
// @lc code=end

