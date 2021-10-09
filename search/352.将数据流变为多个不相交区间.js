/*
 * @lc app=leetcode.cn id=352 lang=javascript
 *
 * [352] 将数据流变为多个不相交区间
 */

// @lc code=start
// 题解 https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/solution/pythonjavajavascript-bing-cha-ji-by-himy-5elv/
let nums;
var SummaryRanges = function () {
    nums = new Array(10002);
};

/** 
 * @param {number} val
 * @return {void}
 */
SummaryRanges.prototype.addNum = function (val) {
    if (nums[val] === undefined) nums[val] = val + 1;
    finds(val);
};

/**
 * @return {number[][]}
 */
// 题解 https://leetcode-cn.com/problems/data-stream-as-disjoint-intervals/solution/pythonjavajavascript-bing-cha-ji-by-himy-5elv/
SummaryRanges.prototype.getIntervals = function () {
    let ans = new Array();
    for (let i = 0; i < 1001;) {
        if (nums[i] !== undefined) {
            let tmp = new Array(2);
            tmp[0] = i;
            tmp[1] = finds(nums[i]) - 1;
            i = tmp[1] + 1;
            ans.push(tmp);
        } else {
            i++;
        }
    }
    return ans;
};

const finds = function (x) {
    if (nums[x] === undefined) return x;
    nums[x] = finds(nums[x]);
    return nums[x];
};
/**
 * Your SummaryRanges object will be instantiated and called as such:
 * var obj = new SummaryRanges()
 * obj.addNum(val)
 * var param_2 = obj.getIntervals()
 */
// @lc code=end

