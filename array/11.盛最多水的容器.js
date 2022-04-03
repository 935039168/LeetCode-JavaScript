/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针
var maxArea = function (height) {
    const len = height.length;
    let left = 0, right = len - 1, res = 0;
    while (left < right) {
        const h = height[left] > height[right] ? height[right] : height[left];
        res = Math.max(res, h * (right - left));
        if (height[right] > height[left]) left++;
        else right--;
    }
    return res;
};
// @lc code=end

