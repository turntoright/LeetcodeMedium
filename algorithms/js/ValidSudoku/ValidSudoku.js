/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    const seen = {};
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let char = board[i][j];
            if (char !== '.') {
                if (seen[char + 'in row' + i] ||
                   seen[char + 'in col' + j] ||
                   seen[char + 'in block' + Math.floor(i/3) + '-' + Math.floor(j/3)]) {
                    return false;
                } else {
                    seen[char + 'in row' + i] = 1;
                    seen[char + 'in col' + j] = 1;
                    seen[char + 'in block' + Math.floor(i/3) + '-' + Math.floor(j/3)] = 1;
                }
            }
        }
    }
    return true;
};