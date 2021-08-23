// https://leetcode-cn.com/problems/longest-palindromic-subsequence/
// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。
// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。
// 示例 1：
// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。
// 示例 2：
// 输入：s = "cbbd"
// 输出：2
// 解释：一个可能的最长回文子序列为 "bb" 。
/**
 * @param {string} s
 * @return {number}
 */
// 动态规划
var longestPalindromeSubseq1 = function (s) {
    const len = s.length;
    const dp = Array.from(Array(len), () => Array(len).fill(0));// 从i
    for (let i = len - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < len; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[0][len - 1];
};
// 动态规划 一维
var longestPalindromeSubseq = function (s) {
    const len = s.length;
    let dp = new Array(len).fill(1);
    for (let i = len - 1; i >= 0; --i) {
        let prev = 0;
        for (let j = i + 1; j < len; ++j) {
            const tmp = dp[j];
            if (s[i] === s[j]) {
                dp[j] = prev + 2;
            } else {
                dp[j] = Math.max(dp[j - 1], dp[j]);
            }
            prev = tmp;
        }
    }
    return dp[len - 1];
};


console.log(longestPalindromeSubseq("bbbab"));// 4
console.log(longestPalindromeSubseq("cbbd"));// 2
console.log(longestPalindromeSubseq("aaaaabaaaaa"));// 11