/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome1 = function (x) {
    if (x < 0) return false;
    let s = x + '',
        n = s.length;
    for (let i = 0, j = n - 1; i < Math.floor(n / 2); i++, j--) {
        if (s[i] !== s[j]) return false;
    }
    return true;
};
var isPalindrome2 = function (x) {
    return x == x.toString().split('').reverse().join('');
};
var isPalindrome = function (x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
// @lc code=end