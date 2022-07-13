/*
 * @lc app=leetcode.cn id=735 lang=javascript
 *
 * [735] 行星碰撞
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    const res = [asteroids[0]];
    const X = (newVal) => {
        if (res.length !== 0 && res[res.length - 1] > 0 &&
            ((res[res.length - 1] < 0 && newVal > 0) ||
                (res[res.length - 1] > 0 && newVal < 0))
        ) {
            return true;
        }
        return false;
    };
    loop: for (let i = 1; i < asteroids.length; i++) {
        const asteroid = asteroids[i];
        while (X(asteroid)) {
            if (Math.abs(res[res.length - 1]) < Math.abs(asteroid)) {// 栈中值小，则出栈
                res.pop();
            } else if (Math.abs(res[res.length - 1]) === Math.abs(asteroid)) {// 栈中值与当前值相等，则出栈、计算下一行星
                res.pop();
                continue loop;
            } else {// 栈外值小，则跳出
                continue loop;
            }
        }
        res.push(asteroid);
    }
    return res;
};
// @lc code=end
