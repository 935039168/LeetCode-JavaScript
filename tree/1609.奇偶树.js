/*
 * @lc app=leetcode.cn id=1609 lang=javascript
 *
 * [1609] 奇偶树
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
// BFS
var isEvenOddTree = function (root) {
    const queue = [];
    queue.push(root);
    let level = 0;
    while (queue.length > 0) {
        const size = queue.length;
        let prev = level % 2 === 0 ? -Number.MAX_VALUE : Number.MAX_VALUE;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            const value = node.val;
            if (level % 2 === value % 2) {
                return false;
            }
            if ((level % 2 === 0 && value <= prev) || (level % 2 === 1 && value >= prev)) {
                return false;
            }
            prev = value;
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        level++;
    }
    return true;
};
// @lc code=end