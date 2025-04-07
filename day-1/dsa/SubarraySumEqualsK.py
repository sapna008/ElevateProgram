# 560. Subarray Sum Equals K

# Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

# A subarray is a contiguous non-empty sequence of elements within an array.

 

# Example 1:

# Input: nums = [1,1,1], k = 2
# Output: 2
# Example 2:

# Input: nums = [1,2,3], k = 3
# Output: 2
class Solution(object):
    def subarraySum(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        from collections import defaultdict
        count = 0
        pre_sum = 0
        pre_map = defaultdict(int)
        pre_map[0] = 1 
        #print(pre_map)
    
        for num in nums:
           pre_sum += num
           if (pre_sum - k) in pre_map:
              count += pre_map[pre_sum - k]
           pre_map[pre_sum] += 1
    
        return count
        