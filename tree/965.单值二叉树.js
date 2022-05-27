/*
 * @lc app=leetcode.cn id=965 lang=javascript
 *
 * [965] 单值二叉树
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
 * @return {boolean}
 */
var isUnivalTree1 = function (root) {
    const val = root.val;
    const queue = [root.left, root.right];
    while (queue.length > 0) {
        const cur = queue.shift();
        if (cur === null) {
            continue;
        }
        if (cur.val !== val) return false;
        queue.push(cur.left);
        queue.push(cur.right);
    }
    return true;
};
var isUnivalTree = function (root) {
    if (!root) return true;
    if (root.left) {
        if (root.val !== root.left.val || !isUnivalTree(root.left)) return false;
    }
    if (root.right) {
        if (root.val !== root.right.val || !isUnivalTree(root.right)) return false;
    }
    return true;
}
// @lc code=end

