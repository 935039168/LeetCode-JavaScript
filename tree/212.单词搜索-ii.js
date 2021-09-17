/*
 * @lc app=leetcode.cn id=212 lang=javascript
 *
 * [212] 单词搜索 II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// 题解 https://leetcode-cn.com/problems/word-search-ii/solution/js-xian-zhi-sheng-cheng-de-zi-dian-shu-s-b84q/
var findWords = function (board, words) {
    const n = board.length, m = board[0].length;
    // 算出字典树最大深度
    const maxLen = words.reduce((max, w) => Math.max(max, w.length), 0);
    const trie = new Trie(board, n, m);
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 可以判断下开头字母是否在words里，才调用insert
            trie.insert(i, j, maxLen);
        }
    }
    return words.filter(w => trie.find(w));
};
class Trie {
    constructor(board, n, m) {
        this.root = {};
        this.n = n;
        this.m = m;
        this.board = board;
        this.set = new Array(n * m).fill(false);
    }
    insert(i, j, dep, node = this.root) {
        // 剩余深度为0
        if (dep === 0) return;
        // 不在board范围内
        if (i < 0 || j < 0 || i >= this.n || j >= this.m) return;
        const idx = i * this.m + j, c = this.board[i][j];
        // 插入过则返回
        if (this.set[idx]) return;
        // 标记当前点
        this.set[idx] = true;
        node = node[c] = (node[c] || {});
        this.insert(i + 1, j, dep - 1, node);
        this.insert(i - 1, j, dep - 1, node);
        this.insert(i, j + 1, dep - 1, node);
        this.insert(i, j - 1, dep - 1, node);
        // 释放当前点
        this.set[idx] = false;
    }
    find(w) {
        let node = this.root;
        for (const c of w) {
            if (!node[c]) return false;
            node = node[c];
        }
        return true;
    }
}
// @lc code=end
console.log(findWords([["o", "a", "a", "n"], ["e", "t", "a", "e"], ["i", "h", "k", "r"], ["i", "f", "l", "v"]], ["oath", "pea", "eat", "rain"]));// ["eat","oath"] 
console.log(findWords([["a", "b"], ["c", "d"]], ["abcb"]));// [] 
