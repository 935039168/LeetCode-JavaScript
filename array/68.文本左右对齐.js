// https://leetcode-cn.com/problems/text-justification/
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
// 链接：https://leetcode-cn.com/problems/text-justification/solution/js-huan-xing-mo-ni-guo-cheng-by-chen-xin-2v5a/
var fullJustify = function (words, maxWidth) {
    const ans = [];
    let cur = 0, tmp = [];
    for (const w of words) {
        // 统计长度 + 当前单词长度 + 最少空格长度
        const width = cur + w.length + tmp.length;
        // 大于等于maxWidth就需要进行换行
        if (width >= maxWidth) {
            // 等于说明空格数量刚好是最少的空格长度
            if (width === maxWidth) tmp.push(w), cur += w.length;
            // 所有的空格数量
            const sum = maxWidth - cur;
            // 单词间隔数量
            const cnt = tmp.length - 1;
            // 间隔平均的空格数量
            const average = sum / cnt | 0;
            // 多出来的空格数量，需要添加到左边
            const remain = sum % cnt;
            // 生成行
            ans.push(tmp.reduce((s, w, i) => s + ' '.repeat(average + (remain + 1 > i ? 1 : 0)) + w).padEnd(maxWidth, ' '));
            // 重置
            tmp.length = 0;
            cur = 0;
        }
        // 当前单词已处理，要处理下一个单词
        if (width === maxWidth) continue;
        cur += w.length;
        tmp.push(w);
    }
    // 处理最后一行
    if (tmp.length) ans.push(tmp.join(' ').padEnd(maxWidth, ' '));
    return ans;
};
