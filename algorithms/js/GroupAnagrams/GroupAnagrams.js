/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = new Map();
    for (let str of strs) {
        let ss = str.split('').sort().join('');
        if (map.has(ss)) {
            map.get(ss).push(str)
        } else {
            map.set(ss, [str])
        }
    }
    return [...map.values()];
};