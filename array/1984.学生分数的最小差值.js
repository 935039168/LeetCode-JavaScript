/*
 * @lc app=leetcode.cn id=1984 lang=javascript
 *
 * [1984] 学生分数的最小差值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    let res = Infinity;
    for (let i = 0; i + k - 1 < n; i++) {
        res = Math.min(res, nums[i + k - 1] - nums[i]);
    }
    return res;
};
// @lc code=end
console.log(minimumDifference([90], 1)); // 0
console.log(minimumDifference([9, 4, 1, 7], 2)); // 2