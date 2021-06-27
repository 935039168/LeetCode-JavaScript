// 冒泡排序
Array.prototype.bubbleSort = function () {
    for (let i = 0; i < this.length - 1; ++i) {
        for (let j = 0; j < this.length - 1 - i; ++j) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
};

const arr = [5, 6, 10, 232, 4, 3, 2, 1, 0, -1];
arr.bubbleSort(arr);
console.log(arr);
