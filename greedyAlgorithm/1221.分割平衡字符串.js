// https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function (s) {
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