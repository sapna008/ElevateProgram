class Solution(object):
    def searchRange(self, nums, target):
        k=[]
        for o in range(len(nums)):
            if nums[o]==target:
                k.append(o)
        if len(k)>2:
            return [k[0],k[-1]]
        elif len(k)==2:
            return k
        elif len(k)==1:
            return [k[0],k[0]]
        else:
            return [-1,-1]