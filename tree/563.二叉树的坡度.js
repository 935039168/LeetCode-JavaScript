/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function (root) {
    let res = 0;
    valueAdd(root);
    return res;

    function valueAdd(node) {
        if (node === null) return 0;
        const lv = valueAdd(node.left),
            rv = valueAdd(node.right);
        res += Math.abs(lv - rv);
        return lv + rv + node.val;
    }
};
// @lc code=end