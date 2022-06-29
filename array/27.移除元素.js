/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        if (nums[left] === val) {
            nums[left] = nums[right];
            right--;
        } else {
            left++;
        }
    }
    console.log(nums, left);
    return left;
};
// @lc code=end
console.log(removeElement([2], 3));
