class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        m = {}
        for s in strs:
            key = ''.join(sorted(s))
            m[key] = m.get(key, []) + [s]
            
        return m.values()