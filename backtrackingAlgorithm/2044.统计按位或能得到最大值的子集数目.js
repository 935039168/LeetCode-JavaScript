/**
 * @param {number[]} nums
 * @return {number}
 */
// https://leetcode-cn.com/problems/count-number-of-maximum-bitwise-or-subsets/solution/tong-ji-an-wei-huo-neng-de-dao-zui-da-zh-r6zd/
// 回溯
var countMaxOrSubsets1 = function (nums) {
    this.nums = nums;
    this.maxOr = 0;
    this.cnt = 0;
    dfs(0, 0);
    return this.cnt;
};

const dfs = (pos, orVal) => {
    if (pos === nums.length) {
        if (orVal > maxOr) {
            maxOr = orVal;
            cnt = 1;
        } else if (orVal === maxOr) {
            cnt++;
        }
        return;
    }
    dfs(pos + 1, orVal | nums[pos]);// 计算当前位
    dfs(pos + 1, orVal);// 不计算当前位
};
// 位运算
var countMaxOrSubsets = function (nums) {
    let maxOr = 0, cnt = 0;
    const n = nums.length;
    for (let i = 0; i < 1 << n; i++) {// 用n位二进制记录是否包含在子集
        let orVal = 0;
        for (let j = 0; j < n; j++) {
            if (((i >> j) & 1) === 1) {// 如果二进制对应位置为1，则说明该方案包括nums[j]，进行下一步计算
                orVal |= nums[j];
            }
        }
        if (orVal > maxOr) {// 若更大，更新最大值和计数
            maxOr = orVal;
            cnt = 1;
        } else if (orVal === maxOr) {
            cnt++;
        }
    }
    return cnt;
};
console.log(countMaxOrSubsets([3, 1])); // 2
console.log(countMaxOrSubsets([2, 2, 2])); // 7
console.log(countMaxOrSubsets([3, 2, 1, 5])); // 6
