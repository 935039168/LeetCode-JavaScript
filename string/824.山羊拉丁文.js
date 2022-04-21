/*
 * @lc app=leetcode.cn id=824 lang=javascript
 *
 * [824] 山羊拉丁文
 */

// @lc code=start
/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
    const T = "AEIOUaeiou", sArr = sentence.split(' '), rArr = [], len = sArr.length;
    for (let i = 0; i < len; i++) {
        if (T.indexOf(sArr[i][0]) === -1) {
            sArr[i] = sArr[i].substring(1) + sArr[i].substring(0, 1);
        }
        sArr[i] += "ma";
        for (let j = 0; j <= i; j++) {
            sArr[i] += "a";
        }
        rArr.push(sArr[i]);
    }
    return rArr.join(' ');
};
// @lc code=end

