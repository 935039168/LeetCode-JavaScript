/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
// https://leetcode-cn.com/problems/maximize-the-confusion-of-an-exam/solution/kao-shi-de-zui-da-kun-rao-du-by-leetcode-qub5/
// 滑动窗口
var maxConsecutiveAnswers = function (answerKey, k) {
    return Math.max(maxConsecutiveChar(answerKey, k, 'T'), maxConsecutiveChar(answerKey, k, 'F'));
};
const maxConsecutiveChar = (answerKey, k, ch) => {
    const n = answerKey.length;
    let ans = 0;
    // 维护区间中另一种字符的数量为sum
    for (let left = 0, right = 0, sum = 0; right < n; right++) {
        sum += answerKey.charAt(right) !== ch ? 1 : 0;
        while (sum > k) {
            sum -= answerKey[left++] !== ch ? 1 : 0;
        }
        ans = Math.max(ans, right - left + 1);
    }
    return ans;
};