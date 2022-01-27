// 正则yyds！
/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function (sentence) {
    return sentence.split(' ').filter(w => /^([,.!]|[a-z]+(-[a-z]+)?[,.!]?)$/.test(w)).length;
};