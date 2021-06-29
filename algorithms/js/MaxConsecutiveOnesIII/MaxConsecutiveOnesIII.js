/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var longestOnes = function(nums, k) {
    let max = 0;
    for (let left = -1, right = 0; right < nums.length; right++) {
        if (nums[right] === 1 || --k >= 0) {
            right - left > max && (max = right - left);
        } else {
            while (nums[++left] !== 0);
            ++k;
        }
    }
    return max;
};