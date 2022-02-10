/*
 * @lc app=leetcode.cn id=1447 lang=javascript
 *
 * [1447] 最简分数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
//https://leetcode-cn.com/problems/simplified-fractions/solution/zui-jian-fen-shu-by-leetcode-solution-98zy/
var simplifiedFractions = function (n) {
    const ans = [];
    for (let mom = 2; mom <= n; mom++) {
        for (let son = 1; son < mom; son++) {
            if (gcd(mom, son) === 1) {
                ans.push(son + "/" + mom);
            }
        }
    }
    return ans;
};
// 计算最大公约数，大数在前，小数在后
const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
};
// @lc code=end