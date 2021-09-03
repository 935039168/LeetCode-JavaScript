// https://leetcode-cn.com/problems/smallest-k-lcci/
// 设计一个算法，找出数组中最小的k个数。以任意顺序返回这k个数均可。
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var smallestK1 = function (arr, k) {
    return arr.sort((a, b) => a - b).splice(0, k);
};
// https://leetcode-cn.com/problems/smallest-k-lcci/solution/zui-xiao-kge-shu-by-leetcode-solution-o5eg/
// 快排
var smallestK2 = function (arr, k) {
    const randomizedSelected = (l, r, k) => {
        if (l >= r) {
            return;
        }
        const pos = randomizedPartition(l, r);
        const num = pos - l + 1;
        if (k === num) {
            return;
        } else if (k < num) {
            randomizedSelected(l, pos - 1, k);
        } else {
            randomizedSelected(pos + 1, r, k - num);
        }
    };
    // 基于随机的划分
    const randomizedPartition = (l, r) => {
        const i = parseInt(Math.random() * (r - l + 1)) + l;
        swap(r, i);
        return partition(l, r);
    };
    const partition = (l, r) => {
        const pivot = arr[r];
        let i = l - 1;
        for (let j = l; j <= r - 1; ++j) {
            if (arr[j] <= pivot) {
                i = i + 1;
                swap(i, j);
            }
        }
        swap(i + 1, r);
        return i + 1;// 返回排序划分点
    };
    const swap = (i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    randomizedSelected(0, arr.length - 1, k);
    return arr.slice(0, k);
};
// 重新造一次轮子
var smallestK = function (arr, k) {
    function sort(l, r, k) {
        if (l >= r) { return; }
        const pos = doSort(l, r);// 标记位置
        const num = pos - l + 1;// 标记本次操作后，划分到flag（含）之前的数量
        if (num === k) {
            return;
        } else if (num > k) {
            sort(l, pos - 1, k);
        } else {
            sort(pos + 1, r, k - num);
        }
    }
    function doSort(l, r) {
        getRandom(l, r);
        const flag = arr[r];
        let i = l - 1;
        for (let j = l; j < r; j++) {
            if (arr[j] <= flag) {// 判断条件<=
                i++;
                swap(i, j);
            }
        }
        swap(i + 1, r);
        return i + 1;
    }
    function getRandom(l, r) {
        const num = parseInt(Math.random() * (r - l)) + l;
        swap(r, num);
    }
    function swap(x, y) {
        [arr[x], arr[y]] = [arr[y], arr[x]];
    }
    sort(0, arr.length - 1, k);
    return arr.slice(0, k);
};

console.log(smallestK([1, 3, 5, 7, 2, 4, 6, 8], 4)); // [1,2,3,4]