/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
const MORSE = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
var uniqueMorseRepresentations = function (words) {
    const seen = new Set();
    for (const word of words) {
        let code = '';
        for (const ch of word) {
            code += (MORSE[ch.charCodeAt() - 'a'.charCodeAt()]);
        }
        seen.add(code);
    }
    return seen.size;
}
// @lc code=end

