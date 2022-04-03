/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
    function testSame(a, b) {
        if (a === null && b !== null) return false;
        if (a !== null && b === null) return false;
        if (a === null && b === null) return true;
        return a.val === b.val && testSame(a.left, b.left) && testSame(a.right, b.right);
    }
    return testSame(p, q);
};
// @lc code=end

