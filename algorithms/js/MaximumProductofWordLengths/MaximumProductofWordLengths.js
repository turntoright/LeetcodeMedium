/**
 * @param {string[]} words
 * @return {number}
 */
 var maxProduct = function(words) {    
    const bitsets = [];
    for (const word of words) {
        let bitset = 0;
        for (let i = 0; i < word.length; i++) {
            bitset |= 1 << (word.charCodeAt(i))
        }
        bitsets.push(bitset);
    }
    let res = 0;
    for (let i = 0; i < words.length - 1; i++)
        for (let j = i + 1; j < words.length; j++)
            if ((bitsets[i] & bitsets[j]) === 0) res = Math.max(res, words[i].length * words[j].length);
    return res;
};