/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var findClosest = function (words, word1, word2) {
    const n = words.length;
    let ans = n, p1 = -1, p2 = -1;
    for (let i = 0; i < n; i++) {
        if (words[i] === word1) {
            p1 = i;
        } else if (words[i] === word2) {
            p2 = i;
        }
        if (p1 !== -1 && p2 !== -1) ans = Math.min(ans, Math.abs(p1 - p2));
    }
    return ans;
};