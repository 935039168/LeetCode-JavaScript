/*
 * @lc app=leetcode.cn id=944 lang=javascript
 *
 * [944] 删列造序
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function (strs) {
    const m = strs.length, n = strs[0].length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m - 1; j++) {
            if (strs[j][i] > strs[j + 1][i]) {
                res++;
                break;
            }
        }
    }
    return res;
};
// @lc code=end

