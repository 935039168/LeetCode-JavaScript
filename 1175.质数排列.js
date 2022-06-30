/*
 * @lc app=leetcode.cn id=1175 lang=javascript
 *
 * [1175] 质数排列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numPrimeArrangements = function (n) {
    const modulo = 1000000007;
    let primeLen = 0;
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) primeLen++;
    }
    const notPrimeLen = n - primeLen;
    let res = 1;
    for (let i = 1; i <= primeLen; i++) {
        res *= i;
        res %= modulo;
    }
    for (let i = 1; i <= notPrimeLen; i++) {
        res *= i;
        res %= modulo;
    }
    return res;
};

const isPrime = (num) => {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// @lc code=end

