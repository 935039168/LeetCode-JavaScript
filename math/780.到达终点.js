/*
 * @lc app=leetcode.cn id=780 lang=javascript
 *
 * [780] 到达终点
 */

// @lc code=start
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
// 辗转相除
var reachingPoints = function (sx, sy, tx, ty) {
    while (sx < tx && sy < ty && tx !== ty) {
        if (tx > ty) {
            tx %= ty;
        } else {
            ty %= tx;
        }
    }
    if (tx === sx && ty === sy) return true;
    if (tx === sx) return ty > sy && (ty - sy) % tx === 0;
    if (ty === sy) return tx > sx && (tx - sx) % ty === 0;
    return false;
};
// @lc code=end

