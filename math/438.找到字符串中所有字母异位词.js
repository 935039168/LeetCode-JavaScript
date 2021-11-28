/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// 暴力解法
var findAnagrams1 = function (s, p) {
    const sLen = s.length,
        pLen = p.length,
        t = sLen - pLen,
        map = new Map(),
        res = [];
    for (let i = 0; i < pLen; i++) {
        map.get(p[i]) === undefined ?
            map.set(p[i], 1) :
            map.set(p[i], map.get(p[i]) + 1);
    }
    for (let i = 0; i < t + 1; i++) {
        const m = new Map(map);
        for (let j = 0; j < pLen; j++) {
            if (m.get(s[i + j])) {
                let v = m.get(s[i + j]);
                if (v > 1) {
                    m.set(s[i + j], v - 1);
                } else {
                    m.delete(s[i + j]);
                }
            } else {
                break;
            }
            if (j === pLen - 1) res.push(i);
        }
    }
    return res;
};
console.log(findAnagrams("abcabccbbaa", "aabbcc")); // [0,5]
console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
// @lc code=end