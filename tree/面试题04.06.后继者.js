// https://leetcode.cn/problems/successor-lcci/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// 利用二叉搜索树
var inorderSuccessor = function (root, p) {
    if (root === null) return null;
    // 当前节点值小于等于目标值，那么当前目标值的后继者必然在右子树
    if (root.val <= p.val) return inorderSuccessor(root.right, p);
    // 否则结果有可能是当前节点，或者在当前节点的左子树中
    // 那么先去左子树找一下试试，找不到的话返回当前节点即是结果
    const node = inorderSuccessor(root.left, p);
    return node === null ? root : node;
};