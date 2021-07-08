/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findLength = function(nums1, nums2) {
    let res = 0;
    const memo = Array.from({length: nums1.length + 1}, () => new Array(nums2.length + 1).fill(0));
    for (let i = nums1.length - 1; i >= 0; i--) {
        for (let j = nums2.length - 1; j >= 0; j--) {
            if (nums1[i] === nums2[j]) {
                memo[i][j] = memo[i+1][j+1] + 1;
                res = Math.max(res, memo[i][j]);
            }
        }
    }
    return res;
};