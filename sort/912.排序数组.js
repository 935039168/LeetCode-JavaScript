/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
    // return nums.sort((a, b) => a - b);
    // return nums.quickSort1();
    // return nums.quickSort2();
    return nums.bubbleSort();
};
// 快速排序1
Array.prototype.quickSort1 = function () {
    const rec = (left, right) => {
        if (left >= right) { return; }
        const temp = this[left];
        let i = left, j = right;
        while (i < j) {
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
        rec(left, i - 1);
        rec(i + 1, right);
    };
    rec(0, this.length - 1);
    return this;
};
// 快速排序2(提交执行堆栈溢出)
Array.prototype.quickSort2 = function () {
    const rec = function (arr) {
        const len = arr.length;
        if (len < 1) { return []; }
        const lA = [];
        const lR = [];
        const temp = arr[0];
        for (let i = 1; i < len; i++) {
            if (arr[i] <= temp) {
                lA.push(arr[i]);
            } else {
                lR.push(arr[i]);
            }
        }
        return [...rec(lA), temp, ...rec(lR)];
    };
    const r = rec(this);
    for (let i = 0; i < r.length; i++) {
        this[i] = r[i];
    }
    return this;
};
// 冒泡排序
Array.prototype.bubbleSort = function () {
    const len = this.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
};

console.log(sortArray([6, 10, 9, 8, 5, 1, 1, 2, 0, 0, 0, 0, 0]));