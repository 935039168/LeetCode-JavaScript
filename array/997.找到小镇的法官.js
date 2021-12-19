/*
 * @lc app=leetcode.cn id=997 lang=javascript
 *
 * [997] 找到小镇的法官
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
// 入度和出度
var findJudge = function (n, trust) {
    let arr = new Array(n).fill(0);
    for (let i = 0; i < trust.length; i++) {
        let [out, into] = trust[i];
        arr[out - 1] = -1;
        if (arr[into - 1] !== -1) arr[into - 1]++;
    }
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n - 1) {
            ans.push(i + 1);
        }
    }
    if (ans.length === 1) {
        return ans[0];
    }
    return -1;
};
// @lc code=end