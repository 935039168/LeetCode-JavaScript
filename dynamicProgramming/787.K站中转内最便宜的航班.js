// https://leetcode-cn.com/problems/cheapest-flights-within-k-stops
// 有 n 个城市通过一些航班连接。给你一个数组 flights ，其中 flights[i] = [fromi, toi, pricei] ，表示该航班都从城市 fromi 开始，以价格 pricei 抵达 toi。
// 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到出一条最多经过 k 站中转的路线，使得从 src 到 dst 的 价格最便宜 ，并返回该价格。 如果不存在这样的路线，则输出 -1。
/**
 * @param {number} n 城市数量
 * @param {number[][]} flights 航线数组
 * @param {number} src 出发城市
 * @param {number} dst 目的地
 * @param {number} k 最多中转数
 * @return {number} 最少花费
 */
// https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/solution/k-zhan-zhong-zhuan-nei-zui-bian-yi-de-ha-abzi/
// 动态规划 dp 二维数组 
var findCheapestPrice1 = function (n, flights, src, dst, k) {
    // const f = new Array(k + 2).fill(0).map(() => new Array(n).fill(Infinity));
    const f = Array.from(Array(k + 2), () => Array(n).fill(Infinity));
    // f[飞行次数][目的地] = 花费
    f[0][src] = 0;// 经过0次航班到达src最少花费0元
    for (let t = 1; t <= k + 1; ++t) {
        for (const flight of flights) {
            const [j, i, cost] = flight;// 解构赋值
            f[t][i] = Math.min(f[t][i], f[t - 1][j] + cost);// 比较花费，保留最小方案
        }
    }
    let ans = Infinity;
    for (let t = 1; t <= k + 1; ++t) {
        ans = Math.min(ans, f[t][dst]);// 在小于k次的解集中，获取最小花费方案
    }
    return ans == Infinity ? -1 : ans;
};
// 动态规划 dp 一维数组
var findCheapestPrice = function (n, flights, src, dst, k) {
    let f = Array(n).fill(Infinity),
        ans = Infinity;
    f[src] = 0;
    for (let t = 1; t <= k + 1; ++t) {
        const g = Array(n).fill(Infinity);
        for (const flight of flights) {
            const [j, i, cost] = flight;// 解构赋值
            g[i] = Math.min(g[i], f[j] + cost);
        }
        f = g;
        ans = Math.min(ans, f[dst]);
    }
    return ans == Infinity ? -1 : ans;
};

console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 1));// 200
console.log(findCheapestPrice(3, [[0, 1, 100], [1, 2, 100], [0, 2, 500]], 0, 2, 0));// 500