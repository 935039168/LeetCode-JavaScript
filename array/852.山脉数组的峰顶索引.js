/*
 * @lc app=leetcode.cn id=852 lang=javascript
 *
 * [852] 山脉数组的峰顶索引
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((right - left) / 2) + left;
        if (arr[mid] < arr[mid - 1]) {
            right = mid - 1;
        } else if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else { return mid; }
    }
};
// @lc code=end

