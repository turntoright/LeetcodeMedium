/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
 var isInterleave = function(s1, s2, s3) {
    if ((s1.length + s2.length) !== s3.length) return false;
    const tab = Array.from({length: s1.length + 1}, x => new Array(s2.length + 1));
    for (let i = 0; i <= s1.length; i++) {
        for (let j = 0; j <= s2.length; j++) {
            if (i === 0 && j === 0) {
                tab[i][j] = true;
            } else if (i === 0) {
                tab[i][j] = (tab[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
            } else if (j === 0) {
                tab[i][j] = (tab[i - 1][j] && s1[i - 1] === s3[i + j - 1]);
            } else {
                tab[i][j] = (tab[i - 1][j] && s1[i - 1] === s3[i + j - 1] ||
                             tab[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
            }            
        }
    }
    return tab[s1.length][s2.length];
};

/* 

DP table represents if s3 is interleaving at (i+j)th position when s1 is at ith position, and s2 is at jth position. 0th position means empty string.
So if both s1 and s2 is currently empty, s3 is empty too, and it is considered interleaving. If only s1 is empty, then if previous s2 position is 
interleaving and current s2 position char is equal to s3 current position char, it is considered interleaving. similar idea applies to when s2 is 
empty. when both s1 and s2 is not empty, then if we arrive i, j from i-1, j, then if i-1,j is already interleaving and i and current s3 position 
equal, it s interleaving. If we arrive i,j from i, j-1, then if i, j-1 is already interleaving and j and current s3 position equal. it is interleaving. 

*/