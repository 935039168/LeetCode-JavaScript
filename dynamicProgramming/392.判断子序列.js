// 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
// 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
// 进阶：
// 如果有大量输入的 S，称作 S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T 的子序列。在这种情况下，你会怎样改变代码？
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 动态规划 dp 二维数组
var isSubsequence1 = function (s, t) {
    const len1 = s.length, len2 = t.length;
    if (len1 === 0) return true;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1).fill(0));
    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i][j - 1]);
            }
        }
    }
    return dp[len1][len2] === len1;
};
// 动态规划 dp 一维数组+临时数组
var isSubsequence2 = function (s, t) {
    const len1 = s.length, len2 = t.length;
    if (len1 === 0) return true;
    const dp = Array(len2 + 1).fill(0);
    for (let i = 1; i <= len1; i++) {
        const dp_temp = dp.slice();
        for (let j = 1; j <= len2; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[j] = dp_temp[j - 1] + 1;
            } else {
                dp[j] = Math.max(dp_temp[j - 1], dp[j - 1]);
            }
        }
    }
    return dp[len2] === len1;
};

var isSubsequence3 = function (s, t) {
    const len1 = s.length, len2 = t.length;
    if (len1 === 0) return true;
    let j = 0;
    for (let i = 0; i < len1; i++) {
        for (; j < len2;) {
            if (s[i] === t[j++]) {
                if (i === len1 - 1) { return true; }
                break;
            }
        }
    }
    return false;
};
// 时间复杂度为s.length的解
var isSubsequence = function (s, t) {
    const len1 = s.length;
    if (len1 === 0) return true;
    let index = -1;
    for (let i = 0; i < len1; i++) {
        index = t.indexOf(s.charAt(i), index + 1);
        if (index >= 0) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

console.log(isSubsequence("abc", "ahbgdc"));// true
console.log(isSubsequence("axc", "ahbgdc"));// false
console.log(isSubsequence("", "ahbgdc"));// true
console.log(isSubsequence("b", "c"));// false
console.log(isSubsequence("abc", ""));// false