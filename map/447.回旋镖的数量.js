/*
 * @lc app=leetcode.cn id=447 lang=javascript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Medium (60.40%)
 * Likes:    176
 * Dislikes: 0
 * Total Accepted:    33.3K
 * Total Submissions: 51.8K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对 互不相同 的点 points ，其中 points[i] = [xi, yi] 。回旋镖 是由点 (i, j, k) 表示的元组
 * ，其中 i 和 j 之间的距离和 i 和 k 之间的距离相等（需要考虑元组的顺序）。
 * 
 * 返回平面上所有回旋镖的数量。
 * 
 * 
 * 示例 1：
 * 
 * 
 * 输入：points = [[0,0],[1,0],[2,0]]
 * 输出：2
 * 解释：两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 * 
 * 
 * 示例 2：
 * 
 * 
 * 输入：points = [[1,1],[2,2],[3,3]]
 * 输出：2
 * 
 * 
 * 示例 3：
 * 
 * 
 * 输入：points = [[1,1]]
 * 输出：0
 * 
 * 
 * 
 * 
 * 提示：
 * 
 * 
 * n == points.length
 * 1 
 * points[i].length == 2
 * -10^4 i, yi 
 * 所有点都 互不相同
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    // 计算两点距离
    function calcDiatance(x, y) {
        const a = x[0] - y[0], b = x[1] - y[1];
        return a * a + b * b;
    }
    const len = points.length,
        arr = Array(len),
        map = new Map();
    let res = 0;
    for (let i = 0; i < len; i++) {
        map.clear();
        for (let j = 0; j < len; j++) {
            arr[j] = calcDiatance(points[i], points[j]);
            if (map.has(arr[j])) {
                map.set(arr[j], map.get(arr[j]) + 1);
            } else {
                map.set(arr[j], 1);
            }
        }
        for (const val of map.values()) {
            if (val >= 2) {
                res += val * (val - 1);
            }
        }
    }
    return res;
};
// @lc code=end

