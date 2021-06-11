/**
 * @param {number[]} stones
 * @return {number}
 */
 var stoneGameVII = function(stones) {
    let len = stones.length;
    let dpCurr = new Uint32Array(len), dpLast = new Uint32Array(len);
    for (let i = len - 2; i >= 0; i--) {
        let total = stones[i], temp = dpLast;
        dpLast = dpCurr, dpCurr = temp;
        for (let j = i + 1; j < len; j++) {
            total += stones[j];
            dpCurr[j] = Math.max(total - stones[i] - dpLast[j], total - stones[j] - dpCurr[j - 1]);
        }
    }
    return dpCurr[len - 1];    
};