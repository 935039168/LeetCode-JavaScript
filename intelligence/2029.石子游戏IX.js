// https://leetcode-cn.com/problems/stone-game-ix/solution/xie-gei-yong-javascriptshua-ti-de-tong-x-ef2j/
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function (stones) {
    const s = [0, 0, 0], // 存储mod0 mod1 mod2数量
        n = stones.length;
    for (let i = 0; i < n; i++) s[stones[i] % 3]++;
    if (s[0] % 2 === 0) { // mod0数量为偶数时，无实质作用
        // 如果同时存在mod1 mod2：1.数量不同，先手选取数量少的，获胜；2.数量相等，先手任选，获胜；
        // 如果只存在一种：1.取到第三次时后手胜；2.取光后手胜；
        return s[1] !== 0 && s[2] !== 0;
    }
    // mod0为奇数时，可以起到翻转局面的作用
    // 如果mod1 mod2数量相差超过2，则先手选择数量多的可以取胜；
    return s[2] > s[1] + 2 || s[1] > s[2] + 2;
};