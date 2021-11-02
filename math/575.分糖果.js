/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
// 链接：https://leetcode-cn.com/problems/distribute-candies/solution/fen-tang-guo-by-leetcode-solution-l4f6/
var distributeCandies = function (candyType) {
    const set = new Set(candyType);
    return Math.min(set.size, candyType.length / 2);
};
// @lc code=end

