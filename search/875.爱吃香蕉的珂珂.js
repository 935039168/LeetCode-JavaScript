/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// 二分查找
var minEatingSpeed = function (piles, h) {
    const getTime = function (speed) {
        let time = 0;
        for (pile of piles) {
            time += Math.ceil(pile / speed);
        }
        return time;
    };
    let r = Math.max(...piles), l = 1;
    while (l < r) {
        const speed = Math.floor((r + l) / 2);
        if (getTime(speed) > h) {
            l = speed + 1;
        } else {
            r = speed;
        }
    }
    return r;
};
// @lc code=end
console.log(minEatingSpeed([3, 6, 7, 11], 8));//4
