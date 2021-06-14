/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    let res = 0;
    while (truckSize && boxTypes.length) {
        let [numBox, numUnit] = boxTypes.shift();
        if (truckSize > numBox) {
            res += numBox * numUnit;
            truckSize -= numBox;
        } else {
            res += truckSize * numUnit;
            truckSize = 0;
        }
    }
    return res;
};