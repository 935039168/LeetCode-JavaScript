/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// API粗暴法
var lengthOfLastWord1 = function (s) {
    s = s.trim();
    return s.length - s.lastIndexOf(" ") - 1;
};
var lengthOfLastWord = function (s) {
    const len = s.length;
    let a = len - 1, b;
    while (s[a] === " " && a > 0) a--;
    b = a;
    while (s[b] != " " && b >= 0) b--;
    return a - b;
};
// @lc code=end

