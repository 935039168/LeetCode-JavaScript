/*
 * @lc app=leetcode.cn id=859 lang=javascript
 *
 * [859] 亲密字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
    const len = s.length;
    if (len < 2 || len !== goal.length) return false;
    const arr = [];
    for (let i = 0; i < len; i++) {
        if (s[i] !== goal[i]) arr.push([s[i], goal[i]]);
        if (arr.length > 2) return false;
    }
    if (arr.length === 2) {
        if (arr[0][1] === arr[1][0] && arr[0][0] === arr[1][1]) return true;
    } else if (arr.length === 0) {
        const set = new Set(s);
        if (set.size < len) return true;
    }
    return false;
};
// @lc code=end

console.log(buddyStrings("abcaa", "abcbb")); // false