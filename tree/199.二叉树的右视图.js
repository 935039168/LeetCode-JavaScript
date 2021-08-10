// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
// 示例 1:
// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
// 示例 2:
// 输入: [1,null,3]
// 输出: [1,3]
// 示例 3:
// 输入: []
// 输出: []
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
// 广度优先遍历
var rightSideView1 = function (root) {
    const res = [];
    if (!root) { return res; }
    const nodes = [root];
    let len = nodes.length;
    while (len--) {
        const thisN = nodes.shift();
        if (thisN.left) { nodes.push(thisN.left); }
        if (thisN.right) { nodes.push(thisN.right); }
        if (len === 0) {
            res.push(thisN.val);
            len = nodes.length;
        }
    }
    return res;
};
// 深度优先遍历
var rightSideView = function (root) {
    const res = [];
    const queue = [[root, 0]];
    while (queue.length) {
        // const [node, depth] = queue.shift();
        const temp = queue.shift();
        const node = temp[0], depth = temp[1];
        if (node) {
            // 因为采用左子树优先的深度优先遍历，
            // 所以遇到一个节点可以直接存入对应深度,
            // 同一高度最后被存入的节点，就是右视图可以看见的节点。
            res[depth] = node.val;
            queue.push([node.left, depth + 1]);
            queue.push([node.right, depth + 1]);
        }
    }
    return res;
};