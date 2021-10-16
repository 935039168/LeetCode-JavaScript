/*
 * @lc app=leetcode.cn id=282 lang=javascript
 *
 * [282] 给表达式添加运算符
 */

// @lc code=start
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
// 链接：https://leetcode-cn.com/problems/expression-add-operators/solution/gei-biao-da-shi-tian-jia-yun-suan-fu-by-2o1s7/
var addOperators = function (num, target) {
    const n = num.length;
    const ans = [];
    let expr = [];
    // expr为当前构建出的表达式； 
    // i表示当前的枚举到了num的第i个数字； 
    // res为当前表达式的计算结果； 
    // mul为表达式最后一个连乘串的计算结果。
    const backtrack = (expr, i, res, mul) => {
        if (i === n) {
            if (res === target) {
                ans.push(expr.join(''));
            }
            return;
        }
        const signIndex = expr.length;
        if (i > 0) {
            expr.push('');// 占位，下面填充符号
        }
        let val = 0;
        // 枚举截取的数字长度（取多少位），注意数字可以是单个0但不能有前导零
        for (let j = i; j < n && (j === i || num[i] !== '0'); ++j) {
            val = val * 10 + num[j].charCodeAt() - '0'.charCodeAt();
            expr.push(num[j]);
            if (i === 0) {// 表达式开头不能添加符号
                backtrack(expr, j + 1, val, val);
            } else {// 枚举符号
                expr[signIndex] = '+';
                backtrack(expr, j + 1, res + val, val);
                expr[signIndex] = '-';
                backtrack(expr, j + 1, res - val, -val);
                expr[signIndex] = '*';
                backtrack(expr, j + 1, res - mul + mul * val, mul * val);
            }
        }
        expr = expr.splice(signIndex, expr.length - signIndex);
    };
    backtrack(expr, 0, 0, 0);
    return ans;
};
// @lc code=end

