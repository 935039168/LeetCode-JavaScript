// https://leetcode-cn.com/problems/find-median-from-data-stream/
// 参考 https://leetcode-cn.com/problems/find-median-from-data-stream/solution/tu-xie-zheng-li-bao-li-fa-er-fen-cha-zhao-shou-d-2/
// ---------------------------------暴力法---------------------------------
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    this.arr.push(num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const len = this.arr.length;
    if (!len) { return null; }
    this.arr.sort((a, b) => a - b);
    const mid = Math.floor((len - 1) / 2);
    if (len % 2 === 1) {
        return this.arr[mid];
    } else {
        return (this.arr[mid] + this.arr[mid + 1]) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// ---------------------------------二分查找---------------------------------
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    const len = this.arr.length;
    if (!len) {
        this.arr.push(num);
        return;
    }
    let left = 0, right = len - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (this.arr[mid] === num) {
            this.arr.splice(mid, 0, num);
            return;
        } else if (this.arr[mid] < num) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    this.arr.splice(right + 1, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    const len = this.arr.length;
    if (!len) { return null; }
    const mid = Math.floor((len - 1) / 2);
    if (len % 2 === 1) {
        return this.arr[mid];
    } else {
        return (this.arr[mid] + this.arr[mid + 1]) / 2;
    }
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// ---------------------------------最大堆 + 最小堆---------------------------------
/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
    this.maxHeap = new Heap();
    this.minHeap = new Heap((x, y) => x < y);
};

MedianFinder.prototype.addNum = function (num) {
    this.maxHeap.insert(num);
    this.minHeap.insert(this.maxHeap.top());
    this.maxHeap.extract();

    if (this.maxHeap.container.length < this.minHeap.container.length) {
        this.maxHeap.insert(this.minHeap.top());
        this.minHeap.extract();
    }
};

MedianFinder.prototype.findMedian = function () {
    return this.maxHeap.container.length > this.minHeap.container.length
        ? this.maxHeap.top()
        : (this.maxHeap.top() + this.minHeap.top()) / 2;
};

const defaultCmp = (x, y) => x > y; // 默认是最大堆

const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

class Heap {
    /**
     * 默认是最大堆
     * @param {Function} cmp
     */
    constructor(cmp = defaultCmp) {
        this.container = [];
        this.cmp = cmp;
    }

    insert(data) {
        const { container, cmp } = this;

        container.push(data);
        let index = container.length - 1;
        while (index) {
            let parent = Math.floor((index - 1) / 2);
            if (!cmp(container[index], container[parent])) {
                return;
            }
            swap(container, index, parent);
            index = parent;
        }
    }

    extract() {
        const { container, cmp } = this;
        if (!container.length) {
            return null;
        }

        swap(container, 0, container.length - 1);
        const res = container.pop();
        const length = container.length;
        let index = 0,
            exchange = index * 2 + 1;

        while (exchange < length) {
            // 以最大堆的情况来说：如果有右节点，并且右节点的值大于左节点的值
            let right = index * 2 + 2;
            if (right < length && cmp(container[right], container[exchange])) {
                exchange = right;
            }
            if (!cmp(container[exchange], container[index])) {
                break;
            }
            swap(container, exchange, index);
            index = exchange;
            exchange = index * 2 + 1;
        }

        return res;
    }

    top() {
        if (this.container.length) return this.container[0];
        return null;
    }
}
/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

// ---------------------------------执行用时短的方法（利用leetcode提供的优先队列）---------------------------------
const MedianFinder = function () {
    // maxPQ for first half numbers
    this.maxPQ = new MaxPriorityQueue({ priority: bid => bid });
    // minPQ for second half numbers
    this.minPQ = new MinPriorityQueue({ priority: bid => bid });
};

MedianFinder.prototype.addNum = function (num) {
    if (this.maxPQ.size() == 0 || num < this.maxPQ.front().element) {
        this.maxPQ.enqueue(num);
    } else {
        this.minPQ.enqueue(num);
    }
    if (this.maxPQ.size() - this.minPQ.size() > 1) {
        this.minPQ.enqueue(this.maxPQ.dequeue().element);
    } else if (this.minPQ.size() - this.maxPQ.size() > 1) {
        this.maxPQ.enqueue(this.minPQ.dequeue().element);
    }
};

MedianFinder.prototype.findMedian = function () {
    if (this.maxPQ.size() > this.minPQ.size()) return this.maxPQ.front().element;
    if (this.maxPQ.size() < this.minPQ.size()) return this.minPQ.front().element;
    return (this.maxPQ.front().element + this.minPQ.front().element) / 2;
};