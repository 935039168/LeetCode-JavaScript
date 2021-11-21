/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
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
 * @return {number}
 */
// dfs 递归
var maxDepth1 = function (root) {
    if (!root) return 0;
    let res = 1;
    for (const child of root.children) {
        res = Math.max(res, maxDepth(child) + 1);
    }
    return res;
};
// bfs
var maxDepth = function (root) {
    let res = 0;
    if (!root) return 0;
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            for (const child of node.children) {
                queue.push(child);
            }
        }
        res++;
    }
    return res;
};
// @lc code=end