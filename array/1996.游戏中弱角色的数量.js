/**
 * @param {number[][]} properties
 * @return {number}
 */
// https://leetcode-cn.com/problems/the-number-of-weak-characters-in-the-game/solution/you-xi-zhong-ruo-jiao-se-de-shu-liang-by-3d2g/
// 排序 + 记录最大防御值
var numberOfWeakCharacters1 = function (properties) {
    properties.sort((a, b) => {
        return a[0] === b[0] ? (a[1] - b[1]) : (b[0] - a[0]);
    });
    console.log(properties);
    let maxDef = 0,
        ans = 0;
    for (const p of properties) {
        if (p[1] < maxDef) {
            ans++;
        } else {
            maxDef = p[1];
        }
    }
    return ans;
};
// 单调栈
var numberOfWeakCharacters = function (properties) {
    properties.sort((a, b) => {
        return a[0] === b[0] ? (b[1] - a[1]) : (a[0] - b[0]);
    });
    let ans = 0;
    const st = [];
    for (const p of properties) {
        while (st.length && st[st.length - 1] < p[1]) {
            st.pop();
            ans++;
        }
        st.push(p[1]);
    }
    return ans;
};
console.log(numberOfWeakCharacters([
    [1, 5],
    [10, 4],
    [4, 3],
    [4, 1],
    [4, 5]
])); // 2
console.log(numberOfWeakCharacters([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2]
])); // 1