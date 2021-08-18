// 在两条独立的水平线上按给定的顺序写下 nums1 和 nums2 中的整数。
// 现在，可以绘制一些连接两个数字 nums1[i] 和 nums2[j] 的直线，这些直线需要同时满足满足：
//  nums1[i] == nums2[j]
// 且绘制的直线不与任何其他连线（非水平线）相交。
// 请注意，连线即使在端点也不能相交：每个数字只能属于一条连线。
// 以这种方法绘制线条，并返回可以绘制的最大连线数。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxUncrossedLines1 = function (nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    const dp = Array(len2 + 1).fill(0);
    let res = 0;
    for (let i = 1; i <= len1; i++) {
        const dpTemp = dp.slice();
        for (let j = 1; j <= len2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                const max = Math.max(...dpTemp.slice(0, j));
                dp[j] = max + 1;
            }
            res = Math.max(res, dp[j]);
        }
    }
    return res;
};

var maxUncrossedLines = function (nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    const dp = Array(len2 + 1).fill(0);
    for (let i = 1; i <= len1; i++) {
        const dpTemp = dp.slice();
        for (let j = 1; j <= len2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dpTemp[j - 1] + 1;
            } else {
                dp[j] = Math.max(dp[j - 1], dpTemp[j]);
            }
        }
    }
    return dp.pop();
};

console.log(maxUncrossedLines([1, 1, 1], [1, 1, 1])); // 3
console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4])); // 2
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2])); // 3
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1])); // 2
console.log(maxUncrossedLines([2, 2, 2, 3, 1, 3], [1, 1, 1]));// 1
console.log(maxUncrossedLines([1, 1, 3, 5, 3, 3, 5, 5, 1, 1], [2, 3, 2, 1, 3, 5, 3, 2, 2, 1]));// 5