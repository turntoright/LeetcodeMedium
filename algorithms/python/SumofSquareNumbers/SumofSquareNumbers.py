class Solution:
    def judgeSquareSum(self, c: int) -> bool:
        return any(int((c - a*a)**0.5)**2 == c - a*a
                   for a in range(int(c**0.5) + 1))