/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDuplicates = function(nums) {
    const res = [];
    nums.unshift(0);
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i]);
        if (nums[idx] < 0) res.push(idx);
        nums[idx] *= -1;
    }
    return res;
};