/*
 * @lc app=leetcode.cn id=630 lang=javascript
 *
 * [630] 课程表 III
 */

// @lc code=start
/**
 * @param {number[][]} courses
 * @return {number}
 */
var scheduleCourse = function (courses) {
    courses.sort((a, b) => (a[1] - b[1]))
    const pq = new PriorityQueue()
    let t = 0
    for (const course of courses) {
        if (t + course[0] > course[1] && pq.size > 0 && pq.peek() > course[0])
            t -= pq.poll()
        if (t + course[0] <= course[1]) {
            t += course[0]
            pq.offer(course[0])
        }
    }
    return pq.size
};

class PriorityQueue {
    constructor(
        compare = (a, b) => a > b
    ) {
        this.data = []
        this.size = 0
        this.compare = compare
    }

    peek() {
        return this.size === 0 ? null : this.data[0]
    }

    offer(val) {
        this.data.push(val)
        this._shifUp(this.size++)
    }

    poll() {
        if (this.size === 0) {
            return null
        }
        this._swap(0, --this.size)
        this._shifDown(0)
        return this.data.pop()
    }

    _parent(index) {
        return index - 1 >> 1
    }

    _child(index) {
        return (index << 1) + 1
    }

    _shifDown(index) {
        while (this._child(index) < this.size) {
            let child = this._child(index)
            if (child + 1 < this.size &&
                this.compare(this.data[child + 1], this.data[child])) {
                child = child + 1
            }
            if (this.compare(this.data[index], this.data[child])) {
                break
            }
            this._swap(index, child)
            index = child
        }
    }

    _shifUp(index) {
        while (this._parent(index) >= 0 &&
            this.compare(this.data[index], this.data[this._parent(index)])) {
            this._swap(index, this._parent(index))
            index = this._parent(index)
        }
    }

    _swap(a, b) {
        [this.data[a], this.data[b]] = [this.data[b], this.data[a]]
    }
}
// @lc code=end