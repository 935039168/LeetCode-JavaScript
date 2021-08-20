// https://leetcode-cn.com/problems/distinct-subsequences/
// 给定一个字符串 s 和一个字符串 t ，计算在 s 的子序列中 t 出现的个数。
// 字符串的一个 子序列 是指，通过删除一些（也可以不删除）字符且不干扰剩余字符相对位置所组成的新字符串。（例如，"ACE" 是 "ABCDE" 的一个子序列，而 "AEC" 不是）
// 题目数据保证答案符合 32 位带符号整数范围。
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
// 动态规划 dp 二维数组
var numDistinct1 = function (s, t) {
    const len1 = s.length, len2 = t.length;
    if (len1 === 0 || len2 === 0 || len1 < len2) return 0;
    const dp = Array.from(Array(len2 + 1), () => Array(len1 + 1).fill(0));
    for (let i = 1; i <= len2; i++) {
        for (let j = 1; j <= len1; j++) {
            if (s.charAt(j - 1) === t.charAt(i - 1)) {
                if (i === 1) {
                    dp[i][j] = dp[i][j - 1] + 1;
                } else {
                    dp[i][j] = dp[i][j - 1] + dp[i - 1][j - 1];
                }
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }
    return dp[len2][len1];
};
// 神奇逆推
var numDistinct = function (s, t) {
    const sLen = s.length, tLen = t.length;
    const memo = Array.from(Array(sLen), () => Array(tLen).fill(-1));
    function helper(i, j) {
        if (j < 0) {
            return 1;
        }
        if (i < 0) {
            return 0;
        }
        if (memo[i][j] != -1) {
            return memo[i][j];
        }
        if (s[i] == t[j]) {
            memo[i][j] = helper(i - 1, j) + helper(i - 1, j - 1);
        } else {
            memo[i][j] = helper(i - 1, j);
        }
        return memo[i][j];
    }
    return helper(sLen - 1, tLen - 1);
};

console.log(numDistinct("rabbbit", "rabbit"));// 3
console.log(numDistinct("babgbag", "bag"));// 5