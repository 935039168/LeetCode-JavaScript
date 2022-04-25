/*
 * @lc app=leetcode.cn id=398 lang=javascript
 *
 * [398] 随机数索引
 */

// @lc code=start
// ***********************哈希表************************
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    const len = nums.length;
    this.map = new Map();
    for (let i = 0; i < len; i++) {
        const item = nums[i];
        if (!this.map.has(item)) {
            this.map.set(item, []);
        }
        this.map.get(item).push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    const list = this.map.get(target);
    return list[Math.floor(Math.random() * list.length)];
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
// @lc code=end

// ***********************水塘抽样************************
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    let ans = 0;
    for (let i = 0, cnt = 0; i < this.nums.length; ++i) {
        if (this.nums[i] === target) {
            ++cnt;
            if (Math.floor(Math.random() * cnt) === 0) {
                ans = i;
            }
        }
    }
    return ans;
};