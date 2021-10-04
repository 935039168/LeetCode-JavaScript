/*
 * @lc app=leetcode.cn id=284 lang=javascript
 *
 * [284] 顶端迭代器
 */

// @lc code=start
/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    }; 
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */
// 题解： https://leetcode-cn.com/problems/peeking-iterator/solution/ding-duan-die-dai-qi-by-leetcode-solutio-8toa/
/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
    this.iterator = iterator;
    this.nextElement = this.iterator.next();
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
    return this.nextElement;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
    const ret = this.nextElement;
    this.nextElement = this.iterator.hasNext() ? this.iterator.next() : null;
    return ret;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
    return this.nextElement !== null;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
// @lc code=end

