/*
 * @lc app=leetcode.cn id=393 lang=javascript
 *
 * [393] UTF-8 编码验证
 */

// @lc code=start
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function (data) {
    let n = 0;
    for (let i = 0; i < data.length; i++) {
        if (n > 0) {
            if (data[i] >> 6 != 2) return false;
            n--;
        } else if (data[i] >> 7 === 0) {
            n = 0;
        } else if (data[i] >> 5 === 0b110) {
            n = 1;
        } else if (data[i] >> 4 == 0b1110) {
            n = 2;
        } else if (data[i] >> 3 == 0b11110) {
            n = 3;
        } else {
            return false;
        }
    }
    return n === 0;
};
// @lc code=end
console.log(validUtf8([197, 130, 1])); // true
console.log(validUtf8([235, 140, 4])); // false
console.log(validUtf8([250, 145, 145, 145, 145])); // false
