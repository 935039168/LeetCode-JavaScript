/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function (root) {
    let res = -1;
    const rootVal = root.val;
    function find(node) {
        if (!node) return;
        if (res !== -1 && node.val > res) return;
        if (node.val > rootVal) res = node.val;
        find(node.left);
        find(node.right);
    }
    find(root);
    return res;
};
// @lc code=end

