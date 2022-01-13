/*
 * @lc app=leetcode.cn id=747 lang=javascript
 *
 * [747] 至少是其他数字两倍的最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex1 = function (nums) {
    const n = nums.length;
    if (n === 1) return 0;
    const sortNums = [...nums].sort((a, b) => a - b);
    if (sortNums[n - 2] * 2 <= sortNums[n - 1]) {
        for (let i = 0; i < n; i++) {
            if (sortNums[n - 1] === nums[i]) return i;
        }
    }
    return -1;
};
var dominantIndex = function (nums) {
    const n = nums.length;
    if (n === 1) return 0;
    let first = 0,
        second = 0,
        pos = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] > first) {
            [first, second] = [nums[i], first];
            pos = i;
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }
    if (first >= 2 * second) return pos;
    return -1;
};
// @lc code=end
console.log(dominantIndex([3, 6, 1, 0]));
console.log(dominantIndex([1, 2, 3, 4]));