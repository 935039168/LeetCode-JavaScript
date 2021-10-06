/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums = Array.from(new Set(nums));
    nums.sort((a, b) => b - a);
    if (nums.length >= 3) { return nums[2]; }
    return nums[0];
};
// @lc code=end

