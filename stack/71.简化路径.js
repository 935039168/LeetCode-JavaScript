/*
 * @lc app=leetcode.cn id=71 lang=javascript
 *
 * [71] 简化路径
 */

// @lc code=start
/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
    const names = path.split('/');
    const stack = [];
    for (const name of names) {
        if (name === '..') {
            if (stack.length > 0) stack.pop();
        } else if (name.length > 0 && name !== '.') {
            stack.push(name);
        }
    }
    return '/' + stack.join('/');
};
// @lc code=end