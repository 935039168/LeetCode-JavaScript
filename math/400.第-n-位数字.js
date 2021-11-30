/*
 * @lc app=leetcode.cn id=400 lang=javascript
 *
 * [400] 第 N 位数字
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var findNthDigit1 = function (n) {
    let a = 1, // 位数
        count = 9;
    while (n > a * count) {
        n -= a * count;
        a++;
        count *= 10;
    }
    a--;
    const s = 10 * Math.pow(10, (a - 1)) - 1;
    ++a;
    let num = s + Math.floor(n / a);
    const l = n % a;
    if (l === 0) {
        return (num + '')[a - 1];
    } else {
        return ((num + 1) + '')[l - 1];
    }
};
// https://leetcode-cn.com/problems/nth-digit/solution/di-n-wei-shu-zi-by-leetcode-solution-mdl2/
var findNthDigit2 = function (n) {
    let d = 1,
        count = 9;
    while (n > d * count) {
        n -= d * count;
        d++;
        count *= 10;
    }
    const index = n - 1;
    const start = Math.floor(Math.pow(10, d - 1));
    const num = start + Math.floor(index / d);
    const digitIndex = index % d;
    const digit = Math.floor(num / Math.floor(Math.pow(10, d - digitIndex - 1))) % 10;
    return digit;
};
// 二分法
var findNthDigit = function (n) {
    
};
console.log(findNthDigit(2147483647)); // 2
console.log(findNthDigit(874)); // 3
console.log(findNthDigit(3)); // 3
// @lc code=end