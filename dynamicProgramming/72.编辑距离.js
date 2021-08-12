// 给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数 。
// 你可以对一个单词进行如下三种操作：
// 插入一个字符
// 删除一个字符
// 替换一个字符
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    if (len1 * len2 === 0) return len1 + len2;
    // 构造二维数组存放距离
    let dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    // 边界状态初始化
    for (let i = 1; i <= len1; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j <= len2; j++) {
        dp[0][j] = j;
    }
    // 计算全部DP值
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + 1);
            }
        }
    }
    return dp[len1][len2];
};

console.log(minDistance("horse", "ros")); // 3
console.log(minDistance("intention", "execution")); // 5