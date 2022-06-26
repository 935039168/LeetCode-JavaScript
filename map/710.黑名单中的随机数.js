/*
 * @lc app=leetcode.cn id=710 lang=javascript
 *
 * [710] 黑名单中的随机数
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} blacklist
 */
var Solution = function (n, blacklist) {
    const m = blacklist.length;
    this.bound = n - m;// 非黑名单数量
    this.b2w = new Map();// 值小于bound的黑名单值对应的白名单值
    const black = new Set();// 黑名单Set
    for (const b of blacklist) {
        black.add(b);
    }
    let p = this.bound;
    for (const b of blacklist) {
        if (b < this.bound) {
            while (black.has(p)) {
                p++;
            }
            this.b2w.set(b, p);
            p++;
        }
    }
};

/**
 * @return {number}
 */
Solution.prototype.pick = function () {
    const x = Math.floor(Math.random() * this.bound);
    return this.b2w.get(x) || x;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(n, blacklist)
 * var param_1 = obj.pick()
 */
// @lc code=end

