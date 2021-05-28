/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumUniqueSubarray = function(nums) {  
    let res = 0, currSum = 0;
    const m = {};
    let [i, j] = [0, 0];
    while (j < nums.length) {
        if (m[nums[j]]) {
            while (m[nums[j]]) {
                currSum -= nums[i];     
                m[nums[i]] = null;
                i++;
            }
        }
        m[nums[j]] = 1;
        currSum += nums[j];
        res = Math.max(res, currSum);
        j++;
    }
    return res;
};