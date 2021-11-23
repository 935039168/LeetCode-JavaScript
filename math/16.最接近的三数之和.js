/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// 排序 + 双指针
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);
    const len = nums.length;
    let dis = Infinity;
    for (let i = 0; i < len - 2; i++) {
        const temp = target - nums[i];
        let p1 = i + 1,
            p2 = len - 1,
            distance = Infinity;
        while (p1 < p2) {
            distance = temp - nums[p1] - nums[p2];
            dis = Math.abs(dis) < Math.abs(distance) ? dis : distance;
            if (distance > 0) p1++;
            if (distance < 0) p2--;
            if (distance === 0) return target;
        }
    }
    return target - dis;
};
// @lc code=end
// console.log(threeSumClosest([-1, 2, 1, -4], 1)); // 2
console.log(threeSumClosest([0, 1, 2], 3));