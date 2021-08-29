// https://leetcode-cn.com/problems/running-sum-of-1d-array/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum1 = function (nums) {
    let arr = []
    nums.reduce((current, next) => {
        let res = current + next;
        arr.push(res);
        return res;
    }, 0);
    return arr;
};
var runningSum = function (nums) {
    let res = [], acc = 0;
    for (let i of nums) {
        res.push(acc += i);
    }
    return res;
};