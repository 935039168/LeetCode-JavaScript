// https://leetcode-cn.com/problems/running-sum-of-1d-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let res = [], acc = 0;
    for (let i of nums) {
        res.push(acc += i);
    }
    return res;
};