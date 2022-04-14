/*
 * @lc app=leetcode.cn id=1672 lang=javascript
 *
 * [1672] 最富有客户的资产总量
 */

// @lc code=start
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let res = 0;
    for (const item of accounts) {
        res = Math.max(res, item.reduce((pre, cur) => pre + cur));
    }
    return res;
};
// @lc code=end

