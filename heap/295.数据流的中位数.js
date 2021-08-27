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
    const mid = Math.floor((len - 1) /2);
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
// ---------------------------------？---------------------------------