// https://leetcode-cn.com/problems/minimum-moves-to-convert-string/
/**
 * @param {string} s
 * @return {number}
 */
var minimumMoves = function (s) {
    if (!s.includes('X')) return 0;
    let n = s.length,
        i = 0;// 位置指针
    let res = 0;
    while (i < n) {
        if (s[i] === "X") {
            res++;
            i += 3;
        } else {
            i++;
        }
    }
    return res;
};
