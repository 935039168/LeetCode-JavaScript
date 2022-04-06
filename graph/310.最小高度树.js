/*
 * @lc app=leetcode.cn id=310 lang=javascript
 *
 * [310] 最小高度树
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    let res = [];

    if (n == 1) {
        res.push(0);
        return res;
    }

    let degree = new Array(n).fill(0);
    let map = new Array(n).fill(0).map(() => new Array());

    for (let item of edges) {
        degree[item[0]]++;
        degree[item[1]]++;
        map[item[0]].push(item[1]);
        map[item[1]].push(item[0]);
    }

    let queue = [];
    for (let i = 0; i < n; i++) {
        if (degree[i] == 1) {
            queue.push(i);
        }
    }

    while (queue.length !== 0) {
        res = [];
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let cur = queue.shift();
            res.push(cur);

            let neighbors = map[cur];
            for (let neighbor of neighbors) {
                degree[neighbor]--;
                if (degree[neighbor] == 1) {
                    queue.push(neighbor);
                }
            }
        }
    }

    return res;
};

console.log(findMinHeightTrees(4, [[1, 0], [1, 2], [1, 3]]));
// @lc code=end

