/*
 * @lc app=leetcode.cn id=519 lang=javascript
 *
 * [519] 随机翻转矩阵
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 */
// https://leetcode-cn.com/problems/random-flip-matrix/solution/sui-ji-fan-zhuan-ju-zhen-by-leetcode-sol-pfmr/
// 数组映射
var Solution = function (m, n) {
    this.m = m;
    this.n = n;
    this.total = m * n;
    this.map = new Map();
};

/**
 * @return {number[]}
 */
Solution.prototype.flip = function () {
    const x = Math.floor(this.total * Math.random());
    this.total--;
    // 查找位置x对应的映射
    const idx = this.map.get(x) || x;
    // 将位置x对应的映射设置为位置total对应的映射
    this.map.set(x, this.map.get(this.total) || this.total);
    return [Math.floor(idx / this.n), idx % this.n];
};

/**
 * @return {void}
 */
Solution.prototype.reset = function () {
    this.total = this.m * this.n;
    this.map.clear();
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(m, n)
 * var param_1 = obj.flip()
 * obj.reset()
 */
// @lc code=end