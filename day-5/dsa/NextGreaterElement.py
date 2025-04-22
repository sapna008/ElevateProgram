class Solution:
    def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
        ans={}
        stack=[]
        n=len(nums2)

        for i in range(n-1,-1,-1):
            curr_val=nums2[i]
            while(len(stack)!=0 and stack[-1]<=curr_val):
                stack.pop()
            if len(stack)==0:
                ans[curr_val]=-1
            else:
                ans[curr_val]=stack[-1]
            stack.append(curr_val)
        arr=[]
        for i in range(len(nums1)):
            arr.append(ans[nums1[i]])
        return arr