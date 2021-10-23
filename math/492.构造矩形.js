/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
    let w = Math.floor(Math.sqrt(area));
    while (area % w !== 0) {
        --w;
    }
    return [Math.floor(area / w), w];
};
// @lc code=end

