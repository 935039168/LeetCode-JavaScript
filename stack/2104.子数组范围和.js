/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力
var subArrayRanges = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let max = -Number.MAX_VALUE, min = Number.MAX_VALUE;
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);
            res += max - min;
        }
    }
    return res;
};