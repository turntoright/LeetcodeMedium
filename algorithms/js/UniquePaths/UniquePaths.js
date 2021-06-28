/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    const map = Array.from({length: m}, () => new Array(n).fill(0));
    for (let i = 0; i < m; i++)
        map[i][0] = 1;
    for (let j = 0; j < n; j++)
        map[0][j] = 1;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            map[i][j] = map[i-1][j] + map[i][j-1];
        }
    }
    return map[m-1][n-1];
};