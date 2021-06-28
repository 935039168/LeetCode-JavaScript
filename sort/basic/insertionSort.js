// 插入排序
Array.prototype.insertionSort = function () {
    for (let i = 0; i < this.length; ++i) {
        const temp = this[i];
        let j = i;
        while (j > 0) {
            if (this[j - 1] > temp) {
                this[j] = this[j - 1];
            } else {
                break;
            }
            --j;
        }
        this[j] = temp;
    }
};

const arr = [5, 6, 10, 232, 4, 3, 2, 1, 0, -1];
arr.insertionSort();
console.log(arr);
