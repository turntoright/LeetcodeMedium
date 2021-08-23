/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    const map = {};
    
    const dfs = (node, map, k) => {
        if (!node) return false;
        if (map[k - node.val]) return true;        
        map[node.val] = 1;
        if (dfs(node.left, map, k)) return true;
        if (dfs(node.right, map, k)) return true;
    }
    return dfs(root, map, k) === true;
};