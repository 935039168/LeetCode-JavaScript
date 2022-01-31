/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
// 说人话：查找只出现过一次的单词
var uncommonFromSentences = function (s1, s2) {
    const map = new Map();
    insert(s1, map);
    insert(s2, map);
    const ans = [];
    for (const word of map) {
        if (word[1] === 1) ans.push(word[0]);
    }
    return ans;
};
const insert = function (s, map) {
    const words = s.split(' ');
    for (const word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }
};
// @lc code=end
console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));