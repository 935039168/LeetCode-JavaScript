/*
 * @lc app=leetcode.cn id=324 lang=javascript
 *
 * [324] 摆动排序 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const res = [];
    const mid = Math.floor((n + 1) / 2) - 1;
    let p1 = mid, p2 = n - 1, p = 0;
    while (p1 >= 0 || p2 > mid) {
        res[p++] = nums[p1--];
        if (p2 > mid) res[p++] = nums[p2--];
    }
    for (let i = 0; i < n; i++) {
        nums[i] = res[i];
    }
};
// @lc code=end

