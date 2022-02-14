/*
 * @lc app=leetcode.cn id=540 lang=javascript
 *
 * [540] 有序数组中的单一元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
//  https://leetcode-cn.com/problems/single-element-in-a-sorted-array/solution/you-xu-shu-zu-zhong-de-dan-yi-yuan-su-by-y8gh/
// 全数组的二分查找
var singleNonDuplicate1 = function (nums) {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        const mid = Math.floor((high - low) / 2) + low;
        // 当mid是偶数时，mid + 1 = mid⊕1；
        // 当mid是奇数时，mid - 1 = mid⊕1；
        if (nums[mid] === nums[mid ^ 1]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
};
// 偶数下标的二分查找
var singleNonDuplicate = function (nums) {
    let low = 0,
        high = nums.length - 1;
    while (low < high) {
        let mid = Math.floor((high - low) / 2) + low;
        mid -= mid & 1;
        if (nums[mid] === nums[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    return nums[low];
};
// @lc code=end