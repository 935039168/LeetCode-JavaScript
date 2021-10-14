// 链接：https://leetcode-cn.com/problems/B1IidL/solution/er-fen-cha-zhao-by-935039168-5h10/
/**
 * @param {number[]} arr
 * @return {number}
 */
// 二分查找
var peakIndexInMountainArray1 = function (arr) {
    // 根据题意，解不会出现在首尾，故从首尾第二位开始查找。
    let left = 1, right = arr.length - 2;
    while (left < right) {
        // 位运算取整。位运算优先级低，注意使用括号。
        let mid = (right - left >>> 1) + left;
        if (arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]) {
            return mid;
        } else if (arr[mid] > arr[mid + 1]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
// 三分查找
var peakIndexInMountainArray = function (arr) {
    // 根据题意，解不会出现在首尾，故从首尾第二位开始查找。
    let left = 1, right = arr.length - 2;
    while (left < right) {
        let val = Math.floor((right - left) / 3),
            m1 = left + val,
            m2 = right - val;
        if (arr[m1] > arr[m2]) right = m2 - 1;
        else left = m1 + 1;
    }
    return left;
};