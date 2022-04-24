/*
 * @lc app=leetcode.cn id=868 lang=javascript
 *
 * [868] 二进制间距
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    let p = -1, count = 0, ans = 0;
    while (n > 0) {
        const r = n & 1;
        if (r === 1) {
            if (p > -1) {
                ans = Math.max(ans, count - p);
            }
            p = count;
        }
        n >>= 1;
        count++;
    }
    return ans;
};
// @lc code=end

