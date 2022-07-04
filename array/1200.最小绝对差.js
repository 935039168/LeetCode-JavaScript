/*
 * @lc app=leetcode.cn id=1200 lang=javascript
 *
 * [1200] 最小绝对差
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
    arr.sort((a, b) => a - b);
    const n = arr.length;
    let res = [];
    let min = Infinity;
    for (let i = 0; i < n - 1; i++) {
        let val = arr[i + 1] - arr[i];
        if (val < min) {
            res = [[arr[i], arr[i + 1]]];
            min = val;
        } else if (val === min) {
            res.push([arr[i], arr[i + 1]]);
        }
    }
    return res;
};
// @lc code=end

