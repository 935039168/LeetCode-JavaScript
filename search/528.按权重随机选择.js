// https://leetcode-cn.com/problems/random-pick-with-weight/
/**
 * @param {number[]} w
 */
var Solution = function (w) {
    pre = [w[0]];
    this.n = w.length;
    for (let i = 1; i < this.n; ++i) {
        pre[i] = pre[i - 1] + w[i];
    }
    this.total = pre[this.n - 1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    const x = Math.floor((Math.random() * this.total)) + 1;
    const binarySearch = (x) => {
        let low = 0, high = this.n - 1;
        while (low < high) {
            const mid = Math.floor((high - low) / 2) + low;
            if (pre[mid] < x) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return low;
    }
    return binarySearch(x);
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */