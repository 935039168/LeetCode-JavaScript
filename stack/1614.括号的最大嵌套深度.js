/*
 * @lc app=leetcode.cn id=1614 lang=javascript
 *
 * [1614] 括号的最大嵌套深度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    const n = s.length;
    let ans = 0,
        stack = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === "(") {
            stack++;
            ans = Math.max(ans, stack);
        } else if (s[i] === ")") {
            stack--;
        }
    }
    return ans;
};
// @lc code=end