// https://leetcode-cn.com/problems/all-paths-from-source-to-target/
// 给你一个有 n 个节点的 有向无环图（DAG），请你找出所有从节点 0 到节点 n-1 的路径并输出（不要求按特定顺序）
// 二维数组的第 i 个数组中的单元都表示有向图中 i 号节点所能到达的下一些节点，空就是没有下一个结点了。
// 译者注：有向图是有方向的，即规定了 a→b 你就不能从 b→a 。
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
// dfs
var allPathsSourceTarget1 = function (graph) {
    const res = [], len = graph.length;
    function dsf(deepth, arr) {
        if (len - 1 === deepth) {
            res.push([...arr, deepth]);
            return;
        }
        for (const item of graph[deepth]) {
            if (item) {
                dsf(item, [...arr, deepth]);
            }
        }
    }
    dsf(0, []);
    return res;
};
console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); // [[0,1,3],[0,2,3]]
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [3], [4], []])); // [[0,4],[0,3,4],[0,1,3,4],[0,1,2,3,4],[0,1,4]]
console.log(allPathsSourceTarget([[1], []])); // [[0,1]]
console.log(allPathsSourceTarget([[1, 2, 3], [2], [3], []])); // [[0,1,2,3],[0,2,3],[0,3]]
console.log(allPathsSourceTarget([[1, 3], [2], [3], []])); // [[0,1,2,3],[0,3]]
console.log(allPathsSourceTarget([[4, 3, 1], [3, 2, 4], [], [4], []])); // [[0,4],[0,3,4],[0,1,3,4],[0,1,4]]
console.log(allPathsSourceTarget([[2], [], [1]])); // [[0,2]]