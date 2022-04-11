/*
 * @lc app=leetcode.cn id=357 lang=javascript
 *
 * [357] 计算各个位数不同的数字个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 排列组合
var countNumbersWithUniqueDigits = function (n) {
    if (n === 0) return 1;
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        let t = 9, val = 9;
        for (let j = 1; j < i; j++) {
            val *= t--;
        }
        ans += val;
    }
    return ans;
};
// @lc code=end

