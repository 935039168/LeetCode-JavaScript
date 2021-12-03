/*
 * @lc app=leetcode.cn id=1005 lang=javascript
 *
 * [1005] K 次取反后最大化的数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations1 = function (nums, k) {
    nums.sort((a, b) => a - b);
    const fu = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) fu.push(nums[i]);
        else break;
    }
    let fuL = fu.length;
    if (fuL > k) {
        for (let i = 0; i < k; i++) {
            nums[i] = -nums[i];
        }
    } else if (fuL === 0) {
        if (k % 2 !== 0) nums[0] = -nums[0];
    } else {
        for (let i = 0; i < fuL; i++) {
            nums[i] = -nums[i];
        }
        let left = k - fuL;
        if (left % 2 !== 0) {
            nums.sort((a, b) => a - b);
            nums[0] = -nums[0];
        }
    }
    return nums.reduce((acc, cur) => acc + cur, 0);
};
// 注意题目中的特殊条件，合理利用之
var largestSumAfterKNegations = function (nums, k) {
    const freq = new Map();
    for (const num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }
    let ans = nums.reduce((t, c) => t + c);
    for (let i = -100; i < 0; ++i) {
        if (freq.has(i)) {
            const ops = Math.min(k, freq.get(i));
            ans += (-i) * ops * 2;
            freq.set(i, freq.get(i) - ops);
            freq.set(-i, (freq.get(-i) || 0) + ops);
            k -= ops;
            if (k === 0) {
                break;
            }
        }
    }
    if (k > 0 && k % 2 === 1 && !freq.has(0)) {
        for (let i = 0; i <= 100; ++i) {
            if (freq.has(i)) {
                ans -= i * 2;
                break;
            }
        }
    }
    return ans;
};
console.log(largestSumAfterKNegations([2, -3, -1, 5, -4], 2));
// @lc code=end