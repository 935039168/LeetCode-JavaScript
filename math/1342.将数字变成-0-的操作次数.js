/*
 * @lc app=leetcode.cn id=1342 lang=javascript
 *
 * [1342] 将数字变成 0 的操作次数
 */
// 简单模拟
// @lc code=start
var numberOfSteps = function (num) {
    let res = 0;
    while (num !== 0) {
        if (num % 2 === 0) {
            num = num >> 1;
        } else {
            num--;
        }
        res++;
    }
    return res;
};
// @lc code=end