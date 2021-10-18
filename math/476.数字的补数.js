/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
    let s = -1;
    for (let i = 31; i >= 0; i--) {
        if (((num >> i) & 1) !== 0) {
            s = i;
            break;
        }
    }
    let ans = 0;
    for (let i = 0; i < s; i++) {
        if (((num >> i) & 1) === 0) ans |= (1 << i);
    }
    return ans;
};
// @lc code=end

