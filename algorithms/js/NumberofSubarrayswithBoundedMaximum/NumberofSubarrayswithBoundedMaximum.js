/**
 * @param {number[]} nums
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 var numSubarrayBoundedMax = function(nums, left, right) {
    let res = 0, mid = 0, low = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > right) {
            mid = 0;
        } else {
            mid++;
            res += mid;
        }
        if (nums[i] >= left) {
            low = 0;
        } else {
            low++;
            res -= low;
        }
    }
    return res;
};