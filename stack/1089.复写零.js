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
var duplicateZeros1 = function (arr) {
    const n = arr.length;
    const str = arr.join("").replaceAll("0", "00").substring(0, n);
    for (let i = 0; i < n; i++) {
        arr[i] = str[i];
    }
};

// 双指针 https://leetcode.cn/problems/duplicate-zeros/solution/fu-xie-ling-by-leetcode-solution-7ael/
var duplicateZeros = function (arr) {
    const n = arr.length;
    let top = 0;// 栈顶位置
    let i = -1;// 现在需要放置的元素位置
    while (top < n) {
        i++;
        if (arr[i] !== 0) {
            top++;
        } else {
            top += 2;
        }
    }
    let j = n - 1;
    if (top === n + 1) {
        arr[j] = 0;
        j--;
        i--;
    }
    while (j >= 0) {
        arr[j] = arr[i];
        j--;
        if (arr[i] === 0) {
            arr[j] = arr[i];
            j--;
        }
        i--;
    }
};
// @lc code=end

