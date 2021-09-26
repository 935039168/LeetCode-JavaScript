/*
 * @lc app=leetcode.cn id=371 lang=javascript
 *
 * [371] 两整数之和
 */

// @lc code=start
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
// 题解：https://leetcode-cn.com/problems/sum-of-two-integers/solution/gong-shui-san-xie-shi-yong-wei-yun-suan-4hpb7/
var getSum1 = function (a, b) {
    let ans = 0;
    for (let i = 0, t = 0; i < 32; i++) {
        let u1 = (a >> i) & 1,
            u2 = (b >> i) & 1;
        if (u1 === 1 && u2 === 1) {
            ans |= (t << i);
            t = 1;
        } else if (u1 === 1 || u2 === 1) {
            ans |= ((1 ^ t) << i);
        } else {
            ans |= (t << i);
            t = 0;
        }
    }
    return ans;
};
var getSum2 = function (a, b) {
    return b === 0 ? a : getSum(a ^ b, (a & b) << 1);
};
// 题解：https://leetcode-cn.com/problems/sum-of-two-integers/solution/liang-zheng-shu-zhi-he-by-leetcode-solut-c1s3/
var getSum = function (a, b) {
    while (b != 0) {
        // 通过[与]运算获得[进位结果]
        const carry = (a & b) << 1;
        // 通过[异或]运算得到[无进位加法结果]
        a = a ^ b;
        b = carry;
    }
    return a;
};
// @lc code=end
console.log(getSum(20, 4));
