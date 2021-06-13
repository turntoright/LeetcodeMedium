/**
 * @param {string} s
 * @return {string}
 */
 var frequencySort = function(s) {
    let map = new Map();
    for (const c of s)
        map.set(c, (map.get(c) || 0) + 1)
    map = [...map.entries()].sort((a, b) => b[1] - a[1]);
    let res = "";
    for (const [c, n] of map) {
        res += c.repeat(n);
    }
    return res;
};