/**
 * @param {number} h
 * @param {number} w
 * @param {number[]} horizontalCuts
 * @param {number[]} verticalCuts
 * @return {number}
 */
 var maxArea = function(h, w, horizontalCuts, verticalCuts) {
    horizontalCuts.sort((a, b) => a - b);
    verticalCuts.sort((a, b) => a - b);
    horizontalCuts.unshift(0), horizontalCuts.push(h);
    verticalCuts.unshift(0), verticalCuts.push(w);
    let maxH = 0, maxV = 0;
    for (let i = 0; i < horizontalCuts.length - 1; i++)
        maxH = Math.max(maxH, horizontalCuts[i + 1] - horizontalCuts[i]);
    for (let i = 0; i < verticalCuts.length - 1; i++)
        maxV = Math.max(maxV, verticalCuts[i + 1] - verticalCuts[i]);
    return (maxH * maxV) % 1000000007
};