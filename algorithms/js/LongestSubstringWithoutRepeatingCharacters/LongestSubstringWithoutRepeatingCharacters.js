/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {    
    let str = "", res = 0;
    for (const c of s) {
        let index = str.indexOf(c);
        if (index > -1) {
            res = Math.max(res, str.length);
            str = str.substring(index + 1);
            str += c;
        } else {
            str += c;
        }
    }
    return Math.max(res, str.length);
};