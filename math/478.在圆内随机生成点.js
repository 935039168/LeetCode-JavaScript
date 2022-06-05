/*
 * @lc app=leetcode.cn id=478 lang=javascript
 *
 * [478] 在圆内随机生成点
 */

// @lc code=start
/**
 * @param {number} radius
 * @param {number} x_center
 * @param {number} y_center
 */
// 拒绝采样
var Solution = function (radius, x_center, y_center) {
    this.xc = x_center;
    this.yc = y_center;
    this.r = radius;
};

/**
 * @return {number[]}
 */
Solution.prototype.randPoint = function () {
    while (true) {
        const x = Math.random() * (2 * this.r) - this.r;
        const y = Math.random() * (2 * this.r) - this.r;
        if (x * x + y * y <= this.r * this.r) {
            return [this.xc + x, this.yc + y];
        }
    }
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(radius, x_center, y_center)
 * var param_1 = obj.randPoint()
 */
// @lc code=end

