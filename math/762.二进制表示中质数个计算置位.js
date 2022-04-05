/*
 * @lc app=leetcode.cn id=762 lang=javascript
 *
 * [762] 二进制表示中质数个计算置位
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
// 20以内质数2,3,5,7,11,13,17,19 => 1010 0010 1000 1010 1100 => 665772
var countPrimeSetBits = function (left, right) {
    let ans = 0;
    for (let i = left; i <= right; i++) {
        if (((1 << count(i)) & 665772) !== 0) {
            ans++;
        }
    }
    return ans;
};
function count(x) {
    return x.toString(2).split('0').join('').length;
}
// @lc code=end

