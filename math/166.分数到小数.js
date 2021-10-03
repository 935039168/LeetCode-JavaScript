/*
 * @lc app=leetcode.cn id=166 lang=javascript
 *
 * [166] 分数到小数
 */

// @lc code=start
/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
// 题解:https://leetcode-cn.com/problems/fraction-to-recurring-decimal/solution/gong-shui-san-xie-mo-ni-shu-shi-ji-suan-kq8c4/
var fractionToDecimal = function (a, b) {
    // 如果本身能够整除，直接返回计算结果
    if (a % b === 0) { return (a % b).toString(); }
    let sb = "";
    // 如果其一为负数，先追加负号
    if (a * b < 0) sb = "-";
    a = Math.abs(a);
    b = Math.abs(b);
    // 计算小数点前的部分，并将余数赋值给 a
    sb += Math.floor(a / b).toString() + ".";
    a %= b;
    let map = new Map();
    while (a != 0) {
        // 记录当前余数所在答案的位置，并继续模拟除法运算
        map.set(a, sb.length);
        a *= 10;
        sb += (Math.floor(a / b)).toString();
        a %= b;
        // 如果当前余数之前出现过，则将 [出现位置 到 当前位置] 的部分抠出来（循环小数部分）
        if (map.has(a)) {
            let u = map.get(a);
            return sb.substring(0, u) + "(" + sb.substring(u) + ")";
        }
    }
    return sb;
};
// @lc code=end

