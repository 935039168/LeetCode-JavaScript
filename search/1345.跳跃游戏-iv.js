/*
 * @lc app=leetcode.cn id=1345 lang=javascript
 *
 * [1345] 跳跃游戏 IV
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
// BFS
// https://leetcode-cn.com/problems/jump-game-iv/solution/js-bfs-guan-jian-zai-xiang-tong-zhi-de-j-p9n6/
var minJumps = function (arr) {
    const n = arr.length;
    if (n === 1) return 0;
    const map = {};
    for (let i = 0; i < n; i++) {
        (map[arr[i]] = map[arr[i]] || []).push(i);
    }
    const tar = n - 1;
    let step = 0;
    let queue = [0];
    // 设置两个哨兵
    const vis = new Set([-1, n]);
    while (true) {
        const tmp = [];
        step++;
        for (const i of queue) {
            map[arr[i]].push(i - 1, i + 1);
            for (const j of map[arr[i]]) {
                if (vis.has(j)) continue;
                if (j === tar) return step;
                vis.add(j);
                tmp.push(j);
            }
            // 清空相同值能访问的节点
            map[arr[i]].length = 0;
        }
        queue = tmp;
    }
};
// @lc code=end