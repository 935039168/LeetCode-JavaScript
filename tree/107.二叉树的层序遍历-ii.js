/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层序遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    const res = [], stack = [root];
    if (!root) return res;
    while (stack.length > 0) {
        const len = stack.length, arr = [];
        let i = 0;
        while (i < len) {
            const item = stack.pop();
            if (item.left) stack.unshift(item.left);
            if (item.right) stack.unshift(item.right);
            arr.push(item.val);
            i++;
        }
        res.unshift(arr);
    }
    return res;
};
// @lc code=end

