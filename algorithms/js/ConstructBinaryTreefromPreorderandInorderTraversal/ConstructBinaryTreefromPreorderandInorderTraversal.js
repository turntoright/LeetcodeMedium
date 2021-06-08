/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    let map = new Map();
    for (let i = 0; i < inorder.length; i++)
        map.set(inorder[i], i);
    return splitTree(preorder, inorder, map, 0, 0, inorder.length - 1);
};

var splitTree = function(P, I, M, pix, ileft, iright) {
    let rval = P[pix],
        root = new TreeNode(rval),
        imid = M.get(rval);
    if (imid > ileft) {
        root.left = splitTree(P, I, M, pix + 1, ileft, imid - 1);
    }
    if (imid < iright) {
        root.right = splitTree(P, I, M, pix + imid - ileft + 1, imid + 1, iright);
    }
    return root;
}