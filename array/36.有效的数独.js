/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 模拟 哈希
var isValidSudoku1 = function (board) {
    const set1 = new Set();
    const set2 = new Set();
    for (let i = 0; i < 9; i++) {
        set1.clear();
        set2.clear();
        for (let j = 0; j < 9; j++) {
            const temp1 = board[i][j];
            const temp2 = board[j][i];
            if (temp1 !== ".") {
                if (!set1.has(temp1)) {
                    set1.add(temp1);
                } else {
                    return false;
                }
            }
            if (temp2 !== ".") {
                if (!set2.has(temp2)) {
                    set2.add(temp2);
                } else {
                    return false;
                }
            }
        }
    }
    for (let j = 0; j < 9; j = j + 3) {
        for (let i = 0; i < 9; i = i + 3) {
            set1.clear();
            for (let ii = 0; ii < 3; ii++) {
                for (let jj = 0; jj < 3; jj++) {
                    const temp1 = board[j + jj][i + ii];
                    if (temp1 !== ".") {
                        if (!set1.has(temp1)) {
                            set1.add(temp1);
                        } else {
                            return false;
                        }
                    }
                }
            }
        }
    }
    return true;
};
// 一次遍历
var isValidSudoku = function (board) {
    const row = Array(9).fill(0).map(() => Array(9).fill(0));// 存放行数据
    const col = Array(9).fill(0).map(() => Array(9).fill(0));// 存放列数据
    // 慎用fill：当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用 https://www.cnblogs.com/lhs-fight/p/14212969.html
    const box = Array(3).fill(0).map(() => Array(3).fill(0).map(() => Array(9).fill(0)));// 存放9组3*3小方格组成的3*3大方格数据
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const c = board[i][j];
            if (c !== ".") {
                const index = c - 0 - 1;// 数值范围1~9
                row[i][index]++;
                col[j][index]++;
                box[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
                if (row[i][index] > 1 ||
                    col[j][index] > 1 ||
                    box[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                    return false;
                }
            }
        }
    }
    return true;
}
// @lc code=end
console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));// true
console.log(isValidSudoku([["8", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]));// false
console.log(isValidSudoku([[".", ".", ".", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."], [".", "9", ".", ".", ".", ".", ".", ".", "1"], ["8", ".", ".", ".", ".", ".", ".", ".", "."], [".", "9", "9", "3", "5", "7", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "4", "."], [".", ".", ".", "8", ".", ".", ".", ".", "."], [".", "1", ".", ".", ".", ".", "4", ".", "9"], [".", ".", ".", "5", ".", "4", ".", ".", "."]]));// false