/*
 * @lc app=leetcode.cn id=440 lang=javascript
 *
 * [440] 字典序的第K小数字
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// 字典树（传说中的字节跳动的高频题目）
// https://leetcode-cn.com/problems/k-th-smallest-in-lexicographical-order/solution/zi-dian-xu-de-di-kxiao-shu-zi-by-leetcod-bfy0/
var findKthNumber = function (n, k) {
    let curr = 1;
    k--;
    while (k > 0) {
        const steps = getSteps(curr, n);
        if (steps <= k) {// 到下一个兄弟节点查询
            k -= steps;
            curr++;
        } else {// 到下一层节点查询
            curr = curr * 10;
            k--;
        }
    }
    return curr;
}

// 计算以curr为根节点（以n为最大值）的子树下有多少节点
const getSteps = (curr, n) => {
    let steps = 0;
    let first = curr, last = curr;
    while (first <= n) {
        steps += Math.min(last, n) - first + 1;
        first = first * 10;
        last = last * 10 + 9;
    }
    return steps;
};
// @lc code=end
console.log(findKthNumber(1300, 200)); // 1178
