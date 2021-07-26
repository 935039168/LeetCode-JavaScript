/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
// 方法一：分割+解析，两次遍历，线性空间
var compareVersion1 = function (version1, version2) {
    const vArr1 = version1.split('.');
    const vArr2 = version2.split('.');
    const len1 = vArr1.length;
    const len2 = vArr2.length;
    for (let i = 0; i < Math.max(len1, len2); i++) {
        const v1 = isNaN(Number(vArr1[i])) ? 0 : Number(vArr1[i]);
        const v2 = isNaN(Number(vArr2[i])) ? 0 : Number(vArr2[i]);
        if (v1 != v2) { return v1 > v2 ? 1 : -1; }
    }
    return 0;
};
// 方法二：双指针，一次遍历，常数空间
var compareVersion = function (version1, version2) {
    const getNextChunk = function (version, n, p) {
        if (p >= n) { return [0, p]; }// 如果超出则用0补位
        let pEnd = p, num = '';
        while (pEnd < n && version[pEnd] !== '.') {
            num += version[pEnd];
            pEnd++;
        }
        return [Number(num), pEnd];
    };
    let p1 = 0, p2 = 0;
    const n1 = version1.length, n2 = version2.length;
    while (p1 < n1 || p2 < n2) {
        const r1 = getNextChunk(version1, n1, p1);
        const r2 = getNextChunk(version2, n2, p2);
        if (r1[0] !== r2[0]) {
            return r1[0] > r2[0] ? 1 : -1;
        }
        [p1, p2] = [r1[1] + 1, r2[1] + 1];// 避开.号所在位置
    };
    return 0;
};

console.log(compareVersion("1.01", "1.001"));