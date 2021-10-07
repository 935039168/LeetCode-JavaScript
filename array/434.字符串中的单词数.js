/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments1 = function (s) {
    const words = s.split(' ');
    return words.filter(a => a !== '').length;
};
var countSegments2 = function (s) {
    let count = 0, head = true;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (head === true && s[i] !== ' ') {
            head = false;
            count++;
        } else if (s[i] === ' ') {
            head = true;
        }
    }
    return count;
};
// 题解： https://leetcode-cn.com/problems/number-of-segments-in-a-string/solution/zi-fu-chuan-zhong-de-dan-ci-shu-by-leetc-igfb/
var countSegments = function (s) {
    let segmentCount = 0;
    for (let i = 0; i < s.length; i++) {
        if ((i !== 0 || s[i - 1] !== ' ') && s[i] !== ' ') {
            segmentCount++;
        }
    }
    return segmentCount;
};
// @lc code=end

