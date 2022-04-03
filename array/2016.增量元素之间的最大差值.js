/**
 * @param {number[]} nums
 * @return {number}
 */
// 记录最小前缀值
var maximumDifference = function (nums) {
    const n = nums.length;
    let ans = -1, premin = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] > premin) {
            ans = Math.max(nums[i] - premin, ans);
        } else {
            premin = nums[i];
        }
    }
    return ans;
};