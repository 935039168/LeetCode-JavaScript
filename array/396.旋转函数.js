/*
 * @lc app=leetcode.cn id=396 lang=javascript
 *
 * [396] 旋转函数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function (nums) {
    const n = nums.length,
        s = nums.reduce((p, c) => p + c, 0);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i * nums[i];
    }
    let ans = sum;
    for (let i = n - 1; i > 0; i--) {
        sum = sum + s - n * nums[i];
        ans = Math.max(ans, sum);
    }
    return ans;
};
console.log(maxRotateFunction([4, 3, 2, 6]));
// @lc code=end

