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
// 递归 recursion
var isSymmetric = function (root) {
    return compareRoot_recursion(root, root);
};
var compareRoot_recursion = function (left, right) {
    if (left === null && right === null) {
        return true;
    }
    if (left === null || right === null) {
        return false;
    }
    return left.val === right.val && compareRoot_recursion(left.left, right.right) && compareRoot_recursion(left.right, right.left);
}