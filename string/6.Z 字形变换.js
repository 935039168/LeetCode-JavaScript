/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) { return s; }
    let res = "";
    const len = s.length;
    const gap = (numRows - 1) * 2;
    for (let i = 1; i <= numRows; i++) {
        if (i === 1 || i === numRows) {
            for (let j = i - 1; j < len; j += gap) {
                res += s[j];
            }
        } else {
            let isFirst = true;
            for (let j = i - 1; j < len;) {
                res += s[j];
                if (isFirst) {
                    j += (numRows - i) * 2;
                } else {
                    j += gap - (numRows - i) * 2;
                }
                isFirst = !isFirst;
            }
        }
    }
    return res;
};

console.log(convert("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR");
console.log(convert("PAYPALISHIRING", 4) === "PINALSIGYAHRPI");
console.log(convert("A", 1) === "A");