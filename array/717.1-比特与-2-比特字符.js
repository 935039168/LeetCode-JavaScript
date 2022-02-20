/*
 * @lc app=leetcode.cn id=717 lang=javascript
 *
 * [717] 1比特与2比特字符
 */

// @lc code=start
/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
    const n = bits.length;
    let i = n - 2;
    while (i >= 0 && bits[i]) {
        i--;
    }
    return (n - i) % 2 === 0;
};
// @lc code=end

