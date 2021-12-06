/*
 * @lc app=leetcode.cn id=1816 lang=javascript
 *
 * [1816] 截断句子
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence1 = function (s, k) {
    const arr = s.split(" ");
    const newArr = [];
    const n = Math.min(arr.length, k);
    for (let i = 0; i < n; i++) {
        newArr.push(arr[i]);
    }
    return newArr.join(" ");
};
// https://leetcode-cn.com/problems/truncate-sentence/solution/jie-duan-ju-zi-by-leetcode-solution-d4ts/
var truncateSentence = function(s, k) {
    const n = s.length;
    let end = 0, count = 0;
    for (let i = 1; i <= n; i++) {
        if (i === n || s[i] === ' ') {
            count++;
            if (count === k) {
                end = i;
                break;
            }
        }
    }
    return s.slice(0, end);
};
// @lc code=end