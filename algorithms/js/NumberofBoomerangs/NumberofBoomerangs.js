/**
 * @param {number[][]} points
 * @return {number}
 */
 var numberOfBoomerangs = function(points) {
    
    const getDistance = (a, b) => {
        let dx = a[0] - b[0], dy = a[1] - b[1];
        return dx*dx + dy*dy;
    }
    
    let res = 0;
    const map = new Map();
    for (let i = 0; i < points.length; i++) {
        for (let j = 0; j < points.length; j++) {
            if (i === j) continue;
            let d = getDistance(points[i], points[j]);
            map.set(d, (map.get(d) || 0) + 1); 
        }
        for(const val of map.values()) {
            res += val * (val - 1);
        }
        map.clear();
    }
    return res;
};