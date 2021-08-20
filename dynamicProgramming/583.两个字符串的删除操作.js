// https://leetcode-cn.com/problems/delete-operation-for-two-strings/
// 给定两个单词 word1 和 word2，找到使得 word1 和 word2 相同所需的最小步数，每步可以删除任意一个字符串中的一个字符。
// 示例：
// 输入: "sea", "eat"
// 输出: 2
// 解释: 第一步将"sea"变为"ea"，第二步将"eat"变为"ea"
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// 动态规划 dp 二维数组
var minDistance1 = function (word1, word2) {
    const len1 = word1.length, len2 = word2.length;
    if (len1 === 0 || len2 === 0) return len1 + len2;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
            }
        }
    }
    return len1 + len2 - dp[len1][len2] * 2;
};
// 动态规划 dp 一维数组
var minDistance = function (word1, word2) {
    const len1 = word1.length, len2 = word2.length;
    if (len1 === 0 || len2 === 0) return len1 + len2;
    const dp = Array(len2 + 1).fill(0);
    for (let i = 0; i < len1; i++) {
        const temp = dp.slice();
        for (let j = 1; j <= len2; j++) {
            if (word1[i] === word2[j - 1]) {
                dp[j] = temp[j - 1] + 1;
            } else {
                dp[j] = Math.max(dp[j - 1], temp[j]);
            }
        }
    }
    return len1 + len2 - dp[len2] * 2;
};

console.log(minDistance("sea", "eat"));// 2
console.log(minDistance("leetcode", "etco"));// 4
console.log(minDistance("intention", "execution"));// 8