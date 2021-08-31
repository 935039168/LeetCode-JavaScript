/*
 * @lc app=leetcode.cn id=1109 lang=javascript
 *
 * [1109] 航班预订统计
 */

// 暴力
var corpFlightBookings1 = function (bookings, n) {
    const res = new Array(n).fill(0);
    for (const booking of bookings) {
        const n = booking[1] - booking[0] + 1,
            value = booking[2];
        let p = booking[0] - 1;
        for (let j = 0; j < n; j++) {
            res[p] += value;
            p++;
        }
    }
    return res;
};
// @lc code=start
/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
// 差分
var corpFlightBookings = function (bookings, n) {
    const nums = new Array(n).fill(0);
    for (const booking of bookings) {
        nums[booking[0] - 1] += booking[2];
        if (booking[1] < n) {
            nums[booking[1]] -= booking[2];
        }
        console.log(nums);
    }
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
    }
    return nums;
};
// @lc code=end

console.log(corpFlightBookings([[1, 2, 10], [2, 3, 20], [2, 5, 25]], 5));// [ 10, 55, 45, 25, 25 ]

