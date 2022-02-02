/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    const pos = word.indexOf(ch);
    return [...word.substring(0, pos + 1)].reverse().join('') + word.substring(pos + 1);
};