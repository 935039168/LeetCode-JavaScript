/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = "";
    for (const str of strs) {
        if (res === "") res = str;
        else {
            const n = res.length,
                m = str.length;
            const len = Math.min(n, m);
            let temp = [];
            for (let i = 0; i < len; i++) {
                if (str[i] === res[i]) {
                    temp.push(str[i]);
                } else {
                    break;
                }
            }
            res = temp.join("");
        }
        if (res === "") return "";
    }
    return res;
};
// @lc code=end