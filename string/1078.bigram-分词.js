/*
 * @lc app=leetcode.cn id=1078 lang=javascript
 *
 * [1078] Bigram 分词
 */

// @lc code=start
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function (text, first, second) {
    const words = text.split(" "),
        ans = new Array();
    for (let i = 0; i < words.length - 2; i++)
        if (words[i] === first && words[i + 1] === second)
            ans.push(words[i + 2]);
    return ans;
};
// @lc code=end