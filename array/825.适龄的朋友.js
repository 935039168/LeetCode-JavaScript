/*
 * @lc app=leetcode.cn id=825 lang=javascript
 *
 * [825] 适龄的朋友
 */

// @lc code=start
/**
 * @param {number[]} ages
 * @return {number}
 */
// 非常慢的模拟
// age[y] > age[x] 蕴含 age[y] > 100 && age[x] < 100
var numFriendRequests1 = function (ages) {
    const n = ages.length;
    let ans = 0;
    ages.sort((a, b) => a - b);
    for (let x = 0; x < n - 1; x++) {
        for (let y = x + 1; y < n; y++) {
            let xy = 1,
                yx = 1;
            if (ages[y] > ages[x]) {
                xy = 0;
            }
            if (xy === 1 && ages[y] <= 0.5 * ages[x] + 7) {
                xy = 0;
            }
            if (ages[x] > ages[y]) {
                yx = 0;
            }
            if (yx === 1 && ages[x] <= 0.5 * ages[y] + 7) {
                yx = 0;
            }
            ans += xy + yx;
        }
    }
    return ans;
};
// https://leetcode-cn.com/problems/friends-of-appropriate-ages/solution/gua-ling-de-peng-you-by-leetcode-solutio-v7yk/
// 计数排序 + 前缀和
var numFriendRequests2 = function (ages) {
    const cnt = new Array(121).fill(0);
    for (const age of ages) {
        ++cnt[age];
    }
    const pre = new Array(121).fill(0);
    for (let i = 1; i <= 120; i++) {
        pre[i] = pre[i - 1] + cnt[i];
    }
    let ans = 0;
    for (let i = 15; i <= 120; ++i) {
        if (cnt[i] > 0) {
            const bound = Math.floor(i * 0.5 + 8);
            ans += cnt[i] * (pre[i] - pre[bound - 1] - 1);
        }
    }
    return ans;
};
// 排序 + 双指针
var numFriendRequests = function (ages) {
    const n = ages.length;
    ages.sort((a, b) => a - b);
    let left = 0,
        right = 0,
        ans = 0;
    for (const age of ages) {
        if (age < 15) {
            continue;
        }
        while (ages[left] <= 0.5 * age + 7) {
            ++left;
        }
        while (right + 1 < n && ages[right + 1] <= age) {
            ++right;
        }
        ans += right - left;
    }
    return ans;
};
// @lc code=end
console.log(numFriendRequests([16, 16])); // 2
console.log(numFriendRequests([16, 17, 18])); // 2
console.log(numFriendRequests([20, 30, 100, 110, 120])); // 3