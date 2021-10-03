// https://leetcode-cn.com/problems/find-missing-observations/
/**
 * @param {number[]} rolls
 * @param {number} mean
 * @param {number} n
 * @return {number[]}
 */
var missingRolls = function (rolls, mean, n) {
    const m = rolls.length;
    const sum = mean * (m + n);
    const sumM = rolls.reduce((a, b) => a + b, 0);
    const sumN = sum - sumM;
    let leftVal = sumN;
    if ((leftVal / n) > 6 || (leftVal / n) < 1) return [];
    let avg;
    avg = Math.floor(leftVal / n);
    // 平均分配
    const res = Array(n).fill(avg);
    let val = leftVal - avg * n;
    // 如有余量，顺序分担
    for (let i = 0; i < val; i++) {
        res[i]++;
    }
    return res;
};