from typing import List

class Solution:
    def subarraySum(self, nums: List[int], k: int) -> int:
        subarr = []
        for i in range(len(nums)):
            for j in range(i+1, len(nums)+1):
                subarr.append(nums[i:j])
        sumar = []
        for i in subarr:
            sumar.append(sum(i))

        return sumar.count(k)
