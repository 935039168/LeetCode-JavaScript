/*
 * @lc app=leetcode.cn id=794 lang=javascript
 *
 * [794] 有效的井字游戏
 */

// @lc code=start
/**
 * @param {string[]} board
 * @return {boolean}
 */
// 这解法有点费键盘
var validTicTacToe = function (board) {
    let xN = 0,
        oN = 0,
        finish = 0;
    const arr = [],
        win = [];
    for (let i = 0; i < 3; i++) {
        const item = board[i];
        for (let j = 0; j < 3; j++) {
            if (item[j] === "X") {
                xN++;
            } else if (item[j] === "O") {
                oN++;
            }
        }
    }
    if (board[0][0] === board[0][1] && board[0][1] === board[0][2] && board[0][2] !== ' ') {
        finish++;
        arr.push([00, 01, 02]);
        win.push(board[0][0]);
    }
    if (board[1][0] === board[1][1] && board[1][1] === board[1][2] && board[1][2] !== ' ') {
        finish++;
        arr.push([10, 11, 12]);
        win.push(board[1][0]);
    }
    if (board[2][0] === board[2][1] && board[2][1] === board[2][2] && board[2][2] !== ' ') {
        finish++;
        arr.push([20, 21, 22]);
        win.push(board[2][0]);
    }
    if (board[0][0] === board[1][0] && board[1][0] === board[2][0] && board[2][0] !== ' ') {
        finish++;
        arr.push([00, 10, 20]);
        win.push(board[0][0]);
    }
    if (board[0][1] === board[1][1] && board[1][1] === board[2][1] && board[2][1] !== ' ') {
        finish++;
        arr.push([01, 11, 21]);
        win.push(board[0][1]);
    }
    if (board[0][2] === board[1][2] && board[1][2] === board[2][2] && board[2][2] !== ' ') {
        finish++;
        arr.push([02, 12, 22]);
        win.push(board[0][2]);
    }
    if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[2][2] !== ' ') {
        finish++;
        arr.push([00, 11, 22]);
        win.push(board[0][0]);
    }
    if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== ' ') {
        finish++;
        arr.push([02, 11, 20]);
        win.push(board[0][2]);
    }
    let winItem = win[0];
    if (finish > 1) {
        for (let i = 1; i < win.length; i++) {
            if (winItem !== win[i]) return false;
        }
        let cross = [];
        for (let i = 0; i < arr.length - 1; i++) {
            arr[i].map((item) => {
                if (arr[i + 1].includes(item)) {
                    if ((cross.length === 0 || cross[0] === item)) {
                        cross.push(item);
                    } else {
                        return false;
                    }
                }
            });
        }
        if (cross.length !== 1) {
            return false;
        }
    }
    if (xN - oN !== 0 && xN - oN !== 1) {
        return false;
    }
    if (xN - oN === 0 && winItem === 'X') {
        return false;
    }
    if (xN - oN === 1 && winItem === 'O') {
        return false;
    }
    return true;
};
console.log(validTicTacToe(["XXX", "XOO", "OO "])); //false
console.log(validTicTacToe(["XXX", "OOX", "OOX"])); //true
console.log(validTicTacToe(["XXX", "   ", "OOO"])); //false
// @lc code=end