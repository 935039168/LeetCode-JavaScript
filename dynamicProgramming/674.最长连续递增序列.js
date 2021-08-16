/**
 * @param {number[]} nums
 * @return {number}
 */
// 贪心
var findLengthOfLCIS1 = function (nums) {
    const len = nums.length;
    let counter = 1, res = 1;
    if (len < 2) return len;
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            counter++;
            if (counter > res) { res = counter; }
        }
        else { counter = 1; }
    }
    return res;
};
// 动态规划 DP
var findLengthOfLCIS = function (nums) {
    const len = nums.length;
    if (len < 2) return len;
    const dp = Array(len).fill(1);
    let result = 1;
    for (let i = 0; i < len - 1; i++) {
        if (nums[i] < nums[i + 1]) {
            dp[i + 1] = dp[i] + 1;
        }
        if (dp[i + 1] > result) result = dp[i + 1];
    }
    return result;
};

console.log(findLengthOfLCIS([1, 3, 5, 4, 7]));
console.log(findLengthOfLCIS([2, 2, 2, 2, 2]));
console.log(findLengthOfLCIS([1]));
console.log(findLengthOfLCIS([]));