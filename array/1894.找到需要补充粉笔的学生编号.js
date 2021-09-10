/*
 * @lc app=leetcode.cn id=1894 lang=javascript
 *
 * [1894] 找到需要补充粉笔的学生编号
 */

// @lc code=start
/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
// 模拟
var chalkReplacer1 = function (chalk, k) {
    let once = chalk.reduce((a, c) => a + c, 0),
        remain = k % once;
    for (let i = 0; i < chalk.length; i++) {
        remain -= chalk[i];
        if (remain < 0) { return i; }
    }
};
// 前缀和 + 二分
var chalkReplacer = function (chalk, k) {
    let sum = [],
        once = chalk.reduce((a, c, i) => {
            sum[i] = a + c;
            return sum[i];
        }, 0),
        remain = k % once,
        left = 0, right = chalk.length - 1;
    while (left <= right) {
        let mid = parseInt((right - left) / 2 + left);
        if (sum[mid] <= remain) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return sum[left] === remain ? left + 1 : left;
};
// @lc code=end
console.log(chalkReplacer([5, 1, 5], 22));// 0  
console.log(chalkReplacer([3, 4, 1, 2], 25));// 1 
console.log(chalkReplacer([3, 4, 1, 2, 4, 4, 44, 4, 3, 43, 43, 43, 4, 4], 253343434));// 9
