// https://leetcode-cn.com/problems/longest-substring-with-at-least-k-repeating-characters/
// 给你一个字符串 s 和一个整数 k ，请你找出 s 中的最长子串， 要求该子串中的每一字符出现次数都不少于 k 。返回这一子串的长度。
// 示例 1：
// 输入：s = "aaabb", k = 3
// 输出：3
// 解释：最长子串为 "aaa" ，其中 'a' 重复了 3 次。
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
    const len = s.length, map = new Map();
    if (s < k) return 0;
    for (let i = 0; i < len; i++) {
        let newVal = 1;
        if (map.has(s[i])) {
            newVal = map.get(s[i]) + 1;
        } else {
        }
        map.set(s[i], newVal);
    }
    let flag = true;
    for (const [key, value] of map) {
        if (value < k) {
            map.delete(key);
            flag = false;
        }
    }
    if (flag) return len;
    if (!map.size) return 0;
    let l = -1, res = 0;
    for (let i = 0; i < len; i++) {
        if (map.has(s[i]) && l < 0) {
            l = i;
        } else if (l >= 0 && !map.has(s[i])) {
            res = Math.max(res, longestSubstring(s.substring(l, i), k));
            l = -1;
        } else if (i === len - 1 && l >= 0) {
            res = Math.max(res, longestSubstring(s.substring(l, len), k));
        }
    }
    return res;
};

console.log(longestSubstring("araabsbaaabtbaaagbbaaabbgffffff", 4));//6
console.log(longestSubstring("aaabb", 3));//5