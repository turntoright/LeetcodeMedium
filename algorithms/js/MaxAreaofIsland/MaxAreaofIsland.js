/**
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let res = 0, m = grid.length, n = grid[0].length;
    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row >= m || col >= n || !grid[row][col]) return 0;
        grid[row][col] = 0;
        return 1 + dfs(row - 1, col) + dfs(row, col - 1) + dfs(row + 1, col) + dfs(row, col + 1);
    }
    for (let i = 0; i < m; i++)
        for (let j = 0; j < n; j++)
            if (grid[i][j]) res = Math.max(res, dfs(i, j));
    return res;
};