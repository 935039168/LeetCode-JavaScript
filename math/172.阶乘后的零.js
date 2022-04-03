/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let res = 0;
    for (let i = 5; i <= n; i += 5) {
        let curr = i;
        while (curr % 5 === 0) {
            curr /= 5;
            res++;
        }
    }
    return res;
};
// @lc code=end
console.log(trailingZeroes(25)); //6
