/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates1 = function (nums) {
    const swap = (index1, index2) => {
        const temp = nums[index1];
        nums[index1] = nums[index2];
        nums[index2] = temp;
    }
    const n = nums.length;
    for (let i = 0; i < n; ++i) {
        while (nums[i] !== nums[nums[i] - 1]) swap(i, nums[i] - 1);
    }
    const ans = [];
    for (let i = 0; i < n; ++i) {
        if (nums[i] - 1 !== i) {
            ans.push(nums[i]);
        }
    }
    return ans;
};
// 用负号进行标记
var findDuplicates = function (nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = Math.abs(nums[i]);
        if (nums[num - 1] > 0) {
            nums[num - 1] *= -1;
        } else {
            res.push(num);
        }
    }
    return res;
};
// @lc code=end
console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));// [2,3]
