/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
// 遍历 + 排序
var kthSmallest = function (root, k) {
    let arr = [];
    dfs(root);
    arr.sort((a, b) => a - b);
    console.log(arr);
    return arr[k - 1];

    function dfs(node) {
        if (node === null) return;
        arr.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
};
// @lc code=end

