/*
 * @lc app=leetcode.cn id=319 lang=javascript
 *
 * [319] 灯泡开关
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    // 约数为奇数个的位置，操作次数为奇数，最后亮着
    return Math.floor(Math.sqrt(n));
};
// @lc code=end