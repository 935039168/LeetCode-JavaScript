/*
 * @lc app=leetcode.cn id=819 lang=javascript
 *
 * [819] 最常见的单词
 */

// @lc code=start
/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    return [...paragraph.toLowerCase().match(/[a-z]+/g)
        .reduce((map, item) => {
            map.set(item, (map.get(item) || 0) + 1);
            return map;
        }, new Map())]
        .filter(wordCount => !banned.includes(wordCount[0]))
        .sort((x, y) => x[1] - y[1])
        .pop()[0];
};
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
// @lc code=end

