/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 枚举
var findLHS1 = function (nums) {
    nums.sort((a, b) => a - b);
    let start = 0,
        end = 0,
        res = 0;
    const len = nums.length;
    for (; end < len; end++) {
        while (nums[end] - nums[start] > 1) {
            start++;
        }
        if (nums[end] - nums[start] === 1)
            res = Math.max(res, end - start + 1);
    }
    return res;
};
// 哈希表
// https://leetcode-cn.com/problems/longest-harmonious-subsequence/solution/zui-chang-he-xie-zi-xu-lie-by-leetcode-s-8cyr/
var findLHS = function (nums) {
    const cnt = new Map();
    let res = 0;
    for (let num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }
    for (const key of cnt.keys()) {
        if (cnt.has(key + 1)) {
            res = Math.max(res, cnt.get(key) + cnt.get(key + 1));
        }
    }
    return res;
};
// @lc code=end