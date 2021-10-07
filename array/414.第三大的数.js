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
var thirdMax1 = function (nums) {
    nums = Array.from(new Set(nums));
    nums.sort((a, b) => b - a);
    if (nums.length >= 3) { return nums[2]; }
    return nums[0];
};
// 题解： https://leetcode-cn.com/problems/third-maximum-number/solution/di-san-da-de-shu-by-leetcode-solution-h3sp/
var thirdMax = function (nums) {
    let a = b = c = -Number.MAX_VALUE;
    for (const num of nums) {
        if (num > a) {
            c = b;
            b = a;
            a = num;
        } else if (a > num && num > b) {
            c = b;
            b = num;
        } else if (b > num && num > c) {
            c = num;
        }
    }
    return c === -Number.MAX_VALUE ? a : c;
};
// @lc code=end

