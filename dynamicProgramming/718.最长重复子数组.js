// 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度
// 输入：
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// 输出：3
// 解释：
// 长度最长的公共子数组是 [3, 2, 1] 。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 动态规划 dp
var findLength1 = function (nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    let res = 0;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            }
            res = Math.max(res, dp[i][j]);
        }
    }
    return res;
};
// 滚动数组
var findLength2 = function (nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    let res = 0;
    const dp = Array(len2 + 1).fill(0);
    for (let i = 1; i <= len1; i++) {
        for (let j = len2; j > 0; j--) {
            if (nums1[i - 1] === nums2[j - 1]) {
                dp[j] = dp[j - 1] + 1;
            } else {
                dp[j] = 0;
            }
            if (dp[j] > res) res = dp[j];
        }
    }
    return res;
};
// 滑动窗口
var findLength = function (nums1, nums2) {
    function maxLength(add1, add2, len) {
        let ret = 0, k = 0;
        for (let i = 0; i < len; i++) {
            if (nums1[add1 + i] === nums2[add2 + i]) {
                k++;
            } else {
                k = 0;
            }
            ret = Math.max(ret, k);
        }
        return ret;
    }

    let len1 = nums1.length, len2 = nums2.length;
    let ret = 0;
    for (let i = 0; i < len1; i++) {
        let len = Math.min(len2, len1 - i);
        let maxlen = maxLength(i, 0, len);
        ret = Math.max(ret, maxlen);
    }
    for (let i = 0; i < len2; i++) {
        let len = Math.min(len1, len2 - i);
        let maxlen = maxLength(0, i, len);
        ret = Math.max(ret, maxlen);
    }
    return ret;
};

console.log(findLength([1], [1])); // 1
console.log(findLength([1, 2, 3, 2, 1], [3, 2, 1, 4, 7])); // 3