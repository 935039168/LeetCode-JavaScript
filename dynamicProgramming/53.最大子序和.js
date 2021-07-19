/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let p = 0;// 前方相邻子序最大值
    let r = nums[0];// 最大值
    for (let i = 0; i < nums.length; i++) {
        p = Math.max(nums[i], p + nums[i]);
        r = Math.max(r, p);
    }
    return r;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));// 连续子数组 [4,-1,2,1] 的和最大，为 6 。
console.log(maxSubArray([1]));// 1
console.log(maxSubArray([0]));// 0
console.log(maxSubArray([-1]));// -1