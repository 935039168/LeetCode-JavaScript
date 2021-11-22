/*
 * @lc app=leetcode.cn id=384 lang=javascript
 *
 * [384] 打乱数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
// 题解1.利用随机数api
var Solution = function (nums) {
    this.NUMS = nums;
    this.nums = [...nums];
    this.len = nums.length;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
    return this.NUMS;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
    for (let i = 0; i < this.len; i++) {
        const randomInt = this.getRandomInt(this.len);
        [this.nums[i], this.nums[randomInt]] = [this.nums[randomInt], this.nums[i]];
    }
    return this.nums;
};
Solution.prototype.getRandomInt = function (max) {
    return Math.floor(Math.random() * max);
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
// @lc code=end