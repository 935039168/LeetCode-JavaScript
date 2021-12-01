/*
 * @lc app=leetcode.cn id=1446 lang=javascript
 *
 * [1446] 连续字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var maxPower1 = function (s) {
    let res = 0,
        tempCount = 1,
        lastLetter = s[0];
    const len = s.length;
    for (let i = 1; i < len; i++) {
        if (lastLetter === s[i]) {
            tempCount++;
        } else {
            res = Math.max(res, tempCount);
            tempCount = 1;
            lastLetter = s[i];
        }
    }
    res = Math.max(res, tempCount);
    return res;
};
var maxPower2 = function (s) {
    let ans = 1,
        cnt = 1;
    const len = s.length;
    for (let i = 1; i < len; i++) {
        if (s[i] === s[i - 1]) {
            ++cnt;
            ans = Math.max(ans, cnt);
        } else {
            cnt = 1;
        }
    }
    return ans;
};
// 双指针
var maxPower = function (s) {
    let ans = 1;
    const n = s.length;
    for (let i = 0; i < n;) {
        let j = i;
        while (s[j] === s[i] && j < n) j++;
        ans = Math.max(ans, j - i);
        i = j;
    }
    return ans;
};
// @lc code=end