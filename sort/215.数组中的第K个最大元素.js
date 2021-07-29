// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。
// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 懒人解法
var findKthLargest1 = function (nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};
var findKthLargest = function (nums, k) {
    nums.quickSort();
    return nums[k - 1];
};
// 快排，执行正常
// 但是提交会报错：
// FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
Array.prototype.quickSort = function () {
    const rec = (arr) => {
        if (arr.length < 2) { return arr; }
        const left = [];
        const right = [];
        const mid = arr[0];
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] > mid) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
        return [...rec(left), mid, ...rec(right)];
    };
    const res = rec(this);
    res.forEach((n, i) => { this[i] = n });
};
const a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findKthLargest(a, 1));