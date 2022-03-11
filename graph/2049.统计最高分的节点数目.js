/**
 * @param {number[]} parents
 * @return {number}
 */
var countHighestScoreNodes = function (parents) {
    let map = new Map();
    parents.forEach((e, i) => {
        if (map.has(e)) map.get(e).push(i)
        else map.set(e, [i]);
    })
    let len = parents.length;
    let max = -Infinity;
    let count = 1;
    const digui1 = (val) => {
        let fenshu;
        let l = 0;
        let r = 0;
        if (val == null) {
            return 0
        }
        if (!map.has(val)) {
            fenshu = len - 1
        } else {
            let arr = map.get(val);
            if (arr.length == 1) {
                l = digui1(arr[0]);
                r = digui1(null)
            } else {
                l = digui1(arr[0]);
                r = digui1(arr[1]);
            }
            fenshu = Math.max(1, l) * Math.max(1, r) * Math.max(1, len - l - r - 1);
        }
        if (max < fenshu) {
            max = fenshu;
            count = 1;
        } else if (max == fenshu) {
            count++
        }
        return l + r + 1
    }
    digui1(0)
    return count
};