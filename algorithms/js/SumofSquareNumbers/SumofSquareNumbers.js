/**
 * @param {number} c
 * @return {boolean}
 */
 var judgeSquareSum = function(c) {
    let sq = Math.ceil(Math.sqrt(c));
    for (let a = 0; a <= sq; a++) {
        let aa = a * a;
        if (aa === c) return true;
        let cc = c - aa;
        if (Number.isInteger(Math.sqrt(cc))) return true;
    }
    return false;
};