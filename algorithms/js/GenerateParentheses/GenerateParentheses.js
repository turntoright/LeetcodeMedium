/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const res = [];
    const btrack = (list, str, open, close, max) => {
        if (str.length === max * 2) {
            list.push(str);
            return;
        }
        if (open < max) btrack(list, str + "(", open + 1, close, max);
        if (close < open) btrack(list, str + ")", open, close + 1, max);
    }
    btrack(res, "", 0, 0, n);
    return res;
};