/*
 * @lc app=leetcode.cn id=229 lang=javascript
 *
 * [229] 求众数 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 哈希统计
var majorityElement1 = function (nums) {
    const n = nums.length;
    const map = new Map();
    for (let i = 0; i < n; i++) {
        if (map.has(nums[i])) map.set(nums[i], map.get(nums[i]) + 1);
        else map.set(nums[i], 1);
    }
    const res = [];
    for (const item of map) {
        if (item[1] > n / 3) res.push(item[0]);
    }
    return res;
};
// 摩尔排序
// 题解：https://leetcode-cn.com/problems/majority-element-ii/solution/liang-fu-dong-hua-yan-shi-mo-er-tou-piao-fa-zui-zh/
// 代码：https://leetcode-cn.com/problems/majority-element-ii/solution/qiu-zhong-shu-ii-by-leetcode-solution-y1rn/
var majorityElement2 = function (nums) {
    let element1 = 0;
    let element2 = 0;
    let vote1 = 0;
    let vote2 = 0;

    for (const num of nums) {
        if (vote1 > 0 && num === element1) {
            vote1++;
        } else if (vote2 > 0 && num === element2) {
            vote2++;
        } else if (vote1 === 0) {
            element1 = num;
            vote1++;
        } else if (vote2 === 0) {
            element2 = num;
            vote2++;
        } else {
            vote1--;
            vote2--;
        }
    }

    let cnt1 = 0;
    let cnt2 = 0;
    for (const num of nums) {
        if (vote1 > 0 && num === element1) {
            cnt1++;
        }
        if (vote2 > 0 && num === element2) {
            cnt2++;
        }
    }

    const ans = [];
    if (vote1 > 0 && cnt1 > Math.floor(nums.length / 3)) {
        ans.push(element1);
    }
    if (vote2 > 0 && cnt2 > Math.floor(nums.length / 3)) {
        ans.push(element2);
    }

    return ans;
};
// @lc code=end

