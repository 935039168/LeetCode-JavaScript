/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree1 = function (nums1, nums2, nums3) {
    nums1 = Array.from(new Set(nums1));
    nums2 = Array.from(new Set(nums2));
    nums3 = Array.from(new Set(nums3));

    const map = new Map(),
        len1 = nums1.length,
        len2 = nums2.length,
        len3 = nums3.length
    res = [];
    for (let i = 0; i < len1; i++) {
        map.set(nums1[i], map.get(nums1[i]) === undefined ? 1 : map.get(nums1[i]) + 1);
    }
    for (let i = 0; i < len2; i++) {
        map.set(nums2[i], map.get(nums2[i]) === undefined ? 1 : map.get(nums2[i]) + 1);
    }
    for (let i = 0; i < len3; i++) {
        map.set(nums3[i], map.get(nums3[i]) === undefined ? 1 : map.get(nums3[i]) + 1);
    }
    for (const [key, val] of map) {
        if (val > 1) res.push(key);
    }
    return res;
};
var twoOutOfThree = function (nums1, nums2, nums3) {
    const set = new Set(nums1), ans = new Set();
    [...new Set(nums2)].forEach(val => {
        if (set.has(val)) {
            ans.add(val);
        } else {
            set.add(val);
        }
    });
    nums3.forEach(val => {
        if(set.has(val)){
            ans.add(val);
        }
    });
    return [...ans];
};