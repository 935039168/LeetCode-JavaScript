/**
 * @param {number[]} nums
 * @return {number}
 */
// 暴力
var countQuadruplets1 = function (nums) {
    const n = nums.length;
    let ans = 0;
    for (let a = 0; a < n; a++) {
        for (let b = a + 1; b < n; b++) {
            for (let c = b + 1; c < n; c++) {
                const v = nums[a] + nums[b] + nums[c];
                for (let d = c + 1; d < n; d++) {
                    if (v === nums[d]) ans++;
                }
            }
        }
    }
    return ans;
};
// 
var countQuadruplets = function (nums) {
    const n = nums.length,
        cnt = new Array(10010).fill(0);
    let ans = 0;
    for (let c = n - 2; c >= 2; c--) {
        cnt[nums[c + 1]]++;
        for (let a = 0; a < n; a++) {
            for (let b = a + 1; b < c; b++) {
                ans += cnt[nums[a] + nums[b] + nums[c]];
            }
        }
    }
    return ans;
};
console.log(countQuadruplets([28, 8, 49, 85, 37, 90, 20, 8])); // 1