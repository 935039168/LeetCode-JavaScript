/*
 * @lc app=leetcode.cn id=515 lang=javascript
 *
 * [515] 在每个树行中找最大值
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
 * @return {number[]}
 */
// breadth  first search 
var largestValues1 = function (root) {
    const res = [];
    if (!root) return res;
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        let max = -Infinity;
        for (let i = 0; i < len; i++) {
            const node = queue.shift();
            max = Math.max(max, node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(max);
    }
    return res;
};
// depth first search
var largestValues = function (root) {
    const res = [];
    const dfs = (node, height) => {
        if (!node) return;
        if (res[height] === undefined) res[height] = node.val;
        else res[height] = Math.max(res[height], node.val);
        dfs(node.left, height + 1);
        dfs(node.right, height + 1);
    };
    dfs(root, 0);
    return res;
};
// @lc code=end

