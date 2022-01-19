/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// 哈希
var containsNearbyDuplicate1 = function (nums, k) {
    const map = new Map(),
        n = nums.length;
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        if (map.has(num) && i - map.get(num) <= k) return true;
        map.set(num, i);
    }
    return false;
};
// 滑动窗口
var containsNearbyDuplicate = function (nums, k) {
    const set = new Set(),
        n = nums.length;
    for (let i = 0; i < n; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) return true;
        set.add(nums[i]);
    }
    return false;
};
// @lc code=end
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
console.log(containsNearbyDuplicate([99, 99], 2)); // true