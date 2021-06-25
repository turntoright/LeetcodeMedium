/**
 * @param {number[][]} edges
 * @return {number[]}
 */
 var findRedundantConnection = function(edges) {
    const parent = Array.from({length: 2001}, (v, i) => i);
    
    const find = (parent, f) => {
        if (f !== parent[f]) parent[f] = find(parent, parent[f]);
        return parent[f];
    }
    
    for (const [f, t] of edges) {
        if (find(parent, f) === find(parent, t)) return [f, t]
        else parent[find(parent, f)] = find(parent, t);
    }
    
    return [,];
};