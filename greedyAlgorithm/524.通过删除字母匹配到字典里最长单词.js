/*
 * @lc app=leetcode.cn id=524 lang=javascript
 *
 * [524] 通过删除字母匹配到字典里最长单词
 *
 * https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/description/
 *
 * algorithms
 * Medium (47.32%)
 * Likes:    177
 * Dislikes: 0
 * Total Accepted:    43.2K
 * Total Submissions: 90.3K
 * Testcase Example:  '"abpcplea"\n["ale","apple","monkey","plea"]'
 *
 * 给你一个字符串 s 和一个字符串数组 dictionary 作为字典，找出并返回字典中最长的字符串，该字符串可以通过删除 s 中的某些字符得到。
 * 
 * 如果答案不止一个，返回长度最长且字典序最小的字符串。如果答案不存在，则返回空字符串。
 * 
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：s = "abpcplea", dictionary = ["ale","apple","monkey","plea"]
 * 输出："apple"
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：s = "abpcplea", dictionary = ["a","b","c"]
 * 输出："a"
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * 1 
 * 1 
 * 1 
 * s 和 dictionary[i] 仅由小写英文字母组成
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
// 双指针
var findLongestWord1 = function (s, dictionary) {
    const sLen = s.length, dLen = dictionary.length;
    let res = "";
    for (let i = 0; i < dLen; i++) {
        const item = dictionary[i], len = item.length;
        let j = 0, k = 0;
        while (j < sLen && k < len) {
            if (s[j] === item[k]) {
                j++;
                k++;
            } else {
                j++;
            }
        }
        if (k === len) {
            if ((len === res.length && res > item) ||// 保证"字典序最小"
                len > res.length) {
                res = item;
            }
        }
    }
    return res;
};
// 排序
var findLongestWord2 = function (s, dictionary) {
    dictionary.sort((a, b) => {
        if (a.length !== b.length) {
            return b.length - a.length;
        } else {
            return a.localeCompare(b);
        }
    });
    const sLen = s.length, dLen = dictionary.length;
    for (let i = 0; i < dLen; i++) {
        const item = dictionary[i], len = item.length;
        let j = 0, k = 0;
        while (j < sLen && k < len) {
            if (s[j] === item[k]) {
                j++;
                k++;
            } else {
                j++;
            }
        }
        if (k === len) {
            return item;
        }
    }
    return "";
};
// dp 动态规划
// https://leetcode-cn.com/problems/longest-word-in-dictionary-through-deleting/solution/tong-guo-shan-chu-zi-mu-pi-pei-dao-zi-di-at66/
var findLongestWord = function(s, dictionary) {
    const m = s.length;
    // 令 f[i][j] 表示字符串 s 中从位置 i 开始往后字符 j 第一次出现的位置
    const f = new Array(m + 1).fill(0).map(() => new Array(26).fill(m));

    for (let i = m - 1; i >= 0; --i) {
        for (let j = 0; j < 26; ++j) {
            if (s[i] === String.fromCharCode('a'.charCodeAt() + j)) {
                f[i][j] = i;
            } else {
                f[i][j] = f[i + 1][j];
            }
        }
    }
    let res = "";
    for (const t of dictionary) {
        let match = true;
        let j = 0;
        for (let i = 0; i < t.length; ++i) {
            if (f[j][t[i].charCodeAt() - 'a'.charCodeAt()] === m) {
                match = false;
                break;
            }
            j = f[j][t[i].charCodeAt() - 'a'.charCodeAt()] + 1;
        }
        if (match) {
            if (t.length > res.length ||  (t.length === res.length && t.localeCompare(res) < 0)) {
                res = t;
            }
        }
    }
    return res;
};
// @lc code=end
console.log(findLongestWord("abpcplea", ["apple", "monkey", "ale", "plea"]));// apple
console.log(findLongestWord("abce", ["abe", "abc"]));// abc