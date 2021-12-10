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
var validTicTacToe1 = function (board) {
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
// 链接：https://leetcode-cn.com/problems/valid-tic-tac-toe-state/solution/you-xiao-de-jing-zi-you-xi-by-leetcode-s-c1j3/
var validTicTacToe = function(board) {
    let xCount = 0, oCount = 0;
    for (const row of board) {
        for (const c of row) {
            xCount = (c === 'X') ? (xCount + 1) : xCount;
            oCount = (c === 'O') ? (oCount + 1) : oCount;
        }
    }
    if (oCount != xCount && oCount !== xCount - 1) {
        return false;
    }
    if (win(board, 'X') && oCount !== xCount - 1) {
        return false;
    }
    if (win(board, 'O') && oCount !== xCount) {
        return false;
    }
    return true;
};

const win = (board, p) => {
    for (let i = 0; i < 3; ++i) {
        if (p === board[0][i] && p === board[1][i] && p === board[2][i]) {
            return true;
        }
        if (p === board[i][0] && p === board[i][1] && p === board[i][2]) {
            return true;
        }
    }
    if (p === board[0][0] && p === board[1][1] && p === board[2][2]) {
        return true;
    }
    if (p === board[0][2] && p === board[1][1] && p === board[2][0]) {
        return true;
    }
    return false;
}
console.log(validTicTacToe(["XXX", "XOO", "OO "])); //false
console.log(validTicTacToe(["XXX", "OOX", "OOX"])); //true
console.log(validTicTacToe(["XXX", "   ", "OOO"])); //false
// @lc code=end