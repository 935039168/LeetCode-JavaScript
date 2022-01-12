/*
 * @lc app=leetcode.cn id=334 lang=javascript
 *
 * [334] 递增的三元子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
// a保存最小值，b保存a之后的次小值，如果元素大于b，则满足。
var increasingTriplet1 = function (nums) {
    let a = nums[0],
        b = Infinity;
    for (const item of nums) {
        if (item <= a) {
            a = item;
        } else if (item < b) {
            b = item;
        } else if (item > b) {
            return true;
        }
    }
    return false;
};
var increasingTriplet = function (nums) {
    const n = nums.length,
        leftMin = [nums[0]],
        rightMax = [];
    if (n < 3) return false;
    for (let i = 1; i < n; i++) {
        leftMin[i] = Math.min(leftMin[i - 1], nums[i]);
    }
    rightMax[n - 1] = nums[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(rightMax[i + 1], nums[i]);
    }
    for (let i = 1; i < n; i++) {
        if (nums[i] > leftMin[i - 1] && nums[i] < rightMax[i + 1]) return true;
    }
    return false;
};
// @lc code=end
console.log(increasingTriplet([5, 1, 6])); // false