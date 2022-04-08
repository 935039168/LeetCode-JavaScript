/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N 叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    const res = [], queue = [root];
    let len = 1;
    while (queue.length > 0) {
        len = queue.length;
        const temp = new Array();
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            for (const n of node.children) {
                queue.push(n);
            }
            temp.push(node.val);
        }
        res.push(temp);
    }
    return res;
};
// @lc code=end

