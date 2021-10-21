/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let i = digits.length - 1, flag = true;
    for (; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
        } else {
            digits[i]++;
            flag = false;
            break;
        }
    }
    if (i === -1 && flag) digits.unshift(1);
    return digits;
};
// @lc code=end

