/*
 * @lc app=leetcode.cn id=386 lang=javascript
 *
 * [386] 字典序排数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
// https://leetcode-cn.com/problems/lexicographical-numbers/solution/zi-dian-xu-pai-shu-by-leetcode-solution-98mz/
// 深度优先搜索
var lexicalOrder = function (n) {
    const ret = [];
    let number = 1;
    for (let i = 0; i < n; i++) {
        ret.push(number);
        if (number * 10 <= n) {
            number *= 10;
        } else {
            while (number % 10 === 9 || number + 1 > n) {
                number = Math.floor(number / 10);
            }
            number++;
        }
    }
    return ret;
};
// @lc code=end

