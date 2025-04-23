class Solution(object):
    def sortedSquares(self, nums):
        li=[]
        for i in nums:
            sq=i*i
            li.append(sq)
        return sorted(li)

        