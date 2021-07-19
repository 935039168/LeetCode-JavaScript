/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let a = 0;
    let b = nums[0];
    let res = b;
    for (let i = 1; i < nums.length; i++) {
        [a, b] = [b, res = Math.max(b, a + nums[i])];
    }
    return res;
};