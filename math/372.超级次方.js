/*
 * @lc app=leetcode.cn id=372 lang=javascript
 *
 * [372] 超级次方
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
// https://leetcode-cn.com/problems/super-pow/solution/gong-shui-san-xie-di-gui-kuai-su-mi-ying-yx1j/
// 递归
var superPow1 = function (a, b) {
    const MOD = 1337;

    function dfs(a, b, u) {
        if (u === -1) return 1;
        return pow(dfs(a, b, u - 1), 10) * pow(a, b[u]) % MOD;
    }

    function pow(a, b) {
        let ans = 1;
        a %= MOD;
        while (b-- > 0) ans = ans * a % MOD;
        return ans;
    }
    return dfs(a, b, b.length - 1);
};
// 递归 + 快速幂
// 快速幂 https://zhuanlan.zhihu.com/p/95902286
var superPow = function (a, b) {
    const MOD = 1337;

    function dfs(a, b, u) {
        if (u === -1) return 1;
        return qpow(dfs(a, b, u - 1), 10) * qpow(a, b[u]) % MOD;
    }

    function qpow(a, b) {
        let ans = 1;
        a %= MOD;
        while (b !== 0) {
            if (b & 1) // 如果b的当前末位为1
                ans = ans * a % MOD; // ans乘上当前的a
            a = a * a % MOD; // a自乘
            b >>= 1; // b往右移一位
        }
        return ans;
    }
    return dfs(a, b, b.length - 1);
};
// @lc code=end