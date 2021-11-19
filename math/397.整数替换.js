// https://leetcode-cn.com/problems/integer-replacement/
/**
 * @param {number} n
 * @return {number}
 */
// 递归
var integerReplacement1 = function (n) {
    if (n === 1) {
        return 0;
    }
    let res = 1;
    if (n % 2 === 1) {
        res += Math.min(integerReplacement(n - 1), integerReplacement(n + 1));
    } else {
        res += integerReplacement(n / 2);
    }
    return res;
};
var integerReplacement2 = function (n) {
    let res = 0;
    while (n !== 1) {
        if (n === 3) {
            n = n - 1;
        } else if (n % 2 === 0) {
            n = n / 2;
        } else {
            n = (n + 1) % 4 === 0 ? n + 1 : n - 1;
        }
        res++;
    }
    return res;
};
// https://leetcode-cn.com/problems/integer-replacement/solution/wu-fu-hao-you-yi-qi-shu-chu-li-by-zw-l-jm1o/
var integerReplacement = function (n) {
    let res = 0;
    while (n > 1) {
        if (n === 3) { // 对3特殊处理
            n = n - 1;
        } else if (n % 2 === 1) { // 能被4整除,可以保证基数操作尽可能少
            n = (n + 1) % 4 === 0 ? n + 1 : n - 1;
        } else {
            n = n >>> 1; // 无符号右移！
        }
        res++;
    }
    return res;
};

console.log(integerReplacement(999999999)); // 39