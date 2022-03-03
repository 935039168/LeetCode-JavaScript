/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
// 数学
var addDigits1 = function(num) {
    return (num - 1) % 9 + 1;
};
// 模拟
var addDigits = function (num) {
    while (num > 9) {
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
};
// @lc code=end

