/*
 * @lc app=leetcode.cn id=806 lang=javascript
 *
 * [806] 写字符串需要的行数
 */

// @lc code=start
/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    const len = s.length;
    let row = 1, count = 0;
    for (let i = 0; i < len; i++) {
        const cur = widths[s[i].charCodeAt() - 'a'.charCodeAt()];
        count += cur;
        if (count > 100) {
            row++;
            count = cur;
        }
    }
    return [row, count];
};
// @lc code=end

