# 125. Valid Palindrome

# A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

# Given a string s, return true if it is a palindrome, or false otherwise.

 

# Example 1:

# Input: s = "A man, a plan, a canal: Panama"
# Output: true
# Explanation: "amanaplanacanalpanama" is a palindrome.
# Example 2:

# Input: s = "race a car"
# Output: false
# Explanation: "raceacar" is not a palindrome.
# Example 3:

# Input: s = " "
# Output: true
# Explanation: s is an empty string "" after removing non-alphanumeric characters.
# Since an empty string reads the same forward and backward, it is a palindrome.

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        l2=[]
        for i in list(s):
            if ord(i)>32 and ord(i)<48:
                continue
            if ord(i)>64 and ord(i)<91:
                l2.append(chr(ord(i)+32))
            if ord(i)>96 and ord(i)<123:
                l2.append(i)
            if ord(i)>47 and ord(i)<58:
                l2.append(i)
        return "".join(l2)=="".join(l2)[::-1]

        