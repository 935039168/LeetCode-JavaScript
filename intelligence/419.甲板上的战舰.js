/*
 * @lc app=leetcode.cn id=419 lang=javascript
 *
 * [419] 甲板上的战舰
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
// 智力题，顺序搜索，只在第一次遇到的时候计数
var countBattleships = function (board) {
    let m = board.length,
        n = board[0].length,
        ans = 0;
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0 && board[i - 1][j] === "X") continue;
            if (j > 0 && board[i][j - 1] === "X") continue;
            if (board[i][j] === "X") ans++;
        }
    }
    return ans;
};
// @lc code=end