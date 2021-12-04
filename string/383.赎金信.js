/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const arr = new Array(26).fill(0),
        v = "a".charCodeAt(0),
        l1 = magazine.length,
        l2 = ransomNote.length;
    let ans = true;
    for (let i = 0; i < l1; i++) {
        arr[magazine[i].charCodeAt(0) - v]++;
    }
    for (let i = 0; i < l2; i++) {
        --arr[ransomNote[i].charCodeAt(0) - v] < 0 ? ans = false : ans;
    }
    return ans;
};