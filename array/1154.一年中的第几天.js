/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
// 普通闰年：公历年份是4的倍数，且不是100的倍数的，为闰年（如2004年、2020年等就是闰年）。
// 世纪闰年：公历年份是整百数的，必须是400的倍数才是闰年（如1900年不是闰年，2000年是闰年）。
var dayOfYear = function (date) {
    const [y, m, d] = date.split('-').map((item) => parseInt(item));
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let ans = 0;
    if ((y % 400 !== 0 && y % 100 === 0) || y % 4 !== 0) {
        days[1] = 28
    }
    for (let i = 0; i < m - 1; i++) {
        ans += days[i];
    }
    ans += d;
    return ans;
};
// @lc code=end