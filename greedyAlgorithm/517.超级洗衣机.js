/*
 * @lc app=leetcode.cn id=517 lang=javascript
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} ms
 * @return {number}
 */
// 题解：https://leetcode-cn.com/problems/super-washing-machines/solution/gong-shui-san-xie-noxiang-xin-ke-xue-xi-mzqia/
var findMinMoves = function (ms) {
    const sum = ms.reduce((s, c) => s + c, 0),
        n = ms.length,
        t = Math.floor(sum / n);
    if (t * n != sum) return -1;
    let ls = 0, rs = sum, ans = 0;
    for (let i = 0; i < n; i++) {
        rs -= ms[i];
        // 需要向左移动次数
        let a = Math.max(t * i - ls, 0);
        // 需要往右移动次数
        let b = Math.max((n - i - 1) * t - rs, 0);
        // 最小移动次数为：所有机器的「最小运输衣服数量」中的最大值
        ans = Math.max(ans, a + b);
        ls += ms[i];
    }
    return ans;
};
// @lc code=end
console.log(findMinMoves([0, 0, 11, 5]));// 8
console.log(findMinMoves([0, 0, 11, 1]));// 8
