// 快速排序
Array.prototype.quickSort = function () {
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
}

const arr = [5, 6, 10, 232, 4, 3, 2, 1, 0, -1];
arr.quickSort();
console.log(arr);
