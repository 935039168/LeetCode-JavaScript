/*
 * @lc app=leetcode.cn id=954 lang=javascript
 *
 * [954] 二倍数对数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function (arr) {
    const map = new Map();
    for (const x of arr) {
        map.set(x, (map.get(x) || 0) + 1);
    }
    if ((map.get(0) || 0) % 2 !== 0) return false;
    const vals = [];
    for (const key of map.keys()) {
        vals.push(key);
    }
    vals.sort((a, b) => Math.abs(a) - Math.abs(b));
    for (const x of vals) {
        if ((map.get(x * 2) || 0) < map.get(x)) {// 无法找到足量的x与2x配对
            return false;
        }
        map.set(x * 2, (map.get(2 * x) || 0) - map.get(x));
    }
    return true;
};
// @lc code=end

