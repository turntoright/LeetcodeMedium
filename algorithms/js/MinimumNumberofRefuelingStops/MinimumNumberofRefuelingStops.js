/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
 var minRefuelStops = function(target, startFuel, stations) {
    const dp = new Array(stations.length + 1).fill(0);
    dp[0] = startFuel;
    for (let i = 0; i < stations.length; i++) {
        for (let j = i; j >= 0 && dp[j] >= stations[i][0]; j--)
            dp[j + 1] = Math.max(dp[j + 1], dp[j] + stations[i][1]);
    console.log(dp)
    }
    for (let i = 0; i < dp.length; i++)
        if (dp[i] >= target) return i;
    return -1;    
};