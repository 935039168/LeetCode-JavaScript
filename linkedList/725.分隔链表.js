/*
 * @lc app=leetcode.cn id=725 lang=javascript
 *
 * [725] 分隔链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (head, k) {
    let count = 0,// 节点总数
        pp = head;// 临时指针
    while (pp !== null) {
        count++;
        pp = pp.next;
    }
    const num = Math.floor(count / k),// 每组基本数量
        parts = Array(k).fill(null);// 结果集
    let more = count % k,// 余出需要分配数量
        p = head;// 指针
    for (let i = 0; i < k && p !== null; i++) {
        parts[i] = p;
        let partSize = num + (i < more ? 1 : 0);
        for (let j = 1; j < partSize; j++) {
            p = p.next;
        }
        const next = p.next;
        p.next = null;
        p = next;
    }
    return parts;
};
// @lc code=end

