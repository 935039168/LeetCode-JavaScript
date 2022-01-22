/*
 * @lc app=leetcode.cn id=1332 lang=javascript
 *
 * [1332] 删除回文子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 脑筋急转弯！
// 如果s是回文数，1次完成
// 如果不是回文数，先消灭a，然后消灭b，2次完成
var removePalindromeSub = function (s) {
    const n = s.length;
    for (let i = 0; i < Math.floor(n / 2); i++) {
        if (s[i] !== s[n - 1 - i]) {
            return 2;
        }
    }
    return 1;
};
// @lc code=end