// 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const res = [];
    const len = nums.length;
    if (len === 0) { return []; }
    for (let i = 0; i < len; i++) {
        const temp = nums.slice();// 浅拷贝一份数组
        temp.splice(i, 1);// 删除位于第一位的元素
        let arr = [];
        if (temp.length) {
            arr = permute(temp);
            arr.forEach((item) => {
                res.push([nums[i]].concat(item));// 拼接新数组
            });
        } else {
            res.push([nums[i]]);
        }
    }
    return res;
};
var permute2 = function (nums) {
    const res = [];
    const backtrack = function (path) {
        if (path.length === nums.length) {
            res.push(path);
            return;
        }
        nums.forEach(n => {
            if (path.includes(n)) {
                return;// 只是跳出当前轮次的循环
            } else {
                backtrack(path.concat(n));
            }
        });
    };
    backtrack([]);
    return res;
};

console.log(permute([1, 2, 3]));
console.log(permute2([1, 2, 3]));