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
var smallestK = function (arr, k) {
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
        return i + 1;
    };
    const swap = (i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    };

    randomizedSelected(0, arr.length - 1, k);
    return arr.slice(0, k);
};