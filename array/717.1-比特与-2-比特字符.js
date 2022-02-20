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
// 倒序遍历
var isOneBitCharacter1 = function (bits) {
    const n = bits.length;
    let i = n - 2;
    while (i >= 0 && bits[i]) {
        i--;
    }
    return (n - i) % 2 === 0;
};
// 正序遍历（字符编码的含义唯一！）
var isOneBitCharacter = function (bits) {
    const n = bits.length;
    let res = true;
    for (let i = 0; i < n;) {
        if (bits[i] === 0) { i++; res = true; }
        else { i += 2; res = false; }
    }
    return res;
};
// @lc code=end

