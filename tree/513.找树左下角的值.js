/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
var findBottomLeftValue = function (root) {
    let maxDepth = 0, res = root.val;
    const dfs = (node, depth) => {
        if (!node) return;
        if (++depth > maxDepth) {
            maxDepth = depth;
            res = node.val;
        }
        dfs(node.left, depth);
        dfs(node.right, depth);
    };
    dfs(root, 0);
    return res;
};
// @lc code=end

