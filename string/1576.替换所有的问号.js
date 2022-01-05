/*
 * @lc app=leetcode.cn id=1576 lang=javascript
 *
 * [1576] 替换所有的问号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var modifyString1 = function (s) {
    s = s.split('');
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] === '?') {
            let pre = 0,
                next = 0;
            if (i > 0) {
                pre = s[i - 1].charCodeAt();
            }
            if (i < n - 1) {
                next = s[i + 1].charCodeAt();
            }
            for (let j = 97; j < 100; j++) {
                if (pre !== j && next !== j) {
                    let res = "";
                    switch (j) {
                        case 97:
                            res = "a";
                            break;
                        case 98:
                            res = "b";
                            break;
                        case 99:
                            res = "c";
                            break;
                    }
                    s[i] = res;
                    break;
                }
            }
        }
    }
    return s.join('');
};
// https://leetcode-cn.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solution/ti-huan-suo-you-de-wen-hao-by-leetcode-s-f7mp/
var modifyString = function (s) {
    const n = s.length;
    const arr = [...s];
    for (let i = 0; i < n; ++i) {
        if (arr[i] === '?') {
            for (let j = 0; j < 3; ++j) {
                if ((i > 0 && arr[i - 1] === String.fromCharCode('a'.charCodeAt() + j)) || (i < n - 1 && arr[i + 1] === String.fromCharCode('a'.charCodeAt() + j))) {
                    continue;
                }
                arr[i] = String.fromCharCode('a'.charCodeAt() + j);
                break;
            }
        }
    }
    return arr.join('');
};

console.log(modifyString("?zs"));
console.log(modifyString("ubv?w"));
// @lc code=end