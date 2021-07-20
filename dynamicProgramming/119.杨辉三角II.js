// 输入: 3
// 输出: [1,3,3,1]
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow1 = function (rowIndex) {
    let res = [1];
    for (let i = 1; i <= rowIndex; i++) {
        const item = new Array(i + 1).fill(1);
        for (let j = 1; j < i; j++) {
            item[j] = res[j - 1] + res[j];
        }
        res = item;
    }
    return res;
};
// 1
// 1 1
// 1 2 1
// 1 3 3 1
// 1 4 6 4 1
// 倒序计算，插入后不改变之后需要的值
var getRow2 = function (rowIndex) {
    const row = new Array(rowIndex + 1).fill(0);
    row[0] = 1;
    for (let i = 1; i <= rowIndex; ++i) {
        for (let j = i; j > 0; --j) {
            row[j] += row[j - 1];
            // console.log(`i:${i},j:${j}  =>  ${row}  =>  value:${row[j]}`);
        }
    }
    return row;
};

console.log(getRow1(4));
console.log(getRow2(10));