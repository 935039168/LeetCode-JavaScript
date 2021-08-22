// https://leetcode-cn.com/problems/palindromic-substrings/
// 给定一个字符串，你的任务是计算这个字符串中有多少个回文子串。
// 具有不同开始位置或结束位置的子串，即使是由相同的字符组成，也会被视作不同的子串。
// 示例 1：
// 输入："abc"
// 输出：3
// 解释：三个回文子串: "a", "b", "c"
// 示例 2：
// 输入："aaa"
// 输出：6
// 解释：6个回文子串: "a", "a", "a", "aa", "aa", "aaa"
/**
 * @param {string} s
 * @return {number}
 */
// 中心拓展
var countSubstrings1 = function (s) {
    const len = s.length;
    let res = len;
    for (let i = 0; i < len; i++) {
        let r = i;
        let l = i - 1;
        while (l >= 0 && s[r] === s[l]) {
            res++;
            l--;
            r++;
        }
        r = i + 1;
        l = i - 1;
        while (l >= 0 && r < len && s[r] == s[l]) {
            res++;
            l--;
            r++;
        }
    }
    return res;
};
// 链接：https://leetcode-cn.com/problems/palindromic-substrings/solution/hui-wen-zi-chuan-by-leetcode-solution/
var countSubstrings2 = function (s) {
    const n = s.length;
    let ans = 0;
    for (let i = 0; i < 2 * n - 1; ++i) {
        let l = i / 2, r = i / 2 + i % 2;
        while (l >= 0 && r < n && s.charAt(l) == s.charAt(r)) {
            --l;
            ++r;
            ++ans;
        }
    }
    return ans;
};
// 动态规划
var countSubstrings = function (s) {
    const len = s.length;
    const dp = Array.from(Array(len), () => Array(len).fill(false));
    let res = 0;
    for (let i = len - 1; i >= 0; i--) {  // 注意遍历顺序
        for (let j = i; j < len; j++) {
            if (s[i] === s[j]) {
                if (j - i <= 1) {
                    res++;
                    dp[i][j] = true;
                } else if (dp[i + 1][j - 1]) {
                    res++;
                    dp[i][j] = true;
                }
            }
        }
    }
    return res;
};

console.log(countSubstrings("abc"));// 3
console.log(countSubstrings("aaa"));// 6
console.log(countSubstrings("dfasdfafaddfadsffffffdddd"));// 49
console.log(countSubstrings("aaaaaaaaaaaaaaaaaa"));// 171