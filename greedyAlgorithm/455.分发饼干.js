/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    const sortFunc = function (a, b) {
        return a - b;
    };
    g.sort(sortFunc);
    s.sort(sortFunc);
    let res = 0;

    // for (; g.length > 0;) {
    //     const gi = g.shift();
    //     for (; s.length > 0;) {
    //         if (gi <= s.shift()) {
    //             ++res;
    //             break;
    //         }
    //     }
    // };

    s.forEach(n => {
        if (n >= g[res]) {
            ++res;
        }
    });

    return res;
};

console.log(findContentChildren([10, 9, 8, 7, 10, 9, 8, 7], [10, 9, 8, 7]));// 4
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));// 2