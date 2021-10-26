/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 模拟
var nextGreaterElement1 = function (nums1, nums2) {
    const res = [], n = nums1.length, m = nums2.length;
    for (let i = 0; i < n; i++) {
        let j = 0;
        while (j < m && nums1[i] !== nums2[j]) j++;
        while (j < m && nums1[i] >= nums2[j]) j++;
        res.push(j < m ? nums2[j] : -1);
    }
    return res;
};
// 单调栈
// 题解：https://leetcode-cn.com/problems/next-greater-element-i/solution/xia-yi-ge-geng-da-yuan-su-i-by-leetcode-bfcoj/
var nextGreaterElement = function (nums1, nums2) {
    const map = new Map();
    const stack = [];
    for (let i = nums2.length - 1; i >= 0; --i) {
        const num = nums2[i];
        while (stack.length && num >= stack[stack.length - 1]) {
            stack.pop();
        }
        map.set(num, stack.length ? stack[stack.length - 1] : -1);
        stack.push(num);
    }
    const res = new Array(nums1.length).fill(0).map((_, i) => map.get(nums1[i]));
    return res;
};
// @lc code=end
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));// [-1,3,-1]
