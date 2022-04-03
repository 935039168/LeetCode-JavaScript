/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbolValues = new Map();
    symbolValues.set('I', 1);
    symbolValues.set('V', 5);
    symbolValues.set('X', 10);
    symbolValues.set('L', 50);
    symbolValues.set('C', 100);
    symbolValues.set('D', 500);
    symbolValues.set('M', 1000);
    let ans = 0;
    const n = s.length;
    const arr = [];
    for (const x of s) {
        arr.push(symbolValues.get(x));
    }
    for (let i = 0; i < n - 1; i++) {
        if (arr[i] < arr[i + 1]) ans -= arr[i];
        else ans += arr[i];
    }
    ans += arr.pop();
    return ans;
};
// @lc code=end

