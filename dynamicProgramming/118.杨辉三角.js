// 输入: 5
// 输出:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let r = [];
    // for (let i = 1; i <= numRows; i++) {
    //     let row = [1];
    //     if (i > 2) {
    //         for (let j = 0; j <= r[i - 2].length - 2; ++j) {
    //             row.push(r[i - 2][j] + r[i - 2][j + 1]);
    //         }
    //     }
    //     if (i > 1) { row.push(1); }
    //     r.push(row);
    // }
    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            row[j] = r[i - 1][j - 1] + r[i - 1][j]
        }
        r.push(row);
    }
    return r;
};

console.log(generate(5));