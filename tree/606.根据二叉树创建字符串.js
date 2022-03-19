/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
// 递归
var tree2str = function (root) {
    if (!root) return "";
    if (root.left !== null && root.right !== null) {
        return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
    } else if (root.left !== null) {
        return `${root.val}(${tree2str(root.left)})`;
    } else if (root.right !== null) {
        return `${root.val}()(${tree2str(root.right)})`;
    } else {
        return `${root.val}`;
    }
};
// @lc code=end

