/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 快慢指针，快的会扣圈
var hasCycle1 = function (head) {
    if (!head) return false;
    let p1 = head;
    let p2 = head.next;
    while (p2 !== null && p1 !== p2) {
        p1 = p1.next;
        if (p2.next === null) return false;
        p2 = p2.next.next;
    }
    if (p2 === null) return false;
    return true;
};
var hasCycle = function (head) {
    const mySet = new Set();
    let dummy = head;
    while (dummy) {
        if (mySet.has(dummy)) {
            return true;
        }
        mySet.add(dummy)
        dummy = dummy.next;
    }
    return false;
};
// @lc code=end