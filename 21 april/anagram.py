# 9. **Question:** Check if two strings are anagrams of each other.
#     **Input:** `"listen"` and `"silent"`
#     **Expected Output:** `true`

def are_anagrams(str1, str2):
    return sorted(str1) == sorted(str2)

s1 = "listen"
s2 = "silent"
print(are_anagrams(s1, s2)) 

