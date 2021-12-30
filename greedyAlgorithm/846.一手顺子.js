/*
 * @lc app=leetcode.cn id=846 lang=javascript
 *
 * [846] 一手顺子
 */

// @lc code=start
/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
// 贪心
var isNStraightHand1 = function (hand, groupSize) {
    const n = hand.length;
    if (n % groupSize !== 0) return false;
    hand = hand.sort((a, b) => a - b);
    const len = n / groupSize;
    for (let i = 0; i < len; i++) {
        const block = [];
        block.push(hand.shift());
        for (let j = 0; j < groupSize - 1; j++) {
            const pre = block[block.length - 1];
            for (let k = 0; k < hand.length; k++) {
                if (pre + 1 === hand[k]) {
                    block.push(hand.splice(k, 1)[0]);
                    break;
                }
                if (pre + 1 < hand[k]) {
                    return false;
                }
            }
        }
        if (block.length < groupSize) return false;
    }
    return true;
};
// https://leetcode-cn.com/problems/hand-of-straights/solution/yi-shou-shun-zi-by-leetcode-solution-4lwn/
var isNStraightHand = function (hand, groupSize) {
    const n = hand.length;
    if (n % groupSize !== 0) {
        return false;
    }
    hand.sort((a, b) => a - b);
    const cnt = new Map();
    for (const x of hand) {
        cnt.set(x, (cnt.get(x) || 0) + 1);
    }
    for (const x of hand) {
        if (!cnt.has(x)) {
            continue;
        }
        for (let j = 0; j < groupSize; j++) {
            const num = x + j;
            if (!cnt.has(num)) {
                return false;
            }
            cnt.set(num, cnt.get(num) - 1);
            if (cnt.get(num) == 0) {
                cnt.delete(num);
            }
        }
    }
    return true;
};
console.log(isNStraightHand([1, 2, 3, 6, 2, 3, 4, 7, 8], 3)); // true
console.log(isNStraightHand([1, 2, 3, 4, 5], 4)); // false
console.log(isNStraightHand([8, 10, 12], 3)); // false
console.log(isNStraightHand([1, 2, 3, 8, 5, 6, 7, 8], 4)); // false
console.log(isNStraightHand([1, 1, 2, 2, 3, 3], 2)); // false
// @lc code=end