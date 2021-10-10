/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 暴力
var arrangeCoins1 = function (n) {
    let row = 1;
    while (n >= row) {
        n -= row;
        row++;
    }
    return row - 1;
};
// 数学
var arrangeCoins2 = function (n) {
    return Math.floor((Math.sqrt(8 * n + 1) - 1) / 2);
};
// 二分查找
var arrangeCoins = function (n) {
    let left = 1, right = n;
    while (left < right) {
        // 先加1再除以2是为了让中间值靠右，因为在后序对右边的值处理是 right = mid - 1
        const mid = Math.floor((right - left + 1) / 2) + left;
        if ((1 + mid) * mid / 2 <= n) {
            left = mid;
        } else {
            right = mid - 1;
        }
    }
    return left;
};
// @lc code=end

