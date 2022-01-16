/*
 * @lc app=leetcode.cn id=382 lang=javascript
 *
 * [382] 链表随机节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// 蓄水池抽样
/**
 * @param {ListNode} head
 */
var Solution = function (head) {
    this.head = head;
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function () {
    let p = this.head,
        count = 1,
        ans;
    while (p !== null) {
        if (Math.floor(Math.random() * count) === 0) ans = p.val;
        p = p.next;
        count++;
    }
    return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
// @lc code=end