/*
 * @lc app=leetcode.cn id=1716 lang=javascript
 *
 * [1716] 计算力扣银行的钱
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    const left = n % 7;
    let weeks = Math.floor(n / 7),
        item = 28,
        ans = item * weeks + ((weeks - 1) * weeks / 2) * 7;
    weeks++;
    for (let i = 0; i < left; i++) {
        ans += weeks++;
    }
    return ans;
};
// @lc code=end