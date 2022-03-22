/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @return {string}
 */
// 递归
var tree2str1 = function (root) {
    if (!root) return "";
    if (root.left === null && root.right === null) {
        return `${root.val}`;
    } else if (root.right === null) {
        return `${root.val}(${tree2str(root.left)})`;
    } else {
        return `${root.val}(${tree2str(root.left)})(${tree2str(root.right)})`;
    }
};
// 迭代
// https://leetcode-cn.com/problems/construct-string-from-binary-tree/solution/gen-ju-er-cha-shu-chuang-jian-zi-fu-chua-e1af/
var tree2str = function (root) {
    let ans = '';
    const st = [root];
    const vis = new Set();
    while (st.length) {
        const node = st[st.length - 1];
        if (vis.has(node)) {
            if (node !== root) {
                ans += ")";
            }
            st.pop();
        } else {
            vis.add(node);
            if (node !== root) {
                ans += "(";
            }
            ans += '' + node.val;
            if (!node.left && node.right) {
                ans += '()';
            }
            if (node.right) {
                st.push(node.right);
            }
            if (node.left) {
                st.push(node.left);
            }
        }
    }
    return ans;
};

// @lc code=end

