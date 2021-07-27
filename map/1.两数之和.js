/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
};

var twoSum2 = function (nums, target) {
    const res = [];
    const map = new Map();
    nums.forEach((n, i) => {
        const v = target - n;
        if (map.has(n)) {
            res.push(map.get(n));
            res.push(i);
            return false;
        } else {
            map.set(v, i);
        }
    });
    return res;
};

var twoSum = function (nums, target) {
    const map = new Map();
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        const v = target - nums[i];
        if (map.has(nums[i])) {
            return [map.get(nums[i]), i];
        } else {
            map.set(v, i);
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));