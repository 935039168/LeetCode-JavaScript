/*
 * @lc app=leetcode.cn id=1763 lang=javascript
 *
 * [1763] 最长的美好子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// https://leetcode-cn.com/problems/longest-nice-substring/solution/zui-chang-de-mei-hao-zi-zi-fu-chuan-by-l-4l1t/
// 枚举（二进制记录）
var longestNiceSubstring = function (s) {
    const n = s.length;
    let maxPos = 0,
        maxLen = 0;
    for (let i = 0; i < n; i++) {
        let lower = 0,
            upper = 0;
        for (let j = i; j < n; j++) {
            if (s[j] >= 'a' && s[j] <= 'z') {
                lower |= 1 << (s[j].charCodeAt() - 'a'.charCodeAt());
            } else {
                upper |= 1 << (s[j].charCodeAt() - 'A'.charCodeAt());
            }
            if (lower === upper && j - i + 1 > maxLen) {
                maxPos = i;
                maxLen = j - i + 1;
            }
        }
    }
    return s.substring(maxPos, maxPos + maxLen);
};
// @lc code=end
console.log(longestNiceSubstring("aaB"));