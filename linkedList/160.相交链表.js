/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 哈希表
var getIntersectionNode1 = function (headA, headB) {
    const set = new Set();
    while (headA !== null) {
        set.add(headA);
        headA = headA.next;
    }
    while (headB !== null) {
        if (set.has(headB)) {
            return headB;
        }
        headB = headB.next;
    }
    return null;
};
// 双指针
var getIntersectionNode = function (headA, headB) {
    let p1 = headA, p2 = headB;
    while (p1 !== null || p2 !== null) {
        if (p1 === p2) {
            return p1;
        }
        p1 = p1 === null ? headB : p1.next;
        p2 = p2 === null ? headA : p2.next;
    }
    return null;
};