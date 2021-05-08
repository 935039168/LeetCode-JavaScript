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
 * @return {number[]}
 */
// 迭代 iteration
var inorderTraversal = function (root) {
    const res = [];
    const stack = [];
    let p = root;
    while (p || stack.length) {
        while (p) {
            stack.push(p);
            p = p.left;
        }
        const n = stack.pop();
        res.push(n.val);
        p = n.right;
    }
    return res;
};
// 递归 recursion
var inorderTraversal_rec = function (root) {
    const res = [];
    const rec = (n) => {
        if (!n) return;
        rec(n.left);
        res.push(n.val);
        rec(n.right);
    }
    rec(root);
    return res;
};