/*
 * @lc app=leetcode.cn id=686 lang=javascript
 *
 * [686] 重复叠加字符串匹配
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
// 关键：找出边界条件
var repeatedStringMatch = function (a, b) {
    const isIn = (str) => {
        if (str.indexOf(b) > -1) return true;
        return false;
    };
    let ans = 0,
        al = a.length,
        bl = b.length;
    if (bl === 0) return ans;
    if (bl <= al && isIn(a)) {
        return 1;
    }
    ans = Math.ceil(bl / al);
    let newStr = "";
    for (let i = 0; i < ans; i++) {
        newStr += a;
    }
    if (isIn(newStr)) return ans;
    newStr += a;
    if (isIn(newStr)) return ans + 1;
    return -1;
};
// @lc code=end

console.log(repeatedStringMatch("abcd", "cdabcdab")); // 3