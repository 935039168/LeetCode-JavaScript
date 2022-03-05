/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力
var subArrayRanges1 = function (nums) {
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        let max = -Number.MAX_VALUE, min = Number.MAX_VALUE;
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);
            res += max - min;
        }
    }
    return res;
};
// 单调栈
// https://leetcode-cn.com/problems/sum-of-subarray-ranges/solution/zi-shu-zu-fan-wei-he-by-leetcode-solutio-lamr/
var subArrayRanges = function (nums) {
    const n = nums.length;
    const minLeft = new Array(n).fill(0);
    const minRight = new Array(n).fill(0);
    const maxLeft = new Array(n).fill(0);
    const maxRight = new Array(n).fill(0);
    let minStack = [];
    let maxStack = [];
    for (let i = 0; i < n; i++) {
        while (minStack.length && nums[minStack[minStack.length - 1]] > nums[i]) {
            minStack.pop();
        }
        minLeft[i] = minStack.length === 0 ? -1 : minStack[minStack.length - 1];
        minStack.push(i);

        // 如果 nums[maxStack[maxStack.length - 1]] == nums[i], 那么根据定义，
        // nums[maxStack[maxStack.length - 1]] 逻辑上小于 nums[i]，因为 maxStack[maxStack.length - 1] < i
        while (maxStack.length && nums[maxStack[maxStack.length - 1]] <= nums[i]) {
            maxStack.pop();
        }
        maxLeft[i] = maxStack.length === 0 ? -1 : maxStack[maxStack.length - 1];
        maxStack.push(i);
    }
    minStack = [];
    maxStack = [];
    for (let i = n - 1; i >= 0; i--) {
        // 如果 nums[minStack[minStack.length - 1]] == nums[i], 那么根据定义，
        // nums[minStack[minStack.length - 1]] 逻辑上大于 nums[i]，因为 minStack[minStack.length - 1] > i
        while (minStack.length && nums[minStack[minStack.length - 1]] >= nums[i]) {
            minStack.pop();
        }
        minRight[i] = minStack.length === 0 ? n : minStack[minStack.length - 1];
        minStack.push(i);

        while (maxStack.length && nums[maxStack[maxStack.length - 1]] < nums[i]) {
            maxStack.pop();
        }
        maxRight[i] = maxStack.length === 0 ? n : maxStack[maxStack.length - 1];
        maxStack.push(i);
    }

    let sumMax = 0, sumMin = 0;
    for (let i = 0; i < n; i++) {
        sumMax += (maxRight[i] - i) * (i - maxLeft[i]) * nums[i];
        sumMin += (minRight[i] - i) * (i - minLeft[i]) * nums[i];
    }
    return sumMax - sumMin;
};