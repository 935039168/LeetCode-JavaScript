/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    const say = function (str) {
        let res = "", arr = [...str + ""];
        while (arr.length) {
            let count = 1, num = arr.shift();
            while (arr.length > 0 && arr[0] === num) {
                arr.shift();
                count++;
            }
            res += count + num;
        }
        return res;
    };
    let lastStr = "1", res = lastStr;
    for (let i = 2; i <= n; i++) {
        res = say(i)
        lastStr = res;
    }
    return res;
};
// @lc code=end

