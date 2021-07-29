/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList1 = function (head) {
    if (!head) { return head; }
    let p1 = head;
    let p2 = head.next;
    p1.next = null;
    while (p2) {
        let t = p2.next;
        p2.next = p1;
        [p1, p2] = [p2, t];
    }
    return p1;
};
// 简化
var reverseList = function (head) {
    let p1 = head;
    let p2 = null;
    while (p1) {
        const t = p1.next;
        p1.next = p2;
        [p2, p1] = [p1, t];
    }
    return p2;
};