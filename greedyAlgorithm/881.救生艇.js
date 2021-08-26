// https://leetcode-cn.com/problems/boats-to-save-people/
// 第 i 个人的体重为 people[i]，每艘船可以承载的最大重量为 limit。
// 每艘船最多可同时载两人，但条件是这些人的重量之和最多为 limit。
// 返回载到每一个人所需的最小船数。(保证每个人都能被船载)。
// 示例 3：
// 输入：people = [3,5,3,4], limit = 5
// 输出：4
// 解释：4 艘船分别载 (3), (3), (4), (5)
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
// 贪心（审题审题还是审题！最多可同时载两人）
var numRescueBoats = function (people, limit) {
    const len = people.length;
    let res = 0, l = 0, r = len - 1;
    people = people.sort((a, b) => b - a);
    while (l <= r) {
        if (people[l] + people[r] <= limit) {
            l++;
            r--;
            res++;
        } else {
            l++;
            res++;
        }
    }
    return res;
};

console.log(numRescueBoats([1, 2], 3));// 1
console.log(numRescueBoats([3, 2, 2, 1], 3));// 3
console.log(numRescueBoats([3, 5, 3, 4], 5));// 4
console.log(numRescueBoats([3, 2, 3, 2, 2], 6));// 3
console.log(numRescueBoats([1, 2, 5, 65, 6, 5, 3, 5, 35, 6, 99, 3, 5, 63, 56, 3, 56],
    100));// 9
console.log(numRescueBoats([1, 2, 5, 65, 6, 5, 3, 5, 35, 6, 36, 3, 5, 63, 56, 3, 56],
    99));// 9