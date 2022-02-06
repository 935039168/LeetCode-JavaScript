/*
 * @lc app=leetcode.cn id=1748 lang=javascript
 *
 * [1748] 唯一元素的和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 记录数据
var sumOfUnique = function (nums) {
    const map = new Map();
    let res = 0;
    for (num of nums) {
        const count = map.get(num) || 0;
        map.set(num, count + 1);
    }
    for (item of map) {
        if (item[1] === 1) res += item[0];
    }
    return res;
};
// 一次遍历
var sumOfUnique = function (nums) {
    const map = new Map();
    let res = 0;
    for (num of nums) {
        if (!map.has(num)) {
            res += num;
            map.set(num, 1);
        } else if (map.get(num) === 1) {
            res -= num;
            map.set(num, 2);
        }
    }
    return res;
};
// @lc code=end
console.log(sumOfUnique([1, 2, 3, 2])); // 4
console.log(sumOfUnique([1, 1, 1, 1])); // 0