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
// 深度优先搜索
var maxDepth1 = function (root) {
    if (!root) { return 0; }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// 广度优先搜索
var maxDepth = function (root) {
    if (!root) { return 0; }
    let depth = 0;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        depth++;
    }
    return depth;
};