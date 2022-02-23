/*
 * @lc app=leetcode.cn id=917 lang=javascript
 *
 * [917] 仅仅反转字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
// 双指针
var reverseOnlyLetters = function (s) {
    let left = 0, right = s.length - 1;
    const res = [...s];
    while (left < right) {
        while (!/^[a-zA-Z]$/.test(s[left]) && left < right) {
            left++;
        }
        while (!/^[a-zA-Z]$/.test(s[right]) && left < right) {
            right--;
        }
        if (left < right) {
            [res[left], res[right]] = [res[right], res[left]];
        } else {
            break;
        }
        left++;
        right--;
    }
    return res.join("");
};
// @lc code=end
console.log(reverseOnlyLetters("7_28]"));// "7_28]"
