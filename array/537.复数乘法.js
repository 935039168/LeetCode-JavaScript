/*
 * @lc app=leetcode.cn id=537 lang=javascript
 *
 * [537] 复数乘法
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var complexNumberMultiply = function (num1, num2) {
    const complex1 = [num1.split("+")[0], num1.split("+")[1].split("i")[0]];
    const complex2 = [num2.split("+")[0], num2.split("+")[1].split("i")[0]];
    const [real1, imag1] = [parseInt(complex1[0]), parseInt(complex1[1])];
    const [real2, imag2] = [parseInt(complex2[0]), parseInt(complex2[1])];
    return "" + real1 * real2 - imag1 * imag2 + "+" + (real1 * imag2 + imag1 * real2) + "i";
}
// @lc code=end

