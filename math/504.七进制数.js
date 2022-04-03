/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase71 = function (num) {
    if (num === 0) return "0";
    const res = [];
    let remain = 0, isM = false;
    if (Math.abs(num) !== num) {
        isM = true;
        num = Math.abs(num);
    }
    while (num > 0) {
        remain = num % 7;
        res.push(remain);
        num = Math.floor(num / 7);
    }
    return (isM ? "-" : "") + res.reverse().join("");
};
// 接口大法
var convertToBase7 = function (num) {
    return num.toString(7);
};
// @lc code=end

