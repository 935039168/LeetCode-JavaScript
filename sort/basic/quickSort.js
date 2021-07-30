// 快速排序1
Array.prototype.quickSort1 = function () {
    const rec = (arr) => {
        if (arr.length < 2) { return arr; }
        const left = [];
        const right = [];
        const mid = arr[0];
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] < mid) {
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
// 快速排序2
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

const arr1 = [5, 6, 10, 232, 4, 3, 2, 1, 0, -1, -1, -1];
arr1.quickSort1();
console.log(arr1);

const arr2 = [5, 6, 10, 232, 4, 3, 2, 1, 0, -1, -1, -1];
arr2.quickSort2();
console.log(arr2);
