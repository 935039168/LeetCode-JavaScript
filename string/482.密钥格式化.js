/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
// 正向模拟
var licenseKeyFormatting1 = function (s, k) {
    let str = s.replace(/-/g, "").toUpperCase();
    let n = str.length;
    let mod = n % k;
    let parts = Math.floor(n / k);
    let res = "";
    if (mod != 0) {
        res = str.substring(0, mod);
    }
    for (let i = 0, j = mod; i < parts; i++) {
        if (res != "") res += "-";
        res += str.substring(j, j + k);
        j += k;
    }
    return res;
};
// 逆向模拟
var licenseKeyFormatting = function (s, k) {
    const res = [];
    let count = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== "-") {
            count++;
            res.push(s[i]);
            if (count % k === 0) {
                res.push("-");
                count = 0;
            }
        }
    }
    if (res.length > 0 && res[res.length - 1] === "-") res.pop();
    return res.reverse().join("").toUpperCase();
};
// @lc code=end

