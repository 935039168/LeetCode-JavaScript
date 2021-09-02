// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。
// 示例1：
// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 迭代
var mergeTwoLists1 = function (l1, l2) {
    const n = new ListNode();
    let p = n;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            p.next = new ListNode(l1.val);
            l1 = l1.next;
        } else {
            p.next = new ListNode(l2.val);
            l2 = l2.next;
        }
        p = p.next;
    }
    p.next = l1 === null ? l2 : l1;
    return n.next;
};
// 递归
var mergeTwoLists = function (l1, l2) {
    if (!l1) return l2;
    else if (!l2) return l1;
    else if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }
    else if (l2.val <= l1.val) {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};