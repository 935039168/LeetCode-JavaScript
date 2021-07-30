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
// 1.懒人解法
var findKthLargest1 = function (nums, k) {
    nums.sort((a, b) => b - a);
    return nums[k - 1];
};

// 2.快速排序（提交报错）
var findKthLargest2 = function (nums, k) {
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

// 3.快速搜索
var findKthLargest3 = function (nums, k) {
    return nums.quickSelect(k);
};
// 快速搜索（由快速排序修改）
Array.prototype.quickSelect = function (pos) {
    const rec = function (arr, p) {
        const len = arr.length;
        if (len < 2) { return arr[0]; }
        const mid = arr[0];
        const right = [];
        const left = [];
        for (let i = 1; i < len; i++) {
            if (arr[i] > mid) {
                right.push(arr[i]);
            } else {
                left.push(arr[i]);
            }
        }
        const rLen = right.length;
        if (rLen === p - 1) {
            return mid;
        } else if (rLen < p) {
            return rec(left, p - rLen - 1);
        } else {
            return rec(right, p);
        }
    };
    return rec(this, pos);
};

// 4.可以通过提交的快速排序
var findKthLargest4 = function (nums, k) {
    nums.quickSort2();
    return nums[nums.length - k];
};
// 优化的快速排序
Array.prototype.quickSort2 = function (left, right) {
    if (left === undefined || right === undefined) {
        left = 0;
        right = this.length - 1;
    }
    if (left >= right) {
        return;
    }
    let temp = this[left];
    let i = left, j = right;
    while (i != j) {
        while (this[j] > temp && i < j) {
            j--;
        }
        while (this[i] <= temp && i < j) {
            i++;
        }
        if (i < j) {
            [this[i], this[j]] = [this[j], this[i]];
        }
    }
    this[left] = this[i];
    this[i] = temp;
    this.quickSort2(left, i - 1);
    this.quickSort2(i + 1, right);
};


const a = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(findKthLargest4(a, 1));