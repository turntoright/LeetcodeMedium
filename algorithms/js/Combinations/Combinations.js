/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k, out = [], curr = [], index = 1) {
    if (curr.length === k) {
        out.push(curr);
        return;
    } else {
        while(index <= n) {
            combine(n, k, out, [...curr, index], ++index);
        }
    }
    return out;
};