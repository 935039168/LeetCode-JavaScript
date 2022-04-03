// https://leetcode-cn.com/problems/plates-between-candles/solution/zha-zhu-zhi-jian-de-pan-zi-by-leetcode-s-ejst/
// 预处理 + 前缀和
var platesBetweenCandles = function (s, queries) {
    const n = s.length;
    const preSum = new Array(n).fill(0);
    for (let i = 0, sum = 0; i < n; i++) {
        if (s[i] === '*') {
            sum++;
        }
        preSum[i] = sum;
    }
    const left = new Array(n).fill(0);// 记录每一位左侧蜡烛的位置
    for (let i = 0, l = -1; i < n; i++) {
        if (s[i] === '|') {
            l = i;
        }
        left[i] = l;
    }
    const right = new Array(n).fill(0);// 记录每一位右侧蜡烛的位置
    for (let i = n - 1, r = -1; i >= 0; i--) {
        if (s[i] === '|') {
            r = i;
        }
        right[i] = r;
    }
    const ans = new Array(queries.length).fill(0);
    for (let i = 0; i < queries.length; i++) {
        const query = queries[i];
        const x = right[query[0]], y = left[query[1]];
        ans[i] = x === -1 || y === -1 || x >= y ? 0 : preSum[y] - preSum[x];
    }
    return ans;
};

console.log(platesBetweenCandles("**|**|***|", [[2, 5], [5, 9]]));// [2,3]
console.log(platesBetweenCandles("***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]]));// [9,0,0,0,0]
console.log(platesBetweenCandles("*|*||||**|||||||*||*||*||**|*|*||*", [[2, 33], [2, 32], [3, 31], [0, 33], [1, 24], [3, 20], [7, 11], [5, 32], [2, 31], [5, 31], [0, 31], [3, 28], [4, 33], [6, 29], [2, 30], [2, 28], [1, 30], [1, 33], [4, 32], [5, 30], [4, 23], [0, 30], [3, 10], [5, 28], [0, 28], [4, 28], [3, 33], [0, 27]]));// [9,9,9,10,6,4,0,9,9,9,10,7,9,8,8,7,9,10,9,8,5,9,2,7,8,7,9,8]

// 默一遍
var platesBetweenCandles1 = function (s, queries) {
    const n = s.length, m = queries.length, preSum = new Array(n).fill(0);
    let calc = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === '*') {
            calc++;
        }
        preSum[i] = calc;
    }
    const left = new Array(n).fill(-1), right = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        if (s[i] === '|') {
            left[i] = i;
        } else {
            left[i] = i > 0 ? left[i - 1] : -1;
        }
    }
    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === '|') {
            right[i] = i;
        } else {
            right[i] = i < n - 1 ? right[i + 1] : -1;
        }
    }
    const res = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        const x = right[queries[i][0]],
            y = left[queries[i][1]];
        if (x !== -1 && y !== -1 && x < y)
            res[i] = preSum[y] - preSum[x];
    }
    return res;
};

console.log(platesBetweenCandles1("**|**|***|", [[2, 5], [5, 9]]));// [2,3]
console.log(platesBetweenCandles1("***|**|*****|**||**|*", [[1, 17], [4, 5], [14, 17], [5, 11], [15, 16]]));// [9,0,0,0,0]
