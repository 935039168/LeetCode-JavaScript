/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var flatten = function (head) {
    function dfs(node) {
        let next, lastNode = null;
        while (node !== null) {
            next = node.next;
            if (node.child !== null) {// 如果包含子节点
                const last = dfs(node.child);// 回传的最后一个节点
                node.next = node.child;
                node.child.prev = node;
                if (next !== null) {
                    last.next = next;
                    next.prev = last;
                }
                node.child = null;
                lastNode = last;
            } else {// 如果不包含子节点
                lastNode = node;
            }
            node = next;
        }
        return lastNode;
    }
    dfs(head);
    return head;
};
// @lc code=end

