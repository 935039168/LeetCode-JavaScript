/*
 * @lc app=leetcode.cn id=1089 lang=javascript
 *
 * [1089] 复写零
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
// 暴力
var duplicateZeros = function (arr) {
    const n = arr.length;
    const str = arr.join("").replaceAll("0", "00").substring(0, n);
    for (let i = 0; i < n; i++) {
        arr[i] = str[i];
    }
};
// @lc code=end

