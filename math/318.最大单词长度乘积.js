/*
 * @lc app=leetcode.cn id=318 lang=javascript
 *
 * [318] 最大单词长度乘积
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
// 暴力
var maxProduct1 = function (words) {
    const len = words.length;
    let res = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (judge(words[i], words[j])) {
                res = Math.max(res, words[i].length * words[j].length);
            }
        }
    }
    return res;

    function judge(a, b) {
        const al = a.length,
            bl = b.length;
        for (let i = 0; i < al; i++) {
            for (let j = 0; j < bl; j++) {
                if (a[i] === b[j]) {
                    return false;
                }
            }
        }
        return true;
    }
};
// 位运算
var maxProduct2 = function (words) {
    const n = words.length,
        masks = Array(10);
    let idx = 0;
    for (let w of words) {
        let t = 0;
        for (let i = 0; i < w.length; i++) {
            let u = w[i].charCodeAt() - 'a'.charCodeAt();
            t |= (1 << u);
        }
        masks[idx++] = t;
    }
    let ans = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if ((masks[i] & masks[j]) === 0) ans = Math.max(ans, words[i].length * words[j].length);
        }
    }
    return ans;
};
// 优化位运算
var maxProduct = function (words) {
    const map = new Map();
    for (let w of words) {
        let t = 0,
            m = w.length;
        for (let i = 0; i < m; i++) {
            let u = w[i].charCodeAt() - 'a'.charCodeAt();
            t |= (1 << u);
        }
        if (!map.has(t) || map.get(t) < m) map.set(t, m);
    }
    let ans = 0;
    for (let a of map) {
        for (let b of map) {
            if ((a[0] & b[0]) === 0) {
                ans = Math.max(ans, a[1] * b[1]);
            }
        }
    }
    return ans;
};
// @lc code=end

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])); // 16
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])); // 4
console.log(maxProduct(["a", "aa", "aaa", "aaaa"])); // 0