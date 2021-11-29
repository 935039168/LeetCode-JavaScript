/*
 * @lc app=leetcode.cn id=786 lang=javascript
 *
 * [786] 第 K 个最小的素数分数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
// 这种题一般都可以用优先队列进行求解，但是JS的数据结构中没有堆…
// 暴力排序
var kthSmallestPrimeFraction1 = function (arr, k) {
    const len = arr.length,
        a = [];
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            a.push([arr[i], arr[j]]);
        }
    }
    a.sort((x, y) => x[0] * y[1] - x[1] * y[0]);
    return a[k - 1];
};
// https://leetcode-cn.com/problems/k-th-smallest-prime-fraction/solution/di-k-ge-zui-xiao-de-su-shu-fen-shu-by-le-argw/
// 二分查找 + 双指针
var kthSmallestPrimeFraction = function (arr, k) {
    const n = arr.length;
    let left = 0.0,
        right = 1.0;
    while (true) {
        const mid = (left + right) / 2;
        let i = -1, // 分子
            j = 1, // 分母
            count = 0;
        // 记录最大的分数
        let x = 0,
            y = 1;
        for (; j < n; ++j) {
            while (arr[i + 1] / arr[j] < mid) {
                ++i;
                if (arr[i] * y > arr[j] * x) {
                    x = arr[i];
                    y = arr[j];
                }
            }
            count += i + 1;
        }
        if (count === k) return [x, y];
        if (count < k) left = mid;
        else right = mid;
    }
};
console.log(kthSmallestPrimeFraction([1, 2, 3, 5], 3)); //[2,5]
// @lc code=end