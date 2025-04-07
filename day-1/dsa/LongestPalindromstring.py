# 5. Longest Palindromic Substring

# Given a string s, return the longest palindromic substring in s.

 

# Example 1:

# Input: s = "babad"
# Output: "bab"
# Explanation: "aba" is also a valid answer.
# Example 2:

# Input: s = "cbbd"
# Output: "bb"
class Solution(object):
    def longestPalindrome(self, s):
       n=len(s)
       li=[]
       for i in range(n):
          for j in range(i,n):
             li.append(s[i:j+1])
       dic={}
       for i in li:
         if i==i[::-1]:
             dic[i]=len(i)
       res=max(dic,key=dic.get)
       return res