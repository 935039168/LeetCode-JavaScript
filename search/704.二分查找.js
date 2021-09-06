// https://leetcode-cn.com/problems/binary-search/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    function binarySearch(left, right) {
        const len = right - left + 1;
        if (len === 0) { return -1; }
        const mid = parseInt((left + right + 1) / 2);
        if (nums[mid] === target) { return mid; }
        else if (nums[mid] < target) {
            return binarySearch(mid + 1, right);
        } else {
            return binarySearch(left, mid - 1);
        }
    }
    return binarySearch(0, nums.length - 1);
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));// 4
console.log(search([-1, 0, 3, 5, 9, 12], 2));// -1