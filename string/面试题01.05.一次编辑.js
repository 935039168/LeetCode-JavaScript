// https://leetcode.cn/problems/one-away-lcci/
// 双指针
/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
 var oneEditAway = function (first, second) {
    const m = first.length, n = second.length;
    if (Math.abs(m - n) > 1) return false;
    let count = 0;
    for (let p1 = 0, p2 = 0; p1 < m && p2 < n; p1++, p2++) {
        if (first[p1] !== second[p2]) {
            count++;
            if (count > 1) return false;
            if (m !== n) {
                m > n ? p1++ : p2++;
                if (first[p1] !== second[p2]) return false;
            }
        }
    }
    return true;
};