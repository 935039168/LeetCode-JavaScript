/*
 * @lc app=leetcode.cn id=1036 lang=javascript
 *
 * [1036] 逃离大迷宫
 */

// @lc code=start
/*
    200个blocked最多可以封堵住200*(200-1)/2个格子,
    到达条件满足一下任一即可：
    1.起止点被封锁在同一处;
    2.起止点都没有被封锁.
*/
/**
 * @param {number[][]} blocked
 * @param {number[]} source
 * @param {number[]} target
 * @return {boolean}
 */
// https://leetcode-cn.com/problems/escape-a-large-maze/solution/tao-chi-da-mi-gong-by-leetcode-solution-qxhz/
// 在包围圈中
const BLOCKED = -1;
// 不在包围圈中
const VALID = 0;
// 无论在不在包围圈中，但在 n(n-1)/2 步搜索的过程中经过了 target
const FOUND = 1;

const dirs = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0]
];
const BOUNDARY = 1000000;

var isEscapePossible = function (blocked, source, target) {
    if (blocked.length < 2) {
        return true;
    }

    const hashBlocked = new Set();
    for (const pos of blocked) {
        hashBlocked.add([pos[0], pos[1]].toString());
    }

    let result = check(blocked, source, target, hashBlocked);
    if (result === FOUND) {
        return true;
    } else if (result === BLOCKED) {
        return false;
    } else {
        result = check(blocked, target, source, hashBlocked);
        return result !== BLOCKED;
    }
};

const check = (blocked, start, finish, hashBlocked) => {
    const sx = start[0],
        sy = start[1];
    const fx = finish[0],
        fy = finish[1];
    let countdown = Math.floor(blocked.length * (blocked.length - 1) / 2);
    const startPair = [sx, sy];
    const queue = []; // 广度优先队列
    queue.push(startPair);
    const visited = new Set(); // 记录已访问过的点
    visited.add(startPair.toString());
    while (queue.length && countdown > 0) {
        const [x, y] = queue.shift();
        for (let d = 0; d < 4; ++d) {
            const nx = x + dirs[d][0],
                ny = y + dirs[d][1];
            const newPair = [nx, ny];
            if (nx >= 0 && nx < BOUNDARY && ny >= 0 && ny < BOUNDARY && !hashBlocked.has(newPair.toString()) && !visited.has(newPair.toString())) {
                if (nx === fx && ny === fy) {
                    return FOUND;
                }
                --countdown;
                queue.push(newPair);
                visited.add(newPair.toString());
            }
        }
    }
    if (countdown > 0) {
        return BLOCKED;
    }
    return VALID;
};
// @lc code=end