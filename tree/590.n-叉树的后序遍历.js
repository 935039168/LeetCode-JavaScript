/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
// 递归
var postorder1 = function (root) {
    const res = [];
    const helper = function (root) {
        if (root === null) return;
        for (const node of root.children) {
            helper(node);
        }
        res.push(root.val);
    };
    helper(root);
    return res;
};
// 迭代
// https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/solution/n-cha-shu-de-hou-xu-bian-li-by-leetcode-txesi/
var postorder = function (root) {
    const res = [];
    if (root == null) {
        return res;
    }
    const map = new Map();
    const stack = [];
    let node = root;
    while (stack.length || node) {
        while (node) {
            stack.push(node);
            const children = node.children;
            if (children && children.length > 0) {
                map.set(node, 0);
                node = children[0];
            } else {
                node = null;
            }
        }
        node = stack[stack.length - 1];
        const index = (map.get(node) || 0) + 1;
        const children = node.children;
        if (children && children.length > index) {
            map.set(node, index);
            node = children[index];
        } else {
            res.push(node.val);
            stack.pop();
            map.delete(node);
            node = null;
        }
    }
    return res;
};
// @lc code=end
