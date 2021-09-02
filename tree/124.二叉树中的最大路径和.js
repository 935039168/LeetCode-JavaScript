/*
 * @lc app=leetcode.cn id=124 lang=javascript
 *
 * [124] 二叉树中的最大路径和
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
// 递归
var maxPathSum = function (root) {
    let max = root.val;
    function helper(node) {
        if (node === null) { return 0; }
        // 节点若为负值，则按照0处理
        const left = Math.max(helper(node.left), 0);
        const right = Math.max(helper(node.right), 0);
        // 作为一个元素价值：Math.max(left, right) + node.val
        const res = Math.max(left, right) + node.val;
        // 作为完成系统的价值：left + right + node.val
        max = Math.max(left + right + node.val, max);
        return res;
    }
    helper(root);
    return max;
};
// @lc code=end

