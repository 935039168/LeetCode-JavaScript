/*
 * @lc app=leetcode.cn id=905 lang=javascript
 *
 * [905] 按奇偶排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 拼接
var sortArrayByParity = function (nums) {
    const o = new Array(), j = new Array();
    for (const item of nums) {
        if (item % 2 === 0) {
            o.push(item);
        } else {
            j.push(item);
        }
    }
    return [...o, ...j];
};
// 原地交换
var sortArrayByParity = function (nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        while (left < right && nums[left] % 2 === 0) {
            left++;
        }
        while (left < right && nums[right] % 2 === 1) {
            right--;
        }
        if (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
    }
    return nums;
};
// @lc code=end

