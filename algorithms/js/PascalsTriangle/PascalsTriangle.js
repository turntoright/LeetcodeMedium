/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    if (numRows === 1) return [[1]];
    if (numRows === 2) return [[1], [1, 1]];
    const res = [[1], [1, 1]];
    for (let i = 2; i < numRows; i++) {
        let row = [1];
        for (let j = 0; j < i - 1; j++) {
            row.push(res[i - 1][j] + res[i - 1][j + 1]);
        }
        row.push(1)
        res.push(row);
    }
    return res;
};