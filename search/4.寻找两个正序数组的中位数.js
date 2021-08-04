// 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
// 输入：nums1 = [1,2], nums2 = [3,4]
// 输出：2.50000
// 解释：合并数组 = [1,2,3,4] ，中位数 (2 + 3) / 2 = 2.5
// 进阶：你能设计一个时间复杂度为 O(log (m+n)) 的算法解决此问题吗？
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 1.利用原生函数暴力求解
var findMedianSortedArrays1 = function (nums1, nums2) {
    const newArr = [...nums1, ...nums2].sort((a, b) => b - a);
    const len = newArr.length;
    const mid = Math.ceil(len / 2);
    if (len % 2) {
        return newArr[mid - 1];
    } else {
        return ((newArr[mid] + newArr[mid - 1]) / 2);
    }
};
// 2.直观解法(数组)
var findMedianSortedArrays2 = function (nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    const mid = Math.ceil((len1 + len2) / 2 + 0.1);
    let newArr = [];
    let midVal;
    while (newArr.length <= mid && nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            newArr.push(nums1.shift());
        } else {
            newArr.push(nums2.shift());
        }
    }
    if (newArr.length <= mid) {
        if (nums1.length) { newArr = newArr.concat(nums1); }
        else { newArr = newArr.concat(nums2); }
    }
    if ((len1 + len2) % 2 === 0) {
        midVal = (newArr[mid - 2] + newArr[mid - 1]) / 2;
    } else {
        midVal = newArr[mid - 1];
    }
    return midVal;
};
// 3.直观解法(指针)
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-2/
var findMedianSortedArrays3 = function (nums1, nums2) {
    const m = nums1.length, n = nums2.length;
    const len = m + n;
    let left = -1, right = -1;// 保存当前循环的结果
    let aStart = 0, bStart = 0;// 表示当前指向 A 数组和 B 数组的位置
    for (let i = 0; i <= len / 2; i++) {
        left = right;
        if (aStart < m && (bStart >= n || nums1[aStart] < nums2[bStart])) {
            right = nums1[aStart++];
        } else {
            right = nums2[bStart++];
        }
    }
    if (len % 2) return right;
    else return (left + right) / 2.0;
};
// 4.二分法
// https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-w-2/
var findMedianSortedArrays = function (nums1, nums2) {
    function getKth(nums1, start1, end1, nums2, start2, end2, k) {
        let len1 = end1 - start1 + 1;
        let len2 = end2 - start2 + 1;
        // 让 len1 的长度小于 len2，这样就能保证如果有数组空了，一定是 len1 
        // 就是如果len1长度小于len2，把getKth()中参数互换位置，即原来的len2就变成了len1，即len1，永远比len2小
        if (len1 > len2) return getKth(nums2, start2, end2, nums1, start1, end1, k);
        // 如果一个数组中没有了元素，那么即从剩余数组nums2的其实start2开始加k再-1.
        // 因为k代表个数，而不是索引，那么从nums2后再找k个数，那个就是start2 + k-1索引处就行了。因为还包含nums2[start2]也是一个数。因为它在上次迭代时并没有被排除
        if (len1 == 0) return nums2[start2 + k - 1];
        // 如果k=1，表明最接近中位数了，即两个数组中start索引处，谁的值小，中位数就是谁(start索引之前表示经过迭代已经被排出的不合格的元素，即数组没被抛弃的逻辑上的范围是nums[start]--->nums[end])。
        if (k === 1) return Math.min(nums1[start1], nums2[start2]);
        // 为了防止数组长度小于 k/2,每次比较都会从当前数组所生长度和k/2作比较，取其中的小的(如果取大的，数组就会越界)
        // 然后素组如果len1小于k/2，表示数组经过下一次遍历就会到末尾，然后后面就会在那个剩余的数组中寻找中位数
        let i = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
        let j = start2 + Math.min(len2, Math.floor(k / 2)) - 1;
        // 如果nums1[i] > nums2[j]，表示nums2数组中包含j索引，之前的元素，逻辑上全部淘汰，即下次从J+1开始。
        // 而k则变为k - (j - start2 + 1)，即减去逻辑上排出的元素的个数(要加1，因为索引相减，相对于实际排除的时要少一个的)
        if (nums1[i] > nums2[j]) {
            return getKth(nums1, start1, end1, nums2, j + 1, end2, k - (j - start2 + 1));
        } else {
            return getKth(nums1, i + 1, end1, nums2, start2, end2, k - (i - start1 + 1));
        }
    };

    const n = nums1.length, m = nums2.length;
    let left = Math.floor((n + m + 1) / 2), right = Math.floor((n + m + 2) / 2);
    // 将偶数和奇数的情况合并，如果是奇数，会求两次同样的 k
    return (getKth(nums1, 0, n - 1, nums2, 0, m - 1, left) + getKth(nums1, 0, n - 1, nums2, 0, m - 1, right)) * 0.5;
};

console.log(findMedianSortedArrays([1, 3], [2]) === 2);
console.log(findMedianSortedArrays([1, 2], [3, 4]) === 2.5);
console.log(findMedianSortedArrays([0, 0], [0, 0]) === 0);
console.log(findMedianSortedArrays([], [1]) === 1);
console.log(findMedianSortedArrays([2], []) === 2);
console.log(findMedianSortedArrays([3], [-2, -1]) === -1);
console.log(findMedianSortedArrays([0, 0, 0, 0, 0], [-1, 0, 0, 0, 0, 0, 1]) === 0);