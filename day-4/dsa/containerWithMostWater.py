class Solution:
    def maxArea(self, height: List[int]) -> int:
        n=len(height)
        maxarea=0
        i=0
        for i in range(n):
            for j in range(i+1,n):
                if maxarea<min(height[i],height[j])*(j-i):
                    maxarea=min(height[i],height[j])*(j-i)
        return maxarea
        