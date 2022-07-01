/*
 * @lc app=leetcode.cn id=241 lang=javascript
 *
 * [241] 为运算表达式设计优先级
 */

// @lc code=start
/**
 * @param {string} expression
 * @return {number[]}
 */
// recursion
const memo = new Map();
var diffWaysToCompute = function (expression) {
    if (memo.has(expression)) return memo.get(expression);
    const res = [];
    for (let i = 0; i < expression.length; i++) {
        const c = expression[i];
        if (c === '*' || c === '-' || c === '+') {
            let left = diffWaysToCompute(expression.substring(0, i));
            let right = diffWaysToCompute(expression.substring(i + 1));
            for (const l of left) {
                for (const r of right) {
                    switch (c) {
                        case '+':
                            res.push(l + r);
                            break;
                        case '-':
                            res.push(l - r);
                            break;
                        case '*':
                            res.push(l * r);
                            break;
                    }
                }
            }
        }
    }
    if (res.length === 0) res.push(parseInt(expression));
    return res;
};
// @lc code=end

