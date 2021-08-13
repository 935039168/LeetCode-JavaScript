// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。
// 子序列是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。
// 例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS1 = function (nums) {
    const dp = [[nums[0], 1]], lenNum = nums.length;
    for (let i = 1; i < lenNum; i++) {
        const temp = dp.sort((a, b) => b[1] - a[1]), len = dp.length;
        let flag = 0;
        for (let j = 0; j < len; j++) {
            if (temp[j][0] < nums[i]) {
                dp[i] = [nums[i], dp[j][1] + 1];
                flag = 1;
                break;
            }
        }
        if (!flag) {
            dp[i] = [nums[i], 1];
        }
    }
    return dp.sort((a, b) => b[1] - a[1])[0][1];
};

var lengthOfLIS1 = function (nums) {
    const lenNum = nums.length;
    if (lenNum <= 1) return lenNum;
    const dp = Array(lenNum).fill(1);
    let result = 0;
    for (let i = 1; i < lenNum; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        if (dp[i] > result) result = dp[i];
    }
    return result;
};

var lengthOfLIS = function (nums) {
    const len = nums.length
    const tail = [nums[0]]
    for (let i = 1; i < len; i++) {
        if (nums[i] > tail[tail.length - 1]) {
            tail.push(nums[i])
            continue
        } else {
            let left = 0
            let right = tail.length - 1
            while (left < right) {
                const mid = (left + right) >> 1
                if (tail[mid] < nums[i]) {
                    left = mid + 1
                } else {
                    right = mid
                }
            }
            tail[left] = nums[i]
        }

    }
    return tail.length
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));// 4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));// 4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7]));// 1