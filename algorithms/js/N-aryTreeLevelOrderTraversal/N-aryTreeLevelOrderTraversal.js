/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const result = [];

    const dfs = (node, level) => {
        if (!node) return;
        if (result[level] === undefined) {
            result.push([node.val]);
        } else {
            result[level].push(node.val);
        }
        
        for (const child of node.children) {
            dfs(child, level + 1);
        }
    }
    
    dfs(root, 0);
    return result;

};