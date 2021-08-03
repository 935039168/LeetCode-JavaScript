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
    nums.quickSort2();
    return nums[k - 1];
};
// 快排，执行正常
// 但是提交会报错：
// FATAL ERROR: MarkCompactCollector: young object promotion failed Allocation failed - JavaScript heap out of memory
Array.prototype.quickSort2 = function () {
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
    return nums.quickSelect3(k);
};
// 快速搜索（由快速排序修改）
Array.prototype.quickSelect3 = function (pos) {
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
    nums.quickSort4();
    return nums[nums.length - k];
};
// 优化的快速排序
Array.prototype.quickSort4 = function (left, right) {
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
    this.quickSort4(left, i - 1);
    this.quickSort4(i + 1, right);
};
// 5.快速搜索（官方题解1翻译版）
var findKthLargest5 = function (nums, k) {
    return quickSelect5(nums, 0, nums.length - 1, nums.length - k);
};
const quickSelect5 = function (a, l, r, index) {
    const q = randomPartition5(a, l, r);
    if (q === index) {
        return a[q];
    } else {
        return q < index ? quickSelect5(a, q + 1, r, index) : quickSelect5(a, l, q - 1, index);
    }
};
const randomPartition5 = function (a, l, r) {
    const i = parseInt(Math.random() * (r - l + 1) + l);// 随机一个l与r之间的整数
    swap5(a, i, r);
    return partition5(a, l, r);
};
const partition5 = function (a, l, r) {
    let x = a[r], i = l - 1;
    for (let j = l; j < r; ++j) {
        if (a[j] <= x) {
            swap5(a, ++i, j);
        }
    }
    swap5(a, i + 1, r);
    return i + 1;
};
const swap5 = function (a, i, j) {
    const temp = a[i];
    a[i] = a[j];
    a[j] = temp;
};
// 6.堆排序
// 第一步构建初始堆：是自底向上构建，从最后一个非叶子节点开始。
// 第二步就是下沉操作让尾部元素与堆顶元素交换，最大值被放在数组末尾，并且缩小数组的length，不参与后面大顶堆的调整
// 第三步就是调整：是从上到下，从左到右,因为堆顶元素下沉到末尾了，要重新调整这颗大顶堆
// 来源：https://leetcode-cn.com/problems/kth-largest-element-in-an-array/solution/xie-gei-qian-duan-tong-xue-de-ti-jie-yi-kt5p2/

// 整个流程就是上浮下沉
var findKthLargest6 = function (nums, k) {
    let heapSize = nums.length;
    buildMaxHeap(nums, heapSize); // 构建好了一个大顶堆
    // 进行下沉 大顶堆是最大元素下沉到末尾
    for (let i = nums.length - 1; i >= nums.length - k + 1; i--) {
        swap(nums, 0, i);
        --heapSize; // 下沉后的元素不参与到大顶堆的调整
        // 重新调整大顶堆
        maxHeapify(nums, 0, heapSize);
    }
    return nums[0];
    // 自下而上构建一颗大顶堆
    function buildMaxHeap(nums, heapSize) {
        // 从最后一个非叶子节点开始
        for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            maxHeapify(nums, i, heapSize);
        }
    };
    // 从左向右，自上而下的调整节点
    function maxHeapify(nums, i, heapSize) {
        let l = i * 2 + 1;
        let r = i * 2 + 2;
        let largest = i;
        if (l < heapSize && nums[l] > nums[largest]) {
            largest = l;
        }
        if (r < heapSize && nums[r] > nums[largest]) {
            largest = r;
        }
        if (largest !== i) {
            swap(nums, i, largest); // 进行节点调整
            // 继续调整下面的非叶子节点
            maxHeapify(nums, largest, heapSize);
        }
    };
    function swap(a, i, j) {
        let temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
};

const a = [3, 2, 3, 1, 2, 4, 5, 5, 6];
console.log(findKthLargest6(a, 4));