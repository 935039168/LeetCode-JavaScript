/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    if (word.toUpperCase() === word || word.toLowerCase() === word) return true;
    if (word[0] === word[0].toUpperCase() && word.substring(1) === word.substring(1).toLowerCase()) return true;
    return false;
};
// @lc code=end