/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks1 = function (score) {
    const order = [...score].sort((a, b) => b - a);
    const map = new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i], i + 1);
    }
    const res = [];
    for (let i = 0; i < score.length; i++) {
        let val = map.get(score[i]);
        switch (val) {
            case 1:
                val = "Gold Medal";
                break;
            case 2:
                val = "Silver Medal";
                break;
            case 3:
                val = "Bronze Medal";
                break;
            default:
                val = val + "";
                break;
        }
        res.push(val);
    }
    return res;
};
var findRelativeRanks = function (score) {
    const positionMap = [...score]
        .sort((a, b) => b - a)
        .reduce((map, number, index) => {
            map[number] = index + 1;
            return map;
        }, {});

    const positionChart = {
        [1]: 'Gold Medal',
        [2]: 'Silver Medal',
        [3]: 'Bronze Medal',
    };

    return score.map((number) => {
        return positionMap[number] > 3 ?
            positionMap[number] + '' :
            positionChart[positionMap[number]];
    });
};
console.log(findRelativeRanks([10, 3, 8, 9, 4]));
// @lc code=end