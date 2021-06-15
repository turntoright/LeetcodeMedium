/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
 var makesquare = function(matchsticks) {
    if (!matchsticks || matchsticks.length < 4) return false;
    let sum = matchsticks.reduce((acc, curr) => acc + curr);
    if (sum % 4 !== 0) return false;
    
    const dfs = (nums, sums, index, target) => {
        console.log(sums)
        if (index === nums.length) {
            return (sums[0] === sums[1] && sums[1] === sums[2] && sums[2] === sums[3]);
        }
        for (let i = 0; i < 4; i++) {
            if (sums[i] + nums[index] > target) continue;
            sums[i] += nums[index];
            if (dfs(nums, sums, index + 1, target)) return true;
            sums[i] -= nums[index];
        }
        return false;
    }
    
    return dfs(matchsticks, [0, 0, 0, 0], 0, sum / 4);
};