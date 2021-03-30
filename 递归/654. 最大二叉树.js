/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
// 递归
var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0){return null;}
    const big = Math.max(...nums);//注意“展开语法”的使用(...nums)；
    const flag = nums.indexOf(big);
    const root = new TreeNode(big);
    root.left = constructMaximumBinaryTree(nums.slice(0, flag));
    root.right = constructMaximumBinaryTree(nums.slice(flag + 1));
    return root;
};