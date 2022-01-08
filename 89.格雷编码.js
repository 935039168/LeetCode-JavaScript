/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/gray-code/solution/ge-lei-bian-ma-by-leetcode-solution-cqi7/
var grayCode = function (n) {
    const ret = [0];
    for (let i = 1; i <= n; i++) {
        const m = ret.length;
        for (let j = m - 1; j >= 0; j--) {
            ret.push(ret[j] | (1 << (i - 1)));
        }
    }
    return ret;
};
// @lc code=end