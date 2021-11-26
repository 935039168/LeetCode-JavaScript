/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
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
// 【二叉搜索树性质：左子树所有节点的元素值均小于根的元素值，右子树所有节点的元素值均大于根的元素值】
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 迭代
var searchBST1 = function (root, val) {
    while (root !== null && root.val !== val) {
        root = root.val > val ? root.left : root.right;
    }
    return root;
};
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// 递归
var searchBST = function (root, val) {
    if (root === null || root.val === val) return root;
    return searchBST(val < root.val ? root.left : root.right, val);
};
// @lc code=end