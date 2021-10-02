/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
/**
 * @param {number} num
 * @return {string}
 */
// 模拟
var toHex1 = function (num) {
    function calc(num) {
        let n = Math.floor(num / 16);
        let m = num % 16;
        return [n, m];
    }
    const dic = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    if (num < 0) num = Math.pow(2, 32) + num;
    let res = "", m;
    while (num >= 16) {
        [num, m] = calc(num);
        res = dic[m] + res;
    }
    res = dic[num] + res;
    return res;
};
// @lc code=end

