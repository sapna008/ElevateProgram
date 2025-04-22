# 13. **Question:** Check if a string is a palindrome (ignore case and non-alphanumeric characters).
#     **Input:** `"A man, a plan, a canal: Panama"`
#     **Expected Output:** `true`
def is_palindrome(s):
    filtered = ''.join(c.lower() for c in s if c.isalnum())
    return filtered == filtered[::-1]

input_str = "A man, a plan, a canal: Panama"
print(is_palindrome(input_str)) 
