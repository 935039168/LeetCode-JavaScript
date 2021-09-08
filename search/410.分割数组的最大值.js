// 题目：https://leetcode-cn.com/problems/split-array-largest-sum/
// 题解：https://leetcode-cn.com/problems/split-array-largest-sum/solution/javscriptdong-tai-gui-hua-ji-lu-numswei-zhi-ji-fen/
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
// 二分查找+贪心
var splitArray1 = function (nums, m) {
    let max = 0,
        sum = nums.reduce(((p, c) => {
            max = Math.max(max, c);
            return p + c
        }), 0), len = nums.length;
    function check(val) {
        let sum = 0, index = 1;
        for (let i = 0; i < len; i++) {
            if (sum + nums[i] > val) {
                index++;
                sum = nums[i];
            } else {
                sum += nums[i];
            }
        }
        return index <= m;
    }
    while (max < sum) {
        let mid = parseInt((sum - max) / 2) + max;
        if (check(mid)) {
            sum = mid;
        } else {
            max = mid + 1;
        }
    }
    return max;
};

var splitArray = function (nums, m) {
    let len = nums.length,
        sumList = Array(len + 1).fill(0),
        dp = Array.from({ length: len + 1 }, () => Array(m + 1).fill(Number.MAX_VALUE));
    // 逐位增加，反面后面根据区间求区间和
    for (let i = 0; i < len; i++) {
        sumList[i + 1] = sumList[i] + nums[i];
    }
    // 默认值
    dp[0][0] = 0;
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= Math.min(m, i); j++) {
            // 前i个数分成j段
            for (let x = j - 1; x < i; x++) {
                // x最后一段的起点
                // perv本轮分割完成 分段中最大的和
                let prev = Math.max(dp[x][j - 1], sumList[i] - sumList[x]);
                // 该分割情况下最大分段和的最小值
                dp[i][j] = Math.min(prev, dp[i][j]);
            }
        }
    }
    return dp[len][m];
};

console.log(splitArray([7, 2, 5, 10, 8], 2));// 18
console.log(splitArray([1, 2, 3, 4, 5], 2));// 9
console.log(splitArray([1, 4, 4], 3));// 4