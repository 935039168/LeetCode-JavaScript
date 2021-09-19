/*
 * @lc app=leetcode.cn id=650 lang=javascript
 *
 * [650] 只有两个键的键盘
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 题解： https://leetcode-cn.com/problems/2-keys-keyboard/solution/zhi-you-liang-ge-jian-de-jian-pan-by-lee-ussa/
// 动态规划
var minSteps1 = function (n) {
    const f = new Array(n + 1).fill(Infinity);
    f[1] = 0;
    for (let i = 2; i <= n; ++i) {
        for (let j = 1; j * j <= i; ++j) {
            if (i % j === 0) {
                f[i] = Math.min(f[i], f[j] + i / j, f[i / j] + j);
            }
        }
    }
    return f[n];
};
// 质因数分解
var minSteps = function (n) {
    let ans = 0;
    for (let i = 2; i * i <= n; ++i) {
        while (n % i === 0) {
            n /= i;
            ans += i;
        }
    }
    if (n > 1) {
        ans += n;
    }
    return ans;
};
// @lc code=end
console.log(minSteps(987));

