/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
    const cnt = new Array(26).fill(0),
        aPos = 'a'.charCodeAt();
    for (const ch of licensePlate) {
        if (/^[a-zA-Z]+$/.test(ch)) {
            ++cnt[ch.toLowerCase().charCodeAt() - aPos];
        }
    }
    let idx = -1;
    for (let i = 0; i < words.length; ++i) {
        const c = Array(26).fill(0);
        for (let j = 0; j < words[i].length; ++j) {
            const ch = words[i][j];
            ++c[ch.charCodeAt() - aPos];
        }
        let ok = true;
        for (let j = 0; j < 26; ++j) {
            if (c[j] < cnt[j]) {
                ok = false;
                break;
            }
        }
        if (ok && (idx < 0 || words[i].length < words[idx].length)) {
            idx = i;
        }
    }
    return words[idx];
};
// @lc code=end