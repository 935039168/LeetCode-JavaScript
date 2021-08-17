// 给定两个字符串 text1 和 text2，返回这两个字符串的最长 公共子序列 的长度。如果不存在 公共子序列 ，返回 0 。
// 一个字符串的 子序列 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。
// 例如，"ace" 是 "abcde" 的子序列，但 "aec" 不是 "abcde" 的子序列。
// 两个字符串的 公共子序列 是这两个字符串所共同拥有的子序列。
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// 动态规划 dp 一维数组+临时数组
var longestCommonSubsequence = function (text1, text2) {
    const len1 = text1.length, len2 = text2.length;
    const dp = Array(len2).fill(0);
    let res = 0;
    for (let i = 0; i < len1; i++) {
        const dp_t = dp.slice();
        for (let j = 0; j < len2; j++) {
            if (text1[i] === text2[j]) {
                if (i > 0 && j > 0) {
                    dp[j] = dp_t[j - 1] + 1;
                } else {
                    dp[j] = 1;
                }
                res = Math.max(res, dp[j]);
            } else {
                if (j > 0) {
                    dp[j] = Math.max(dp_t[j], dp[j - 1]);
                }
            }
        }
    }
    return res;
};
// 动态规划 dp 二维数组
var longestCommonSubsequence2 = function (text1, text2) {
    const len1 = text1.length, len2 = text2.length;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    let res = 0;
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
                res = Math.max(res, dp[i][j]);
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return res;
};

console.log(longestCommonSubsequence("abcde", "ace")); // 3
console.log(longestCommonSubsequence("abc", "abc")); // 3
console.log(longestCommonSubsequence("abc", "def")); // 0
console.log(longestCommonSubsequence("ezupkr", "ubmrapg")); // 2
console.log(longestCommonSubsequence("abcba", "abcbcba")); // 5