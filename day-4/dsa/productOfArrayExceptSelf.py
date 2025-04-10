import math
from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
    #     mul = []
    #     for i in range(len(nums)):
    #         mul.append(math.prod(nums[:i] + nums[i+1:]))
    #     return mul
    #another approch
        n = len(nums)
        ans = [0] * n
        left = right = 1
        for i, x in enumerate(nums):
            ans[i] = left
            left *= x
        for i in range(n - 1, -1, -1):
            ans[i] *= right
            right *= nums[i]
        return ans
