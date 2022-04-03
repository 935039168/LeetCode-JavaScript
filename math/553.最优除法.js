/*
 * @lc app=leetcode.cn id=553 lang=javascript
 *
 * [553] 最优除法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function (nums) {
    const n = nums.length;
    if (n === 1) return "" + nums[0];
    if (n === 2) return "" + nums[0] + "/" + nums[1];
    const res = [];
    res.push(nums[0]);
    res.push("/(");
    res.push(nums[1]);
    for (let i = 2; i < n; i++) {
        res.push("/");
        res.push(nums[i]);
    }
    res.push(")");
    return res.join("");
};
// @lc code=end

