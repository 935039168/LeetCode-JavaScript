/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var removeDuplicates = function (nums) {
    const len = nums.length;
    if (len < 2) return len;
    let j = 0;
    for (let i = 1; i < len; i++)if (nums[j] < nums[i]) nums[++j] = nums[i];
    return ++j;
};
// @lc code=end

