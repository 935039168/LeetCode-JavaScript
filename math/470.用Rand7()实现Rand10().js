// https://leetcode-cn.com/problems/implement-rand10-using-rand7/
// 已有方法 rand7 可生成 1 到 7 范围内的均匀随机整数，试写一个方法 rand10 生成 1 到 10 范围内的均匀随机整数。
// 不要使用系统的 Math.random() 方法。
var rand10 = function () {
    while (true) {
        let res = (rand7() - 1) * 7 + rand7();
        if (res <= 40) {
            return res % 10 + 1;
        }
        res = (res - 40 - 1) * 7 + rand7();
        if (res <= 60) {
            return res % 10 + 1;
        }
        res = (res - 20 - 1) * 7 + rand7();
        if (res <= 20) {
            return res % 10 + 1;
        }
    }
};