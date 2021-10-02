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
// 题解：https://leetcode-cn.com/problems/convert-a-number-to-hexadecimal/solution/shu-zi-zhuan-huan-wei-shi-liu-jin-zhi-sh-2srt/
// 位运算
var toHex = function (num) {
    if (num === 0) {
        return "0";
    }
    const sb = [];
    // 32位有符号整数的十六进制数有8位
    for (let i = 7; i >= 0; i--) {
        const val = (num >> (4 * i)) & 0xf;
        if (sb.length > 0 || val > 0) {
            sb.push(val < 10 ? String.fromCharCode('0'.charCodeAt() + val) : String.fromCharCode('a'.charCodeAt() + val - 10));
        }
    }
    return sb.join('');
}
// @lc code=end

