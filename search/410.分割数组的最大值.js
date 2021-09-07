// https://leetcode-cn.com/problems/split-array-largest-sum/
/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
// 二分查找+贪心
// https://leetcode-cn.com/problems/split-array-largest-sum/solution/javscriptdong-tai-gui-hua-ji-lu-numswei-zhi-ji-fen/
var splitArray = function (nums, m) {
    let max = 0,
        sum = nums.reduce(((p, c) => {
            max = Math.max(max, c);
            return p + c
        }), 0), len = nums.length;
    function check(val) {
        let sum = 0, index = 1;
        for (let i = 0; i < len; i++) {
            if (sum + nums[i] > val) {
                index++;
                sum = nums[i];
            } else {
                sum += nums[i];
            }
        }
        return index <= m;
    }
    while (max < sum) {
        let mid = parseInt((sum - max) / 2) + max;
        if (check(mid)) {
            sum = mid;
        } else {
            max = mid + 1;
        }
    }
    return max;
};

console.log(splitArray([7, 2, 5, 10, 8], 2));// 18
console.log(splitArray([1, 2, 3, 4, 5], 2));// 9
console.log(splitArray([1, 4, 4], 3));// 4