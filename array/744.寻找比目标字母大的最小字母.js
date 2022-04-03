/*
 * @lc app=leetcode.cn id=744 lang=javascript
 *
 * [744] 寻找比目标字母大的最小字母
 */

// @lc code=start
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0,
        right = letters.length - 1;
    if (target >= letters[right]) return letters[0];
    while (left < right) {
        const mid = Math.floor((left + right) / 2),
            val = letters[mid];
        if (val <= target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return letters[left];
};
// @lc code=end