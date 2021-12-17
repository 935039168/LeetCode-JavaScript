/*
 * @lc app=leetcode.cn id=1518 lang=javascript
 *
 * [1518] 换酒问题
 */

// @lc code=start
/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles1 = function (numBottles, numExchange) {
    let ans = numBottles,
        left = numBottles;
    while (left >= numExchange) {
        let remain = left % numExchange,
            more = Math.floor(left / numExchange);
        ans += more;
        left = remain + more;
    }
    return ans;
};
// https://leetcode-cn.com/problems/water-bottles/solution/huan-jiu-wen-ti-by-leetcode-solution/
var numWaterBottles = function (numBottles, numExchange) {
    return numBottles >= numExchange ? Math.floor((numBottles - numExchange) / (numExchange - 1)) + 1 + numBottles : numBottles;
};
// @lc code=end