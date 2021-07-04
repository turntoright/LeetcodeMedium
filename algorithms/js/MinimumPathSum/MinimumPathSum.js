/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    const m = grid.length, n = grid[0].length;
    const sumGrid = Array.from({length: m}, () => new Array(n));
    sumGrid[0][0] = grid[0][0];
    for (let i = 1; i < m; i++) {
        sumGrid[i][0] = grid[i][0] + sumGrid[i - 1][0];
    }
    for (let j = 1; j < n; j++)
        sumGrid[0][j] = grid[0][j] + sumGrid[0][j - 1];
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            sumGrid[i][j] = grid[i][j] + Math.min(sumGrid[i-1][j], sumGrid[i][j-1]);
        }
    }
    return sumGrid[m-1][n-1];
};