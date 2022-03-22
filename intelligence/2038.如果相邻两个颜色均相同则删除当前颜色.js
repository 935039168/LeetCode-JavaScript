/**
 * @param {string} colors
 * @return {boolean}
 */
// 不论二者如何操作，都不会影响对方结果
var winnerOfGame = function (colors) {
    let A = B = 0;
    const len = colors.length;
    for (let i = 1; i < len - 1; i++) {
        if (colors[i - 1] === 'A' && colors[i] === 'A' && colors[i + 1] === 'A') A++;
        if (colors[i - 1] === 'B' && colors[i] === 'B' && colors[i + 1] === 'B') B++;
    }
    return A > B ? true : false;
}
