/**
 * @param {number[]} arr
 * @return {number}
 */
 var minSetSize = function(arr) {
    const halfLen = arr.length / 2;
    const map = {};
    for (let i = 0; i < arr.length; i++) {
        map[arr[i]] = (map[arr[i]] || 0) + 1;
    }
    const values = Object.values(map).sort((a, b) => b - a);
    let sum = 0;
    for (let i = 0; i < values.length; i++) {
        sum += values[i];
        if (sum >= halfLen) return i + 1;
    }
    return values.length;
};