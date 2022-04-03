/*
 * @lc app=leetcode.cn id=969 lang=javascript
 *
 * [969] 煎饼排序
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var pancakeSort = function (arr) {
    function reverse(j) {
        for (let i = 0; i < j; i++, j--) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    let n = arr.length;
    const res = [];
    while (n > 1) {
        let rec = 0;
        for (let i = 0; i < n; i++) {
            if (arr[i] === n) {
                rec = i;
                break;
            }
        }
        if (rec !== 0) {
            res.push(rec + 1);
            reverse(rec);
        }
        res.push(n);
        reverse(n - 1);
        n--;
    }
    console.log(arr);
    return res;
};
// @lc code=end
console.log(pancakeSort([3, 2, 4, 1])); 