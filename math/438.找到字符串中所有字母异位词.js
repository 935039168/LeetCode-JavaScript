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
    if (sLen < pLen) return res;
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
// https://leetcode-cn.com/problems/find-all-anagrams-in-a-string/solution/zhao-dao-zi-fu-chuan-zhong-suo-you-zi-mu-xzin/
// 滑动串口
var findAnagrams2 = function (s, p) {
    const sLen = s.length,
        pLen = p.length;
    if (sLen < pLen) return [];
    const ans = [];
    const sCount = new Array(26).fill(0);
    const pCount = new Array(26).fill(0);
    const acca = 'a'.charCodeAt();
    for (let i = 0; i < pLen; ++i) {
        ++sCount[s[i].charCodeAt() - acca];
        ++pCount[p[i].charCodeAt() - acca];
    }
    if (sCount.toString() === pCount.toString()) {
        ans.push(0);
    }
    for (let i = 0; i < sLen - pLen; ++i) {
        --sCount[s[i].charCodeAt() - acca];
        ++sCount[s[i + pLen].charCodeAt() - acca];
        if (sCount.toString() === pCount.toString()) {
            ans.push(i + 1);
        }
    }
    return ans;
};
// 改良的滑动窗口
var findAnagrams = function (s, p) {
    const sLen = s.length,
        pLen = p.length;
    if (sLen < pLen) {
        return [];
    }
    const ans = [];
    const count = Array(26).fill(0);
    for (let i = 0; i < pLen; ++i) {
        ++count[s[i].charCodeAt() - 'a'.charCodeAt()];
        --count[p[i].charCodeAt() - 'a'.charCodeAt()];
    }
    let differ = 0;
    for (let j = 0; j < 26; ++j) {
        if (count[j] !== 0) {
            ++differ;
        }
    }
    if (differ === 0) {
        ans.push(0);
    }
    for (let i = 0; i < sLen - pLen; ++i) {
        if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 1) { // 窗口中字母 s[i] 的数量与字符串 p 中的数量从不同变得相同
            --differ;
        } else if (count[s[i].charCodeAt() - 'a'.charCodeAt()] === 0) { // 窗口中字母 s[i] 的数量与字符串 p 中的数量从相同变得不同
            ++differ;
        }
        --count[s[i].charCodeAt() - 'a'.charCodeAt()];

        if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === -1) { // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从不同变得相同
            --differ;
        } else if (count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()] === 0) { // 窗口中字母 s[i+pLen] 的数量与字符串 p 中的数量从相同变得不同
            ++differ;
        }
        ++count[s[i + pLen].charCodeAt() - 'a'.charCodeAt()];

        if (differ === 0) {
            ans.push(i + 1);
        }
    }
    return ans;
};
// 非常快的方法
var findAnagrams = function (s, p) {
    let ret = [];
    let arr = new Array(26).fill(0);
    let asciiA = "a".charCodeAt(0);
    for (let i = 0; i < p.length; i++) {
        let curCode = p.charCodeAt(i);
        arr[curCode - asciiA]++;
    }
    let arrS = new Array(26).fill(0);
    let left = 0;
    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - asciiA;
        arrS[code]++;
        while (arrS[code] > arr[code]) {
            let leftCode = s.charCodeAt(left) - asciiA;
            arrS[leftCode]--;
            left++;
        }
        if (i - left == p.length - 1) {
            ret.push(left);
        }
    }
    return ret;
};
console.log(findAnagrams("abcabccbbaa", "aabbcc")); // [0,5]
console.log(findAnagrams("cbaebabacd", "abc")); // [0,6]
// @lc code=end