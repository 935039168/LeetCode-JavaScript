/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
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
var findFrequentTreeSum = function (root) {
    const cnt = new Map();
    let maxCnt = 0;

    const dfs = (node) => {
        if (!node) return 0;
        const sum = node.val + dfs(node.left) + dfs(node.right);
        cnt.set(sum, (cnt.get(sum) || 0) + 1);
        maxCnt = Math.max(maxCnt, cnt.get(sum));
        return sum;
    }

    dfs(root);
    const list = [];
    for (const [s, c] of cnt.entries()) {
        if (c === maxCnt) {
            list.push(s);
        }
    }
    return list;
}
// @lc code=end

