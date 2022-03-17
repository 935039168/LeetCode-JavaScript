/*
 * @lc app=leetcode.cn id=720 lang=javascript
 *
 * [720] 词典中最长的单词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string}
 */
// 暴力
var longestWord = function (words) {
    const s = new Set();
    for (const word of words) {
        s.add(word);
    }
    let ans = "";
    out:
    for (const word of s) {
        for (let i = 1; i < word.length; i++)
            if (!s.has(word.substring(0, i)))
                continue out
        if (word.length > ans.length || (word.length == ans.length && word.localeCompare(ans) < 0))
            ans = word
    }
    return ans;
};
// 字典树
var longestWord = function (words) {
    const trie = new Trie();
    for (const word of words) {
        trie.insert(word);
    }
    let longest = "";
    for (const word of words) {
        if (trie.search(word)) {
            if (word.length > longest.length || (word.length === longest.length && word.localeCompare(longest) < 0)) {
                longest = word;
            }
        }
    }
    return longest;
};

class Node {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.children = new Node();
        this.isEnd = false;
    }

    insert(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            const index = ch.charCodeAt() - 'a'.charCodeAt();
            if (!node.children[index]) {
                node.children[index] = new Node();
            }
            node = node.children[index];
        }
        node.isEnd = true;
    }

    search(word) {
        let node = this;
        for (let i = 0; i < word.length; i++) {
            const ch = word[i];
            const index = ch.charCodeAt() - 'a'.charCodeAt();
            if (!node.children[index] || !node.children[index].isEnd) {
                return false;
            }
            node = node.children[index];
        }
        return node && node.isEnd;
    }
}
// @lc code=end
console.log(longestWord(["w", "wo", "wor", "worl", "world"]));// "world"
