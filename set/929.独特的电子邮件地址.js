/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    const emailSet = new Set();
    for (const email of emails) {
        const i = email.indexOf("@");
        let local = email.slice(0, i).split("+")[0];
        local = local.replaceAll(".", "");
        emailSet.add(local + email.slice(i));
    }
    return emailSet.size;
};
// @lc code=end

