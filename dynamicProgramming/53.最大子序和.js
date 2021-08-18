/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function (nums) {
    let p = 0;// 当前位置的最大子序和
    let r = nums[0];// 当前最大值
    nums.forEach((x) => {
        p = Math.max(x, p + x);
        r = Math.max(r, p);
    });
    return r;
};

var maxSubArray = function (nums) {
    let p = 0;// 当前位置的最大子序和
    let r = nums[0];// 当前最大值
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        p = Math.max(nums[i], nums[i] + p);// 比较 当前元素 与 当前元素+前值，如果小于当前元素，则重新从当前元素开始
        if (p > r) { r = p; }
    }
    return r;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));// 连续子数组 [4,-1,2,1] 的和最大，为6 。
console.log(maxSubArray([1]));// 1
console.log(maxSubArray([0]));// 0
console.log(maxSubArray([-1]));// -1