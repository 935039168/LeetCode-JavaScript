// https://leetcode-cn.com/problems/valid-parenthesis-string/
/**
 * @param {string} s
 * @return {boolean}
 */
// 题解：https://leetcode-cn.com/problems/valid-parenthesis-string/solution/you-xiao-de-gua-hao-zi-fu-chuan-by-leetc-osi3/
// 贪心法
var checkValidString = function (s) {
    let min = max = 0,// 未匹配左括号的最小值和最大值
        len = s.length;
    for (let i = 0; i < len; i++) {
        const t = s[i];
        if (t === "(") {
            min++;
            max++;
        } else if (t === ")") {
            min = Math.max(min - 1, 0);
            max--;
            if (max < 0) {
                return false;
            }
        } else {
            min = Math.max(min - 1, 0);
            max++;
        }
    }
    return min === 0;
};