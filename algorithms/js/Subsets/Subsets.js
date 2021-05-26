/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const res = [[]];
    for (const num of nums) {
        let length = res.length;
        for (let i = 0; i < length; ++i) {
            res.push([...res[i], num]);
        }
    }
    return res;
};