/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    const l1 = matrix.length;
    const l2 = matrix[0].length;
    const m = new Array(l1);
    let res = 1;
    for (let i = 0; i < l1; i++) {
        m[i] = [];
        for (let j = 0; j < l2; j++) {
            m[i].push(0);
        }
    }
    for (let i = 0; i < l1; i++) {
        for (let j = 0; j < l2; j++) {
            res = Math.max(dfs(i, j), res);
        }
    }
    return res;

    function dfs(i, j) {
        let res = 1;
        if (m[i][j] === 0) {
            const a = i - 1 >= 0 ? m[i - 1][j] === undefined ? -1 : m[i - 1][j] : -1;
            const b = i + 1 < l1 ? m[i + 1][j] === undefined ? -1 : m[i + 1][j] : -1;
            const c = j - 1 >= 0 ? m[i][j - 1] === undefined ? -1 : m[i][j - 1] : -1;
            const d = j + 1 < l2 ? m[i][j + 1] === undefined ? -1 : m[i][j + 1] : -1;
            if (a >= 0 && matrix[i - 1][j] < matrix[i][j]) {
                res = Math.max((a === 0 ? dfs(i - 1, j) : a) + 1, res);
            }
            if (b >= 0 && matrix[i + 1][j] < matrix[i][j]) {
                res = Math.max((b === 0 ? dfs(i + 1, j) : b) + 1, res);
            }
            if (c >= 0 && matrix[i][j - 1] < matrix[i][j]) {
                res = Math.max((c === 0 ? dfs(i, j - 1) : c) + 1, res);
            }
            if (d >= 0 && matrix[i][j + 1] < matrix[i][j]) {
                res = Math.max((d === 0 ? dfs(i, j + 1) : d) + 1, res);
            }
            m[i][j] = res;
        }
        return res;
    };
};

console.log(longestIncreasingPath([[9, 9, 4], [6, 6, 8], [2, 1, 1]]));
console.log(longestIncreasingPath([[3, 4, 5], [3, 2, 6], [2, 2, 1]]));
console.log(longestIncreasingPath([[1]]));