/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    // 异或，如果符合条件，异或的结果所有位都会是1
    const a = n ^ (n >> 1);
    // 判断2的幂次aa的位运算方法为a&(a-1)==0
    return (a & (a + 1)) === 0;
};
// @lc code=end

