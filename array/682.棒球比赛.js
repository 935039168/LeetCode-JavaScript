/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
    const res = [];
    for (const item of ops) {
        switch (item) {
            case "C":
                res.pop();
                break;
            case "D":
                res.push(2 * res[res.length - 1]);
                break;
            case "+":
                res.push((res[res.length - 1] - 0) + (res[res.length - 2] - 0));
                break;
            default:
                res.push(item - 0);
                break;
        }
    }
    return res.reduce((pre, curr) => pre + curr);
};
// @lc code=end

