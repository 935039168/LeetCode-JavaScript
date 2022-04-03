/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const res = [];
    let cur = left;
    out:
    for (; cur <= right; cur++) {
        const num = cur;
        let temp = cur;// 从后往前遍历
        while (temp > 0) {
            const d = temp % 10;
            if (num % d !== 0) continue out;
            temp = Math.floor(temp / 10);
        }
        res.push(cur);
    }
    return res;
};
// @lc code=end

