/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    if (!nums || nums.length === 0) return 0;
    const set = new Set(nums);
    let res = 0;
    for (const num of nums) {
        if (set.has(num - 1)) continue;
        let curNum = num, count = 1;
        while (set.has(curNum + 1)) {
            count++;
            curNum++;
        }
        res = Math.max(res, count);
    }
    return res;
};