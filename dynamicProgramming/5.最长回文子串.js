/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome1 = function (s) {
    let res = s[0];
    for (let i = 0; i < s.length; i++) {
        let t = s[i];
        // 针对“aba”式回文串
        for (let j = 1; i + j < s.length && j <= i; j++) {
            if (s[i - j] === s[i + j]) {
                t = s[i - j] + t + s[i - j];
            } else {
                break;
            }
        }
        if (t.length > res.length) {
            res = t;
        }
        // 针对“aa”式回文串
        if (s[i] === s[i + 1]) {
            t = s[i] + s[i + 1];
            for (let j = 1; i + 1 + j < s.length && j <= i; j++) {
                if (s[i - j] === s[i + 1 + j]) {
                    t = s[i - j] + t + s[i - j];
                } else {
                    break;
                }
            }
            if (t.length > res.length) {
                res = t;
            }
        }
    }
    return res;
};

// 动态规划
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome2 = function (s) {
    let len = s.length;
    if (len < 2) {
        return s;
    }

    let maxLen = 1;
    let begin = 0;

    let dp = new Array(len);
    for (let i = 0; i < len; i++) {
        dp[i] = [];
        for (let j = 0; j < len; j++) {
            dp[i][j] = null;
        }
        dp[i][i] = true;
    }

    // 先枚举子串长度
    for (let L = 2; L <= len; L++) {
        // 枚举左边界，左边界的上限设置可以宽松一些
        for (let i = 0; i < len; i++) {
            // 由L和i可以确定右边界，即j-i+1=L可知
            let j = L + i - 1;
            // 如果右边界越界，退出循环
            if (j >= len) {
                break;
            }
            if (s[i] !== s[j]) {
                dp[i][j] = false;
            } else {
                if (j - i < 3) {
                    dp[i][j] = true;
                } else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }
            // 只要 dp[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.substring(begin, begin + maxLen);
};

console.log(longestPalindrome1("aaassssaaa"));
console.log(longestPalindrome2("aaassssaaa"));