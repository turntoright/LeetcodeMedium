# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def findTarget(self, root: Optional[TreeNode], k: int) -> bool:
        ss = set()
        
        def dfs(node, ss, k):
            if not node: return False
            if k - node.val in ss: return True
            ss.add(node.val)
            if dfs(node.left, ss, k): return True
            if dfs(node.right, ss, k): return True
        
        return dfs(root, ss, k) == True