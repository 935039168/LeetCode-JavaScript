// https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays/
/**
 * @param {number[]} arr
 * @return {number}
 */
// 暴力
var sumOddLengthSubarrays = function (arr) {
    let res = 0, gap = 1;
    const len = arr.length;
    do {
        for (let i = 0; i <= len - gap; ++i) {
            for (let j = i; j < i + gap; ++j) {
                res += arr[j];
            }
        }
    } while ((gap += 2) <= len)
    return res;
};
// 前缀和
var sumOddLengthSubarrays = function (arr) {
    let res = 0, gap = 1;
    const len = arr.length, addList = new Array(len + 1);
    addList[0] = 0;
    for (let i = 1; i <= len; i++) {
        addList[i] = addList[i - 1] + arr[i - 1];
    }
    do {
        for (let i = 0; i <= len - gap; ++i) {
            res += addList[i + gap] - addList[i];
        }
    } while ((gap += 2) <= len)
    return res;
};
// 数学
var sumOddLengthSubarrays = function (arr) {
    let sum = 0;
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        let leftCount = i, rightCount = n - i - 1;
        let leftOdd = Math.floor((leftCount + 1) / 2);
        let rightOdd = Math.floor((rightCount + 1) / 2);
        let leftEven = Math.floor(leftCount / 2) + 1;
        let rightEven = Math.floor(rightCount / 2) + 1;
        sum += arr[i] * (leftOdd * rightOdd + leftEven * rightEven);
    }
    return sum;
};