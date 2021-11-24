/*
 * @lc app=leetcode.cn id=423 lang=javascript
 *
 * [423] 从英文中重建数字
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {
    const c = [...s].reduce((map, cur) => {
        return map.set(cur, map.has(cur) ? map.get(cur) + 1 : 1);
    }, new Map());

    const cnt = new Array(10).fill(0);
    cnt[0] = c.get('z') || 0;
    cnt[2] = c.get('w') || 0;
    cnt[4] = c.get('u') || 0;
    cnt[6] = c.get('x') || 0;
    cnt[8] = c.get('g') || 0;

    cnt[3] = (c.get('h') || 0) - cnt[8];
    cnt[5] = (c.get('f') || 0) - cnt[4];
    cnt[7] = (c.get('s') || 0) - cnt[6];

    cnt[1] = (c.get('o') || 0) - cnt[0] - cnt[2] - cnt[4];

    cnt[9] = (c.get('i') || 0) - cnt[5] - cnt[6] - cnt[8];

    const ans = [];
    for (let i = 0; i < 10; ++i) {
        for (let j = 0; j < cnt[i]; ++j) {
            ans.push(i);
        }
    }
    return ans.join('');
};
// @lc code=end
console.log(originalDigits("owoztneoer"));