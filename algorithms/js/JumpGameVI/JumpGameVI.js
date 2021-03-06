/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var maxResult = function(nums, k) {
    if (nums.length === 1) return nums[0];
    const dp = new Array(nums.length);
    const queue = [0];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        while (queue.length && queue[0] < i - k) {
            queue.shift();
        }
        dp[i] = dp[queue[0]] + nums[i];
        while (queue.length && dp[i] >= dp[queue[queue.length - 1]]) {
            queue.pop();
        }
        queue.push(i);
    }
    return dp[nums.length - 1];
};