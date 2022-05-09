/*
 * @lc app=leetcode.cn id=942 lang=javascript
 *
 * [942] 增减字符串匹配
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    const n = s.length, res = [];
    let left = 0, right = n;
    for (let i = 0; i < n; i++) {
        if (s[i] === "I") {
            res.push(left++);
        } else {
            res.push(right--)
        }
    }
    res.push(left);
    return res;
};
// @lc code=end

