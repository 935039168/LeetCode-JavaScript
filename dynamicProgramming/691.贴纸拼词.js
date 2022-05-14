/*
 * @lc app=leetcode.cn id=691 lang=javascript
 *
 * [691] 贴纸拼词
 */

// @lc code=start
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
// https://leetcode.cn/problems/stickers-to-spell-word/solution/tie-zhi-pin-ci-by-leetcode-solution-9g3z/
var minStickers = function (stickers, target) {
    const m = target.length;
    const memo = new Array(1 << m).fill(-1);// 记录不同mask组合需要的最小贴纸数。通过0/1记录每一位字符的是否被包含，表示不同的组合模式
    memo[0] = 0;
    const res = dp(stickers, target, memo,
        (1 << m) - 1);// 111...1，表示完整组合
    return res <= m ? res : -1;
};

const dp = (stickers, target, memo, mask) => {
    const m = target.length;
    if (memo[mask] < 0) {// 如果组合没有记录
        let res = m + 1;// 以异常值初始化
        for (const sticker of stickers) {// 遍历贴纸
            let left = mask;// 记录未被覆盖的字符
            const cnt = new Array(26).fill(0);// 记录当前贴纸的每一个字母的存量
            for (let i = 0; i < sticker.length; i++) {
                cnt[sticker[i].charCodeAt() - 'a'.charCodeAt()]++;
            }
            for (let i = 0; i < target.length; i++) {
                const c = target[i];// target操作的字符
                if (((mask >> i) & 1) === 1 &&// 确认当前位置是否为1，为1则需要操作
                    cnt[c.charCodeAt() - 'a'.charCodeAt()] > 0) {// 对应位仍有存量
                    cnt[c.charCodeAt() - 'a'.charCodeAt()]--;// 存量中移除1
                    left ^= 1 << i;// 异或运算（相同为0相异为1）
                }
            }
            if (left < mask) {// 如果贴纸可以替换，则对剩余位置进行扫描
                res = Math.min(res, dp(stickers, target, memo, left) + 1);// 取最小贴纸数
            }
        }
        memo[mask] = res;// 记录结果，避免重复计算
    }
    return memo[mask];
}
// @lc code=end
console.log(minStickers(["with", "example", "science"], "thehat"));//3
