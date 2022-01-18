/*
 * @lc app=leetcode.cn id=539 lang=javascript
 *
 * [539] 最小时间差
 */

// @lc code=start
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const n = timePoints.length;
    if (n > 1440) return 0; // 鸽巢原理！
    const sNum = [...new Set(timePoints)].length,
        MAX = 60 * 12;
    if (n !== sNum) return 0;
    timePoints.sort();
    let ans = MAX;
    for (let i = 1; i < n; i++) {
        calc(i, i - 1);
    }
    calc(n - 1, 0); // 注意：需要单对比首尾两个时间
    return ans;

    function calc(a, b) {
        const [a1, a2] = timePoints[a].split(":");
        const [b1, b2] = timePoints[b].split(":");
        let x = (a1 - b1) * 60 + (a2 - b2);
        if (x > MAX) x = MAX * 2 - x;
        ans = Math.min(ans, x);
    }
};
// @lc code=end