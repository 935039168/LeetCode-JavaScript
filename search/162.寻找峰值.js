/*
 * @lc app=leetcode.cn id=162 lang=javascript
 *
 * [162] 寻找峰值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 二分法
var findPeakElement1 = function (nums) {
    function getIndex(a, b) {
        return parseInt((a + b - 1) / 2);
    }
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    let len = nums.length - 1,
        left = 1, right = len - 1;
    while (left !== right) {
        index = getIndex(left, right);
        if (nums[index] > nums[index - 1] &&
            nums[index] > nums[index + 1]) {
            left = index;
            break;
        } else if (nums[index] > nums[index - 1] &&
            nums[index] < nums[index + 1]) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }
    return left - 1;
};
// 二分法-简化
var findPeakElement = function (nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        let mid = (left + right) >> 1;
        if (nums[mid] > nums[mid + 1]) {
            right = mid;
        }
        else {
            left = mid + 1;
        }
    }
    return left;
};

var findPeakElement3 = function (nums) {
    let idx = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[idx]) {
            idx = i;
        }
    }
    return idx;
};
// @lc code=end
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4]));

