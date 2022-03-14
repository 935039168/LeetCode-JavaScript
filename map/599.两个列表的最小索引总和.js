/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const n1 = list1.length, n2 = list2.length, map1 = new Map();
    for (let i = 0; i < n1; i++) {
        map1.set(list1[i], i);
    }
    let res = [];
    let max = Infinity;
    for (let i = 0; i < n2; i++) {
        if (map1.has(list2[i])) {
            const j = map1.get(list2[i]);
            if (i + j < max) {
                max = i + j;
                res = [list2[i]]
            } else if (i + j === max) {
                res.push(list2[i]);
            }
        }
    }
    return res;
};
// @lc code=end

