/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var findTargetSumWays = function(nums, target) {
    let sums = new Map([[0, 1]]);
    for (const num of nums) {
        const next = new Map();
        for (const [sum, amount] of sums) {
            const plus = sum + num;
            const minus = sum - num;
            next.set(plus, next.has(plus) ? next.get(plus) + amount : amount);
            next.set(minus, next.has(minus) ? next.get(minus) + amount : amount);
        }
        sums = next;
    }
    return sums.has(target) ? sums.get(target) : 0;
};