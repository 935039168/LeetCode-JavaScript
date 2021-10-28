/*
 * @lc app=leetcode.cn id=869 lang=javascript
 *
 * [869] 重新排序得到 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf21 = function (n) {
    const num = (n + "").length;
    let cur = 1;
    const arr = ["1"], NUM = Math.pow(10, 9);
    while (cur < NUM) {
        cur *= 2;
        arr.push(cur + "");
    }
    const set = arr.filter(a => a.length === num);
    for (let i = 0; i < set.length; i++) {
        let cur = [...set[i]], tar = [...(n + "")];
        for (let j = 0; j < cur.length; j++) {
            for (let k = 0; k < tar.length; k++) {
                if (cur[j] === tar[k]) {
                    cur.splice(j, 1);
                    tar.splice(k, 1);
                    j--;
                    k--;
                    break;
                }
            }
            if (cur.length !== tar.length) { return false; }
        }
        if (cur.length === 0) { return true; }
    }
    return false;
};

var reorderedPowerOf22 = function (n) {
    const bits = ['0112344778', '012356789', '234455668', '112234778', '01466788', '23334455', '11266777', '0368888', '0134449', '0122579', '0145678', '224588', '122446', '011237', '35566', '23678', '13468', '1289', '0469', '0248', '0124', '125', '256', '128', '46', '23', '16', '8', '4', '2', '1'];
    const bit = (n + '').split('').sort((a, b) => a - b).join('');
    return bits.includes(bit);
};

var reorderedPowerOf2 = function (n) {
    const set = new Set()
    set.add('1')
    const maxNunber = Math.pow(10, 9)
    let num = 1
    while (num <= maxNunber) {
        num = num * 2
        const sortValue = String(num).split('').sort()
        set.add(sortValue.join())
    }
    return set.has(String(n).split('').sort().join())
};
// @lc code=end
console.log(reorderedPowerOf2(16));
