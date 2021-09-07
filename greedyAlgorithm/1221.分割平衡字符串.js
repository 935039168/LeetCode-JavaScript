// https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit1 = function (s) {
    let res = r = l = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        const t = s[i];
        if (t === "L") {
            l++;
        } else {
            r++;
        }
        if (r === l) {
            res++;
        }
    }
    return res;
};
var balancedStringSplit = function (s) {
    let res = 0, count = 0;
    const len = s.length;
    for (let i = 0; i < len; i++) {
        if (s[i] === "L") { count--; }
        else { count++; }
        if (count === 0) { res++; }
    }
    return res;
};