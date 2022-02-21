/*
 * @lc app=leetcode.cn id=838 lang=javascript
 *
 * [838] 推多米诺
 */

// @lc code=start
/**
 * @param {string} dominoes
 * @return {string}
 */
// https://leetcode-cn.com/problems/push-dominoes/solution/javascriptshuang-zhi-zhen-by-935039168-okzs/
/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
    const n = dominoes.length;
    const dominoesArr = [...dominoes];
    let pL = 0, pR = -1;// 创建指针，pL需要设为0，因为L为第一个元素是要执行setOne(pL, i, "L")
    for (let i = 0; i < n; i++) {
        if (dominoesArr[i] === "L") {
            if (pR === -1) {// 如果不存在有效的pR，则使区间内全部骨牌向L倾倒
                setOne(pL, i, "L");
            } else {// 如果存在有效的pR，则使区间内全部骨牌向中间倾倒
                setTwo(pR, i);
            }
            pL = i;// 更新指针
            pR = -1;// 清除记录R的指针
        } else if (dominoesArr[i] === "R") {
            if (pR !== -1) {// 如果存在有效的pR，则使区间内全部骨牌向R倾倒
                setOne(pR, i, "R");
            }
            pR = i;// 更新指针
        }
    }
    // 如果pR >= pL，标明余下全部骨牌均向右倾倒
    if (pR >= pL) {
        setOne(pR, n - 1, "R");
    }
    return dominoesArr.join('');

    // 使骨牌向同一方向倾倒
    function setOne(a, b, D) {
        while (a <= b) {
            dominoesArr[a] = D;
            a++;
        }
    }
    // 使骨牌向中间倾倒
    function setTwo(a, b) {
        while (a < b) {
            dominoesArr[a] = "R";
            dominoesArr[b] = "L";
            a++;
            b--;
        }
    }
};
// @lc code=end

console.log(pushDominoes(".L.R...LR..L.."));// "LL.RR.LLRRLL.."
console.log(pushDominoes("R."));// "RR"
console.log(pushDominoes("R.R.L"));// "RRR.L"
