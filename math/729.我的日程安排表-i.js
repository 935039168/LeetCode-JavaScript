/*
 * @lc app=leetcode.cn id=729 lang=javascript
 *
 * [729] 我的日程安排表 I
 */

// @lc code=start

var MyCalendar = function () {
    this.schedule = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
    for (const item of this.schedule) {
        const s = item[0], e = item[1];
        if (s < end && start < e) {
            return false;
        }
    }
    this.schedule.push([start, end]);
    return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */
// @lc code=end

// binary search
MyCalendar.prototype.book = function (start, end) {
    const schedule = this.schedule;
    const len = schedule.length;

    if (len === 0) {
        schedule.push([start, end]);
        return true;
    }

    let l = 0, r = len;
    while (l < r) {
        let m = l + ((r - l) >> 1);
        if (schedule[m][1] <= start) {
            l = m + 1;
        } else if (schedule[m][1] > start) {
            r = m;
        }
    }

    let idx = l - 1; // schedule 中小于等于插入区间 start 右边界
    let insertIndex; // 最后插入区间的位置

    if (idx === -1) {
        if (schedule[0][0] >= end) {
            /* 如果 end 比最小区间左边界还要小，则插入到最左边 */
            insertIndex = 0;
        }
    } else {
        /* 如果 start 大于等于 「schedule 中小于等于插入区间 start 右边界」的 end
           并且 end 小于下一个区间的 start 或者后面没有区间了，则可以插入 */
        if (start >= schedule[idx][1] &&
            (idx + 1 === len || end <= schedule[idx + 1][0])
        ) {
            insertIndex = idx + 1;
        }
    }

    if (insertIndex !== undefined) {
        schedule.splice(insertIndex, 0, [start, end]);
        return true;
    }

    return false;
};