/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 递归
var preorder1 = function (root) {
    const helper = (root, res) => {
        if (root === null) return res;
        res.push(root.val);
        for (const item of root.children) {
            helper(item, res);
        }
    };
    const res = [];
    helper(root, res);
    return res;
};
// 迭代
// https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/submissions/
var preorder = function (root) {
    const ans = new Array(), nodes = new Array();
    nodes.push(root);
    while (nodes.length > 0) {
        const node = nodes.pop();
        if (node !== null) {
            ans.push(node.val);
            for (let i = node.children.length - 1; i >= 0; i--) {
                nodes.push(node.children[i]);
            }
        }
    }
    return ans;
};
// @lc code=end

